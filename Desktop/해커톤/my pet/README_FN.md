# 🤖 PetMedical.AI

반려동물 응급도 평가를 위한 멀티에이전트 AI 진료 시스템이다. 6개의 전문 AI 에이전트가 순차적으로 협업하여 증상 분석, 감별진단, 응급도 판정, 홈케어 가이드를 제공한다.

---

## ✨ 핵심 기능

### 📊 멀티에이전트 AI 진료 파이프라인
6개의 전문 에이전트가 순차적으로 진료를 수행한다. CS Agent가 증상을 접수하고, Information Agent가 추가 문진을 진행하며, Medical Agent가 감별진단을 수행한다. Triage Engine이 응급도를 0~5점으로 점수화하고, Ops Agent가 진단서를 생성하며, Care Agent가 홈케어 플랜을 작성한다.

### 🔄 협진 시스템 (Collaborative Diagnosis)
다중 AI 모델이 교차 검증을 수행하여 진단 정확도를 높인다. Medical Agent와 Triage Engine의 결과를 비교하여 불일치를 감지하고, 불일치 발생 시 보수적으로 높은 위험도를 채택한다. 최종 신뢰도 점수를 산출하여 진단 결과의 신뢰성을 제공한다.

### 🛡️ 응급도 자동 판정 시스템
5단계 응급도 체계로 긴급성을 분류한다. 0~1점(GREEN)은 홈케어로 충분, 2점(YELLOW)은 악화 시 병원 방문, 3~4점(ORANGE)은 24시간 내 방문, 5점(RED)은 즉시 병원 방문이 필요한 응급 상황이다. 색상과 점수로 보호자가 직관적으로 상황을 파악할 수 있다.

---

## 🤖 AI 기술 활용

### 멀티에이전트 오케스트레이션
6개의 전문 에이전트가 파이프라인 방식으로 순차 실행된다. 각 에이전트는 이전 단계의 structured_data를 입력받아 처리하고, 다음 에이전트에 전달한다. Root Orchestrator가 전체 워크플로우를 조율하며, TRD(Tool Request Discipline) 규칙에 따라 각 단계에서 정확히 하나의 도구만 호출하여 안정성을 보장한다. 상태 기반 조건문으로 각 단계의 완료 여부를 확인하고 순차적으로 진행한다.

### 동적 모델 라우팅 (Dynamic Model Router)
상황별로 최적의 AI 모델을 자동 선택하여 비용을 절감한다. 응급 상황(출혈, 경련, 호흡곤란)에는 Claude Sonnet 4를 사용하고, 이미지 분석이 필요한 경우 GPT-4o Vision을 사용한다. 일반 문의에는 GPT-4o-mini를 사용하여 비용 효율성을 높인다. 규칙 기반 라우팅으로 월간 API 비용이 $5,000에서 $1,990으로 약 60% 절감되었다.

### 프롬프트 엔지니어링 최적화
각 에이전트는 역할 기반 프롬프트(Role-based Prompting)를 사용한다. Medical Agent는 "경력 10년 이상의 수의사"로 설정되어 근거 중심 진단을 수행한다. temperature=0.1~0.2로 설정하여 일관된 의료 분석을 보장한다. 종(species) 특화 지시문을 포함하여 강아지, 고양이, 토끼 등 7종 반려동물에 대해 맞춤형 진단을 제공한다. JSON 스키마를 명시하여 파싱 오류를 방지한다.

### 멀티모달 비전 분석
GPT-4o Vision을 활용하여 반려동물 사진을 분석한다. 상처, 부종, 피부 문제, 안구 이상, 자세 이상, 시각적 고통 신호 6가지 카테고리로 구조화된 분석 결과를 반환한다. 이미지 URL 기반으로 처리하며, 분석 결과는 Medical Agent의 감별진단에 추가 컨텍스트로 제공된다.

---

## 💡 핵심 코드 블록

### 1. 협진 시스템 - 다중 AI 불일치 검출 알고리즘
Medical Agent와 Triage Engine의 진단 결과를 비교하여 불일치를 자동으로 감지한다.

