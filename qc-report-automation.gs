/************************************************************
 * QC리포트 자동화_통합 — 센터별 "통합" 시트 → 본 파일로 집계 (개선판)
 * - 소스/대상 컬럼을 분리 설정 (불일치 안전)
 * - 평가일(J) 비거나 파싱 실패 시 C열(상담일시)로 폴백
 * - 필요 시 날짜필터 무시(강제 스캔) 지원
 * - [수정] 월/일 형식 날짜 파싱 시 월 경계 처리 개선
 ************************************************************/

/* ===== 설정 ===== */
const CFG_QC_PULL = {
  TIMEZONE: 'Asia/Seoul',

  // 소스 스프레드시트 (센터별 "통합" 시트가 존재)
  // ⬇ 소스 레이아웃을 명시(대상과 다르면 여기만 바꾸면 됩니다)
  SRC: {
    YONGSAN: {
      SSID: '1dIRBNMbCnC1qaWF0kneO-rPcQsTVI9-v_BqlYkkay7Y',
      SHEET: '통합',
      COLS: {
        EVAL_LETTERS: ['J', 'C'], // 1순위 J(평가일), 실패 시 C(상담일시) 폴백
        KEY_LETTER: 'L',          // 상담ID
        FB_FROM: 'AM',            // 피드백 시작
        FB_TO:   'AP'             // 피드백 끝
      }
    },
    GWANGJU: {
      SSID: '1S626SRufURubY97q4PCXuA2MLruyCoe1B4eZ14Xab3A',
      SHEET: '통합',
      COLS: {
        EVAL_LETTERS: ['J', 'C'],
        KEY_LETTER: 'L',
        FB_FROM: 'AM',
        FB_TO:   'AP'
      }
    },
  },

  // 대상 시트명 (이 파일 안)
  DEST: {
    YONGSAN: '용산 QC 모니터링현황_일자별',
    GWANGJU: '광주 QC 모니터링현황_일자별',
  },

  // 대상 레이아웃
  HEADER_ROW: 7,       // 7행: 헤더
  DATA_START_ROW: 8,    // 8행부터 데이터
  DEST_COLS: {
    EVAL_LETTERS: ['J', 'C'], // 대상도 동일 폴백 허용
    KEY_LETTER: 'L',
    FB_FROM: 'AM',
    FB_TO:   'AP'
  },

  // 동기화 범위
  UPSERT_LOOKBACK_DAYS: 14, // 최근 14일만 AM~AP 덮어쓰기
};

/* ===== 메뉴 ===== */
function onOpen(){
  SpreadsheetApp.getUi()
    .createMenu('QC 자동화(통합)')
    .addItem('지금 실행(두 센터)', 'runQcPullAllNow_')
    .addItem('지금 실행(날짜필터 무시·강제)', 'runQcPullAllNow_Force_')
    .addSeparator()
    .addItem('매일 19:00 자동 실행 설치', 'installQcPullTrigger')
    .addItem('자동 실행 해제', 'uninstallQcPullTrigger')
    .addToUi();
}

/* ===== 트리거 관리 ===== */
function installQcPullTrigger(){
  uninstallQcPullTrigger();
  ScriptApp.newTrigger('runQcPullAllNow_')
    .timeBased().atHour(19).everyDays(1)
    .inTimezone(CFG_QC_PULL.TIMEZONE)
    .create();
  SpreadsheetApp.getActive().toast('매일 19:00 실행 트리거 설치 완료', 'QC 자동화', 5);
}
function uninstallQcPullTrigger(){
  ScriptApp.getProjectTriggers().forEach(t=>{
    if (t.getHandlerFunction()==='runQcPullAllNow_') ScriptApp.deleteTrigger(t);
  });
  SpreadsheetApp.getActive().toast('자동 실행 트리거 해제 완료', 'QC 자동화', 5);
}

/* ===== 메인 실행 ===== */
function runQcPullAllNow_(){
  const dEnd = today_();
  const dStart = addDays_(dEnd, -CFG_QC_PULL.UPSERT_LOOKBACK_DAYS + 1); // 포함 범위
  const y = pullCenter_('YONGSAN', CFG_QC_PULL.DEST.YONGSAN, dStart, dEnd, {forceAll:false});
  const g = pullCenter_('GWANGJU', CFG_QC_PULL.DEST.GWANGJU, dStart, dEnd, {forceAll:false});
  SpreadsheetApp.getActive().toast(
    `동기화 완료\n용산: 추가 ${y.append} / 갱신 ${y.update} (소스검출 ${y.srcWindow}건)\n광주: 추가 ${g.append} / 갱신 ${g.update} (소스검출 ${g.srcWindow}건)`,
    'QC 자동화', 8
  );
}

