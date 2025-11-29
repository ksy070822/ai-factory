// Gemini를 이용한 케어 패턴 분석
import { getRecentCareLogs } from "./careLogs";

/**
 * Gemini Flash를 사용하여 케어 패턴 분석 및 healthFlags 생성
 */
export async function analyzeCarePatternWithGemini(pet, days = 7) {
  const logs = getRecentCareLogs(pet.id, days);

  // 로그가 없으면 null
  if (!logs.length) {
    return null;
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  // API 키가 없으면 더미 값 반환
  if (!apiKey) {
    console.warn('Gemini API 키가 없습니다. 더미 값을 반환합니다.');
    return {
      earIssue: false,
      digestionIssue: logs.some((l) => l.poopCount >= 3),
      skinIssue: false,
      energyLevel: 0.7,
      fever: false,
    };
  }

  const systemPrompt = `당신은 반려동물 건강 패턴 분석 AI입니다.
아래 ${days}일치 케어 로그를 보고, 건강상태 플래그를 JSON으로만 출력하세요.

health_flags 형식:
{
  "earIssue": boolean,        // 귀 문제 의심되면 true
  "digestionIssue": boolean,  // 구토/설사/배변 이상 시 true
  "skinIssue": boolean,       // 가려움/피부 트러블 의심시 true
  "energyLevel": number,      // 0~1 사이 값 (0=매우 무기력, 1=매우 활발)
  "fever": boolean            // 발열 의심시 true
}

꼭 JSON만 출력하세요. 설명 문장은 쓰지 마세요.`;

  const userContent = `반려동물 정보:
- 이름: ${pet.petName || pet.name}
- 종: ${pet.species === 'dog' ? '개' : pet.species === 'cat' ? '고양이' : pet.species}
- 품종: ${pet.breed || "미입력"}

최근 ${logs.length}일 케어 로그:
${logs.map(l => `- ${l.date}: 밥 ${l.mealCount || 0}회, 물 ${l.waterCount || 0}회, 산책 ${l.walkCount || 0}회, 배변 ${l.poopCount || 0}회, 체중 ${l.weight || "?"}kg, 메모: ${l.note || "없음"}`).join("\n")}

위 로그를 분석하여 health_flags JSON을 출력하세요.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: systemPrompt },
              { text: userContent }
            ]
          }]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API 오류: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;
    
    // JSON 추출 (마크다운 코드 블록 제거)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return parsed;
    }
    
    throw new Error('JSON 파싱 실패');
  } catch (error) {
    console.error('패턴 분석 오류:', error);
    
    // Fallback: 간단한 규칙 기반 분석
    const avgMeal = logs.reduce((sum, l) => sum + (l.mealCount || 0), 0) / logs.length;
    const avgWalk = logs.reduce((sum, l) => sum + (l.walkCount || 0), 0) / logs.length;
    const avgPoop = logs.reduce((sum, l) => sum + (l.poopCount || 0), 0) / logs.length;
    
    return {
      earIssue: false,
      digestionIssue: avgPoop > 3 || logs.some(l => (l.note || '').toLowerCase().includes('설사') || (l.note || '').toLowerCase().includes('구토')),
      skinIssue: logs.some(l => (l.note || '').toLowerCase().includes('가려움') || (l.note || '').toLowerCase().includes('피부')),
      energyLevel: Math.min(1, Math.max(0, (avgWalk / 3) * 0.5 + (avgMeal / 2) * 0.5)),
      fever: logs.some(l => (l.note || '').toLowerCase().includes('열') || (l.note || '').toLowerCase().includes('발열')),
    };
  }
}