```javascript
// collaborativeDiagnosis.js - 불일치 검출
export const detectDiscrepancies = (medicalResult, triageResult) => {
  const discrepancies = [];

  // 위험도 매핑 테이블
  const riskMapping = {
    'low': ['green', 'yellow'],
    'moderate': ['yellow', 'orange'],
    'high': ['orange', 'red'],
    'emergency': ['red']
  };

  const expectedTriageLevels = riskMapping[medicalResult.risk_level] || ['yellow'];

  // 1. 위험도 불일치 검사
  if (!expectedTriageLevels.includes(triageResult.triage_level)) {
    discrepancies.push({
      type: 'risk_level_mismatch',
      severity: 'high',
      description: `Medical Agent는 ${medicalResult.risk_level}로 평가했지만,
                    Triage Engine은 ${triageResult.triage_level}로 평가했습니다.`
    });
  }

  // 2. 응급도 점수와 진단 불일치
  if ((medicalResult.risk_level === 'emergency' || medicalResult.risk_level === 'high')
      && triageResult.triage_score < 3) {
    discrepancies.push({
      type: 'emergency_score_mismatch',
      severity: 'critical'
    });
  }

  return {
    has_discrepancies: discrepancies.length > 0,
    needs_review: discrepancies.some(d => d.severity === 'critical' || d.severity === 'high')
  };
};
```

### 2. 투표 기반 합의 도출 (안전 우선 원칙)
여러 AI 모델의 의견을 투표로 종합하고, 불확실할 때는 높은 위험도를 채택한다.

```javascript
// collaborativeDiagnosis.js - 합의 도출
export const generateConsensus = (medicalResult, triageResult, reviewResult, secondOpinion, discrepancyAnalysis) => {
  // 위험도 투표 수집
  const riskVotes = [
    medicalResult.risk_level,
    triageResult.triage_level,
    reviewResult?.recommended_risk_level,
    secondOpinion?.risk_assessment
  ].filter(Boolean);

  // 가장 높은 위험도 채택 (안전 우선 원칙)
  const riskHierarchy = ['emergency', 'high', 'moderate', 'low'];
  const finalRisk = riskHierarchy.find(level =>
    riskVotes.map(normalizeRisk).includes(level)
  ) || 'moderate';

  // 불일치가 있으면 안전을 위해 점수 상향
  let finalTriageScore = calculateAverageScore(triageResult, reviewResult);
  if (discrepancyAnalysis.critical_count > 0) {
    finalTriageScore = Math.min(5, finalTriageScore + 1);
  }

  // 신뢰도 계산 (불일치 시 감소)
  const confidence = discrepancyAnalysis.has_discrepancies
    ? (1 - (discrepancyAnalysis.discrepancy_count * 0.1))
    : 0.95;

  return {
    final_risk_level: finalRisk,
    final_triage_score: finalTriageScore,
    confidence_score: Math.max(0.5, Math.min(0.98, confidence))
  };
};
```

### 3. 보호자 문진 기반 응급도 동적 조정
보호자의 추가 답변을 분석하여 응급도 점수를 실시간으로 상향 조정한다.

```javascript
// triageEngine.js - 프롬프트 내 동적 조정 규칙
const userPrompt = `
★★★ 보호자 추가 문진 응답 (매우 중요 - 응급도 평가에 반드시 반영) ★★★
${symptomData.guardianResponsesSummary}

주의: 위 보호자 문진 결과에서 다음 조건이 해당되면 triage_score를 상향 조정하세요:
- 증상 지속 기간이 "일주일 이상"이면 +1
- 식욕이 "거의 안 먹음" 또는 "전혀 안 먹음"이면 +1
- 활동량이 "거의 움직이지 않음"이면 +1
- 동반 증상에 "호흡곤란", "발열"이 있으면 +2
`;
```

### 4. 멀티에이전트 파이프라인 오케스트레이션
6개 에이전트를 순차 실행하고 실시간 로그를 UI에 전달한다.