/* 날짜필터 무시(강제) — 최초 시드/컬럼정합 테스트용 */
function runQcPullAllNow_Force_(){
  const y = pullCenter_('YONGSAN', CFG_QC_PULL.DEST.YONGSAN, null, null, {forceAll:true});
  const g = pullCenter_('GWANGJU', CFG_QC_PULL.DEST.GWANGJU, null, null, {forceAll:true});
  SpreadsheetApp.getActive().toast(
    `강제 동기화 완료(날짜필터 무시)\n용산: 추가 ${y.append} / 갱신 ${y.update} (소스검출 ${y.srcWindow}건)\n광주: 추가 ${g.append} / 갱신 ${g.update} (소스검출 ${g.srcWindow}건)`,
    'QC 자동화', 8
  );
}

/* ===== 센터별 처리 ===== */
function pullCenter_(centerKey, destSheetName, startDate, endDate, opt){
  const forceAll = !!(opt && opt.forceAll);

  const srcInfo = CFG_QC_PULL.SRC[centerKey];
  const src = SpreadsheetApp.openById(srcInfo.SSID).getSheetByName(srcInfo.SHEET);
  if(!src) throw new Error(`[${centerKey}] 소스 "통합" 시트를 찾을 수 없음`);

  const dst = SpreadsheetApp.getActive().getSheetByName(destSheetName);
  if(!dst) throw new Error(`[${centerKey}] 대상 시트를 찾을 수 없음: ${destSheetName}`);

  // 소스/대상 컬럼 인덱스 계산
  const srcEval0s = srcInfo.COLS.EVAL_LETTERS.map(colLetterToIndex0_);
  const srcKey0   = colLetterToIndex0_(srcInfo.COLS.KEY_LETTER);
  const srcFbFrom1= colLetterToIndex1_(srcInfo.COLS.FB_FROM);
  const srcFbTo1  = colLetterToIndex1_(srcInfo.COLS.FB_TO);

  const dstEval0s = CFG_QC_PULL.DEST_COLS.EVAL_LETTERS.map(colLetterToIndex0_);
  const dstKey0   = colLetterToIndex0_(CFG_QC_PULL.DEST_COLS.KEY_LETTER);
  const dstFbFrom1= colLetterToIndex1_(CFG_QC_PULL.DEST_COLS.FB_FROM);
  const dstFbTo1  = colLetterToIndex1_(CFG_QC_PULL.DEST_COLS.FB_TO);

  const fbCountSrc = srcFbTo1 - srcFbFrom1 + 1;
  const fbCountDst = dstFbTo1 - dstFbFrom1 + 1;

  // 1) 소스 데이터 취득
  const srcLastRow = src.getLastRow(), srcLastCol=src.getLastColumn();
  if (srcLastRow < CFG_QC_PULL.DATA_START_ROW) return {append:0, update:0, srcWindow:0};
  const dataRowCount = srcLastRow - CFG_QC_PULL.DATA_START_ROW + 1;
  const srcRows = src.getRange(CFG_QC_PULL.DATA_START_ROW, 1, dataRowCount, srcLastCol).getDisplayValues();

  // 대상 총 컬럼 수(안전 패딩)
  const dstLastCol = dst.getLastColumn();
  // 소스/대상 중 더 큰 쪽 + Dst FB 끝까지 보장
  const totalCols = Math.max(srcLastCol, dstLastCol, dstFbTo1);

  // 날짜 범위
  const wantStartYmd = startDate ? ymd_(startDate) : null;
  const wantEndYmd   = endDate   ? ymd_(endDate)   : null;

  // [수정] 기준 날짜를 endDate 또는 오늘로 설정 (연도 추론에 사용)
  const referenceDate = endDate || today_();

  // 1-1) 소스에서 날짜필터(또는 강제 전체)
  const windowRows = [];
  let srcScanned = 0;
  for (const row of srcRows){
    srcScanned++;
    let dateParsed = null;

    if (!forceAll){
      // 순서대로 J -> C 시도 (소스 기준)
      for (const idx0 of srcEval0s){
        // [수정] referenceDate를 전달하여 월 경계 처리 개선
        dateParsed = parseDateFlex_(row[idx0], referenceDate);
        if (dateParsed) break;
      }
      if (!dateParsed) continue;
      const ymd = ymd_(dateParsed);
      if (ymd < wantStartYmd || ymd > wantEndYmd) continue;
    }
    // 패딩하여 붙일 준비
    const padded = new Array(totalCols).fill('');
    for (let i=0; i<Math.min(row.length, totalCols); i++) padded[i] = row[i];
    windowRows.push(padded);
  }
  if (!windowRows.length) return {append:0, update:0, srcWindow:0};

  // 2) 대상의 최근 14일 범위 맵(또는 전체, forceAll) 구성
  const dstLastRow = dst.getLastRow();
  const keyToRow = new Map();
  const curFb = new Map();
  if (dstLastRow >= CFG_QC_PULL.DATA_START_ROW){
    const dstDataRange = dst.getRange(CFG_QC_PULL.DATA_START_ROW, 1, dstLastRow - CFG_QC_PULL.DATA_START_ROW + 1, Math.max(dstLastCol, dstFbTo1));
    const dstVals = dstDataRange.getDisplayValues();
    let rowNo = CFG_QC_PULL.DATA_START_ROW;
    for (const r of dstVals){
      let ok = true;
      if (!forceAll){
        // 대상도 J -> C 폴백으로 날짜 판단
        let dd = null;
        for (const idx0 of dstEval0s){
          // [수정] referenceDate를 전달하여 월 경계 처리 개선
          dd = parseDateFlex_(r[idx0], referenceDate);
          if (dd) break;
        }
        if (!dd) ok = false;
        else {
          const sy = ymd_(dd);
          if (sy < wantStartYmd || sy > wantEndYmd) ok = false;
        }
      }
      if (ok){
        const key = String(r[dstKey0]||'').trim();
        if (key){
          keyToRow.set(key, rowNo);
          curFb.set(key, r.slice(dstFbFrom1-1, dstFbTo1)); // 대상의 현재 FB 구간
        }
      }
      rowNo++;
    }
  }

  // 3) upsert: 신규 append / 기존 FB 갱신
  const appendBuf = [];
  const updates = []; // {rowNo, vals}

  for (const r of windowRows){
    const key = String(r[srcKey0]||'').trim();
    if (!key) continue;

    if (!keyToRow.has(key)){
      // 신규: 소스 행을 대상 컬럼 폭에 맞춰 append
      const out = r.slice(0, Math.max(dstLastCol, dstFbTo1));
      appendBuf.push(out);
    } else {
      // 기존: 소스의 FB 구간 값을 대상 FB 구간 폭에 맞춰 비교/갱신
      const prev = curFb.get(key) || new Array(fbCountDst).fill('');
      // 소스 FB 구간
      const srcNext = r.slice(srcFbFrom1-1, srcFbTo1);
      // 대상 FB 폭에 맞춰 길이 보정
      const next = normalizeArrayLen_(srcNext, fbCountDst, '');
      let changed = false;
      for (let i=0;i<fbCountDst;i++){
        if (String(prev[i]||'') !== String(next[i]||'')){ changed = true; break; }
      }
      if (changed){
        updates.push({ rowNo: keyToRow.get(key), vals: next });
      }
    }
  }

  // 4) 실제 쓰기
  // 갱신 먼저
  for (const u of updates){
    dst.getRange(u.rowNo, dstFbFrom1, 1, fbCountDst).setValues([u.vals]);
  }
  // 신규 추가 (마지막 행 뒤에)
  if (appendBuf.length){
    dst.getRange(dst.getLastRow()+1, 1, appendBuf.length, Math.max(dstLastCol, dstFbTo1)).setValues(appendBuf);
  }

  return {append: appendBuf.length, update: updates.length, srcWindow: windowRows.length};
}

