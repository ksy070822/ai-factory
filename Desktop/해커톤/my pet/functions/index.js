/**
 * Firebase Cloud Functions
 * OpenAI API 프록시 엔드포인트
 */

const functions = require('firebase-functions');

/**
 * OpenAI API 프록시
 * CORS 문제 해결을 위한 백엔드 프록시
 */
exports.openaiProxy = functions.https.onRequest(async (req, res) => {
  // CORS 헤더 설정
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight 요청 처리
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  // POST 요청만 허용
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { apiKey, model, messages, temperature, max_tokens } = req.body;

    // API 키 검증
    if (!apiKey) {
      res.status(400).json({ error: 'API key is required' });
      return;
    }

    // OpenAI API 호출
    const fetch = (await import('node-fetch')).default;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model || 'gpt-4o',
        messages,
        temperature: temperature || 0.3,
        max_tokens: max_tokens || 1024
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      res.status(response.status).json({
        error: `OpenAI API error: ${response.status}`,
        details: errorData
      });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('OpenAI Proxy Error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});