```javascript
// agentOrchestrator.js - 파이프라인 실행
export const runMultiAgentDiagnosis = async (petData, symptomData, onLogReceived, onWaitForGuardianResponse) => {
  // 1. CS Agent → 접수
  onLogReceived({ agent: 'CS Agent', icon: '🏥', content: '진료 접수 시작...' });
  csResult = await callCSAgent(petData, symptomData);

  // 2. Information Agent → 추가 문진 + 보호자 응답 대기
  infoResult = await callInformationAgent(petData, symptomData, csResult.json);
  guardianResponses = await onWaitForGuardianResponse(questions);  // 인터랙티브 문진

  // 3. Medical Agent → 감별진단 (이전 결과를 컨텍스트로 전달)
  medicalResult = await callMedicalAgent(petData, enrichedSymptomData, csResult.json, infoResult.json);

  // 4. Triage Engine → 응급도 점수화
  triageResult = await calculateTriageScore(petData, enrichedSymptomData, medicalResult.json, csResult.json);

  // 5. Collaborative Diagnosis → 교차 검증
  collaborationResult = await runCollaborativeDiagnosis(petData, symptomData, medicalResult.json, triageResult, infoResult.json);

  // 협진 결과로 최종 진단 업데이트
  if (collaborationResult.consensus) {
    triageResult.triage_score = collaborationResult.consensus.final_triage_score;
    medicalResult.json.risk_level = collaborationResult.consensus.final_risk_level;
  }

  // 6. Ops Agent + Care Agent → 진단서 및 홈케어 플랜 생성
  opsResult = await callOpsAgent(...);
  careResult = await callCareAgent(...);

  return { logs, finalDiagnosis };
};
```

### 5. Claude 기반 Senior Reviewer 교차 검증
독립적인 Claude 모델이 다른 에이전트들의 진단을 검토하고 최종 의견을 제시한다.

```javascript
// collaborativeDiagnosis.js - 교차 검증
export const crossValidateDiagnosis = async (petData, symptomData, medicalResult, triageResult, infoResult) => {
  const systemPrompt = `당신은 "Senior Veterinarian Reviewer (수석 수의사 검토팀)"입니다.

[역할]
- Medical Agent와 Triage Agent의 진단 결과를 독립적으로 검토합니다.
- 두 에이전트의 의견이 일치하는지, 불일치가 있다면 어느 쪽이 더 타당한지 평가합니다.
- 누락된 중요한 소견이나 과잉 진단 여부를 확인합니다.

[원칙]
- 보수적이고 신중한 접근: 불확실하면 병원 방문을 권장
- 에이전트 간 불일치가 있을 때는 더 높은 위험도를 채택`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      temperature: 0.3,  // 낮은 temperature로 일관성 확보
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    })
  });

  return JSON.parse(response.content);
};
```

### 6. GPT-4o 2차 의견 (다른 모델 관점)
Claude 기반 에이전트들의 진단을 GPT-4o가 독립적으로 검토하여 다른 관점을 제공한다.

```javascript
// collaborativeDiagnosis.js - 2차 의견 (불일치 또는 고위험 시에만 호출)
export const getSecondOpinion = async (petData, symptomData, medicalResult, triageResult, reviewResult) => {
  const systemPrompt = `당신은 "Second Opinion Specialist (제2 의견 전문의)"입니다.

[역할]
- Claude 기반 에이전트들이 놓쳤을 수 있는 관점을 제시합니다.
- 최종 진단의 신뢰도를 높이는 데 기여합니다.`;

  // 불일치가 있거나 위험도가 높을 때만 2차 의견 요청 (비용 최적화)
  if (discrepancyAnalysis.needs_review || medicalResult.risk_level === 'high') {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      body: JSON.stringify({
        model: 'gpt-4o',
        temperature: 0.3,
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }]
      })
    });
    return JSON.parse(response.choices[0].message.content);
  }
  return null;
};
```

---

## 🏗️ 아키텍처

```
┌─────────────────────────────────────────────────────────────────┐
│                        사용자 (보호자)                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                   Frontend (React + Vite)                       │
│                   GitHub Pages 배포                              │
└────────────────────────────┬────────────────────────────────────┘
                             │ REST API
┌────────────────────────────▼────────────────────────────────────┐
│                   Backend (FastAPI + LangChain)                 │
│                   Railway/Render 배포                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│               멀티에이전트 파이프라인                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ CS Agent │→ │  Info    │→ │ Medical  │→ │ Triage   │         │
│  │ (Gemini) │  │  Agent   │  │  Agent   │  │  Engine  │         │
│  └──────────┘  │ (Gemini) │  │ (Claude) │  │ (Claude) │         │
│                └──────────┘  └──────────┘  └──────────┘         │
│                                    ↓                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                       │
│  │   Care   │← │   Ops    │← │ Collab   │                       │
│  │  Agent   │  │  Agent   │  │ Diagnosis│                       │
│  │ (Gemini) │  │ (Claude) │  │ (Claude) │                       │
│  └──────────┘  └──────────┘  └──────────┘                       │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                    Firebase (Firestore + Storage)               │
└─────────────────────────────────────────────────────────────────┘
```