/* ===== 도우미 ===== */
function today_(){
  return new Date(Utilities.formatDate(new Date(), CFG_QC_PULL.TIMEZONE, "yyyy-MM-dd'T'HH:mm:ss"));
}
function addDays_(d,n){ const x=new Date(d||today_()); x.setDate(x.getDate()+n); return x; }
function ymd_(d){ return Utilities.formatDate(d, CFG_QC_PULL.TIMEZONE, 'yyyy-MM-dd'); }
function colLetterToIndex0_(L){
  let n=0,s=String(L||'').toUpperCase().trim();
  for(let i=0;i<s.length;i++) n=n*26+(s.charCodeAt(i)-64);
  return n-1;
}
function colLetterToIndex1_(L){ return colLetterToIndex0_(L)+1; }
function normalizeArrayLen_(arr, len, fillVal=''){
  const a = (arr||[]).slice(0);
  if (a.length < len){ while(a.length<len) a.push(fillVal); }
  else if (a.length > len){ a.length = len; }
  return a;
}

/**
 * 날짜 파싱: "10/10", "10월 10일", "2025-10-10 오전 9:12", 시리얼 등 허용
 * [수정] referenceDate를 기준으로 연도를 추론하여 월 경계 문제 해결
 *
 * @param {any} v - 파싱할 날짜 값
 * @param {Date|number} refOrYear - 기준 날짜(Date) 또는 연도(number)
 * @returns {Date|null} 파싱된 날짜 또는 null
 */