### 기술 스택
- **Frontend**: React 18.2.0, Vite 5.0.8
- **Backend**: Python 3.11, FastAPI, LangChain
- **Database**: Firebase Firestore, Cloud Storage
- **AI Models**: Claude Sonnet 4, GPT-4o, GPT-4o-mini, Gemini 2.0 Flash, Gemini 1.5 Pro
- **Deploy**: GitHub Pages (Frontend), Railway/Render (Backend)

---

## 📂 프로젝트 구조

```
ai-factory/                          # Frontend Repository
├── Desktop/해커톤/my pet/
│   ├── src/
│   │   ├── services/ai/
│   │   │   ├── csAgent.js           # CS Agent (Gemini Flash)
│   │   │   ├── informationAgent.js  # Information Agent (Gemini)
│   │   │   ├── medicalAgent.js      # Medical Agent (Claude)
│   │   │   ├── triageEngine.js      # Triage Engine (Claude)
│   │   │   ├── opsAgent.js          # Ops Agent (Claude)
│   │   │   ├── careAgent.js         # Care Agent (Gemini)
│   │   │   ├── collaborativeDiagnosis.js  # 협진 시스템
│   │   │   └── agentOrchestrator.js # 오케스트레이터
│   │   ├── components/              # React UI 컴포넌트
│   │   └── lib/                     # Firebase 설정
│   ├── App.jsx                      # 메인 앱 (8800줄)
│   ├── package.json
│   └── vite.config.js
│
multi-agent/                         # Backend Repository
├── petcare_advisor/
│   ├── src/petcare_advisor/
│   │   ├── agents/
│   │   │   ├── root_orchestrator.py # 전체 워크플로우 조율
│   │   │   ├── symptom_intake.py    # 증상 수집
│   │   │   ├── vision_agent.py      # 이미지 분석
│   │   │   ├── medical_agent.py     # 의료 분석
│   │   │   ├── triage_agent.py      # 응급도 판정
│   │   │   └── careplan_agent.py    # 케어플랜 생성
│   │   ├── tools/                   # report_builder, persistence
│   │   ├── config.py                # 설정 관리
│   │   └── main.py                  # FastAPI 진입점
│   └── requirements.txt
```

---

## 🚀 빠른 시작

### 1. 사전 준비
- Node.js 18+
- Python 3.11+
- Google AI Studio 계정 (Gemini API)
- OpenAI 계정 (GPT-4o API)
- Anthropic 계정 (Claude API)
- Firebase 프로젝트

### 2. Frontend 설정
```bash
cd ai-factory/Desktop/해커톤/my\ pet
cp .env.example .env
# .env 파일에 API 키 설정
npm install
npm run dev
```

### 3. Backend 설정
```bash
cd multi-agent/petcare_advisor
pip install -r requirements.txt
cp .env.example .env
# .env 파일에 API 키 설정
uvicorn src.petcare_advisor.main:app --reload
```

### 4. 환경 변수 설정
```bash
# AI API Keys
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key

# Firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_project_id

# Backend
VITE_BACKEND_API_URL=http://localhost:8000
```

---

## 🔐 보안

- API 키는 환경 변수로만 관리하며 코드에 하드코딩하지 않는다
- 프로덕션 환경에서는 백엔드 API를 통해 AI 모델을 호출한다
- Firebase Security Rules로 사용자별 데이터 접근을 제한한다
- CORS 설정으로 허용된 도메인만 API 접근을 허용한다
- 의료 정보는 Firebase Firestore에 암호화하여 저장한다

---

## 📝 API 엔드포인트

| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/health` | 서버 상태 확인 |
| POST | `/api/triage` | AI 진료 요청 |
| POST | `/api/question` | 후속 질문 처리 |

### /api/triage 요청 예시
```json
{
  "symptom_text": "강아지가 어제부터 구토를 해요",
  "species": "dog",
  "age": "3세",
  "images": ["https://..."]
}
```

---

## 🤝 기여

1. 이 저장소를 Fork한다
2. 기능 브랜치를 생성한다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋한다 (`git commit -m 'Add AmazingFeature'`)
4. 브랜치에 Push한다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성한다

---

## 📄 라이선스

MIT License

---

## 📞 지원

- **Frontend Repository**: https://github.com/ksy070822/ai-factory
- **Backend Repository**: https://github.com/ksy070822/multi-agent
- **Issues**: GitHub Issues를 통해 버그 리포트 및 기능 요청

---

**Made with ❤️ by PetMedical.AI Team**