function parseDateFlex_(v, refOrYear){
  if (v==null || v==='') return null;
  if (Object.prototype.toString.call(v)==='[object Date]') return isNaN(v.getTime())?null:v;
  if (typeof v === 'number'){
    const base = new Date('1899-12-30T00:00:00Z');
    const d = new Date(base.getTime()+v*86400000);
    return isNaN(d.getTime())?null:d;
  }

  // [수정] refOrYear가 Date이면 기준 날짜로, number이면 기본 연도로 사용
  let referenceDate = null;
  let defaultYear = new Date().getFullYear();

  if (refOrYear instanceof Date) {
    referenceDate = refOrYear;
    defaultYear = refOrYear.getFullYear();
  } else if (typeof refOrYear === 'number') {
    defaultYear = refOrYear;
  }

  let s = String(v).trim();

  // "11/27", "12/3" 같은 월/일 형식 처리 (연도 없음)
  if (/^\d{1,2}[\/\-\.]\d{1,2}$/.test(s)){
    const parts = s.split(/[\/\-\.]/);
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);

    // [수정] 기준 날짜가 있으면 월 경계를 고려하여 연도 추론
    let year = defaultYear;
    if (referenceDate) {
      const refMonth = referenceDate.getMonth() + 1; // 0-indexed -> 1-indexed

      // 기준 날짜가 1~2월이고 데이터가 11~12월이면 -> 전년도
      // 예: 기준=2024-12-04, 데이터=11/27 -> 2024-11-27 (같은 해)
      // 예: 기준=2025-01-05, 데이터=12/28 -> 2024-12-28 (전년도)
      if (refMonth <= 2 && month >= 11) {
        year = defaultYear - 1;
      }
      // 기준 날짜가 11~12월이고 데이터가 1~2월이면 -> 다음 해
      // 예: 기준=2024-12-28, 데이터=1/3 -> 2025-01-03 (다음 해)
      else if (refMonth >= 11 && month <= 2) {
        year = defaultYear + 1;
      }
    }

    s = `${year}-${month}-${day}`;
  }

  // "11월 27일" 같은 한글 형식 처리
  const m = s.match(/^\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일/);
  if (m){
    const month = parseInt(m[1], 10);
    const day = parseInt(m[2], 10);

    // [수정] 위와 동일한 월 경계 로직 적용
    let year = defaultYear;
    if (referenceDate) {
      const refMonth = referenceDate.getMonth() + 1;
      if (refMonth <= 2 && month >= 11) {
        year = defaultYear - 1;
      } else if (refMonth >= 11 && month <= 2) {
        year = defaultYear + 1;
      }
    }

    s = `${year}-${month}-${day}`;
  }

  s = s.replace(/\./g,'-').replace(/\s*(오전|오후)\s*/g,' ').replace(/\s+/g,' ');
  const d1 = new Date(s);
  if (!isNaN(d1.getTime())) return d1;
  const d2 = new Date(v);
  return isNaN(d2.getTime())?null:d2;
}
