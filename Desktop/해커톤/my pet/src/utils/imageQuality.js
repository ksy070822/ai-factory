// 이미지 품질 검증 유틸리티
// Canvas API를 활용한 클라이언트 사이드 이미지 분석

/**
 * 이미지 품질 검증 결과
 * @typedef {Object} ImageQualityResult
 * @property {boolean} isValid - 분석에 적합한 이미지인지
 * @property {number} qualityScore - 품질 점수 (0-100)
 * @property {Object} metrics - 세부 측정값
 * @property {string[]} issues - 발견된 문제점
 * @property {string} recommendation - 권장사항
 */

/**
 * Base64 이미지를 Image 객체로 로드
 */
const loadImage = (base64) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = base64;
  });
};

/**
 * 이미지 해상도 검증
 * @param {HTMLImageElement} img
 * @returns {Object} 해상도 검증 결과
 */
const checkResolution = (img) => {
  const width = img.naturalWidth;
  const height = img.naturalHeight;
  const minWidth = 320;
  const minHeight = 240;
  const optimalWidth = 640;
  const optimalHeight = 480;

  const isValid = width >= minWidth && height >= minHeight;
  const isOptimal = width >= optimalWidth && height >= optimalHeight;

  let score = 100;
  if (!isValid) {
    score = 30;
  } else if (!isOptimal) {
    score = 60 + ((width / optimalWidth + height / optimalHeight) / 2) * 20;
  }

  return {
    width,
    height,
    isValid,
    isOptimal,
    score: Math.min(100, Math.round(score)),
    message: !isValid
      ? `해상도가 너무 낮습니다 (${width}×${height}). 최소 ${minWidth}×${minHeight} 이상이어야 합니다.`
      : !isOptimal
      ? `해상도가 권장 수준보다 낮습니다 (${width}×${height}). ${optimalWidth}×${optimalHeight} 이상을 권장합니다.`
      : `적절한 해상도입니다 (${width}×${height}).`
  };
};

/**
 * 이미지 밝기 분석
 * @param {HTMLCanvasElement} canvas
 * @param {CanvasRenderingContext2D} ctx
 * @returns {Object} 밝기 분석 결과
 */
const checkBrightness = (canvas, ctx) => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  let totalBrightness = 0;
  const pixelCount = data.length / 4;

  for (let i = 0; i < data.length; i += 4) {
    // 가중 평균 밝기 (인간 시각 기준)
    const brightness = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    totalBrightness += brightness;
  }

  const avgBrightness = totalBrightness / pixelCount;
  const normalizedBrightness = avgBrightness / 255;

  // 최적 밝기: 0.3 ~ 0.7
  const isTooDark = normalizedBrightness < 0.2;
  const isTooBright = normalizedBrightness > 0.85;
  const isOptimal = normalizedBrightness >= 0.3 && normalizedBrightness <= 0.7;

  let score = 100;
  if (isTooDark || isTooBright) {
    score = 40;
  } else if (!isOptimal) {
    score = 70;
  }

  return {
    value: normalizedBrightness,
    isTooDark,
    isTooBright,
    isOptimal,
    score,
    message: isTooDark
      ? '이미지가 너무 어둡습니다. 밝은 곳에서 다시 촬영해주세요.'
      : isTooBright
      ? '이미지가 너무 밝습니다. 직사광선을 피해 촬영해주세요.'
      : '적절한 밝기입니다.'
  };
};

/**
 * 이미지 흐림(블러) 감지 - Laplacian Variance 방식
 * @param {HTMLCanvasElement} canvas
 * @param {CanvasRenderingContext2D} ctx
 * @returns {Object} 흐림 감지 결과
 */
const checkBlur = (canvas, ctx) => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const width = canvas.width;
  const height = canvas.height;

  // 그레이스케일 변환
  const gray = new Float32Array(width * height);
  for (let i = 0; i < data.length; i += 4) {
    const idx = i / 4;
    gray[idx] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
  }

  // Laplacian 커널 적용 (3x3)
  // [ 0, -1,  0]
  // [-1,  4, -1]
  // [ 0, -1,  0]
  let laplacianSum = 0;
  let laplacianSqSum = 0;
  let count = 0;

  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      const laplacian =
        4 * gray[idx] -
        gray[idx - 1] -
        gray[idx + 1] -
        gray[idx - width] -
        gray[idx + width];

      laplacianSum += laplacian;
      laplacianSqSum += laplacian * laplacian;
      count++;
    }
  }

  const mean = laplacianSum / count;
  const variance = laplacianSqSum / count - mean * mean;

  // 분산이 높을수록 선명한 이미지
  // 임계값: 100 미만이면 흐림, 500 이상이면 선명
  const blurThreshold = 100;
  const sharpThreshold = 500;

  const isBlurry = variance < blurThreshold;
  const isSharp = variance >= sharpThreshold;

  let score = 100;
  if (isBlurry) {
    score = Math.max(20, Math.round((variance / blurThreshold) * 50));
  } else if (!isSharp) {
    score = 60 + Math.round(((variance - blurThreshold) / (sharpThreshold - blurThreshold)) * 40);
  }

  return {
    variance: Math.round(variance),
    isBlurry,
    isSharp,
    score: Math.min(100, score),
    message: isBlurry
      ? '이미지가 흐릿합니다. 카메라를 고정하고 다시 촬영해주세요.'
      : '적절한 선명도입니다.'
  };
};

/**
 * 이미지 품질 종합 검증
 * @param {string} base64Image - Base64 인코딩된 이미지
 * @param {Object} options - 검증 옵션
 * @returns {Promise<ImageQualityResult>}
 */
export const validateImageQuality = async (base64Image, options = {}) => {
  const {
    checkBlurEnabled = true,
    maxSize = 10 * 1024 * 1024, // 10MB
    analysisSize = 400 // 분석용 리사이즈 크기
  } = options;

  const issues = [];
  const metrics = {};

  try {
    // 1. 파일 크기 체크
    const base64Length = base64Image.length;
    const estimatedSize = (base64Length * 3) / 4; // Base64 → 바이트 추정
    metrics.fileSize = {
      bytes: Math.round(estimatedSize),
      mb: (estimatedSize / (1024 * 1024)).toFixed(2),
      isValid: estimatedSize <= maxSize
    };

    if (!metrics.fileSize.isValid) {
      issues.push(`파일 크기가 너무 큽니다 (${metrics.fileSize.mb}MB). 최대 ${maxSize / (1024 * 1024)}MB까지 가능합니다.`);
    }

    // 2. 이미지 로드
    const img = await loadImage(base64Image);

    // 3. 해상도 검증
    metrics.resolution = checkResolution(img);
    if (!metrics.resolution.isValid) {
      issues.push(metrics.resolution.message);
    }

    // 4. Canvas에 그리기 (분석용 리사이즈)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const scale = Math.min(analysisSize / img.naturalWidth, analysisSize / img.naturalHeight, 1);
    canvas.width = Math.round(img.naturalWidth * scale);
    canvas.height = Math.round(img.naturalHeight * scale);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 5. 밝기 분석
    metrics.brightness = checkBrightness(canvas, ctx);
    if (metrics.brightness.isTooDark || metrics.brightness.isTooBright) {
      issues.push(metrics.brightness.message);
    }

    // 6. 흐림 감지 (선택적)
    if (checkBlurEnabled) {
      metrics.sharpness = checkBlur(canvas, ctx);
      if (metrics.sharpness.isBlurry) {
        issues.push(metrics.sharpness.message);
      }
    }

    // 7. 종합 점수 계산
    const weights = {
      resolution: 0.3,
      brightness: 0.3,
      sharpness: 0.4
    };

    let totalScore = metrics.resolution.score * weights.resolution +
                     metrics.brightness.score * weights.brightness;

    if (metrics.sharpness) {
      totalScore += metrics.sharpness.score * weights.sharpness;
    } else {
      totalScore = totalScore / (weights.resolution + weights.brightness) * 100;
    }

    const qualityScore = Math.round(totalScore);
    const isValid = qualityScore >= 50 && metrics.resolution.isValid;

    // 8. 권장사항 생성
    let recommendation = '';
    if (qualityScore >= 80) {
      recommendation = '이미지 품질이 우수합니다. 분석에 적합합니다.';
    } else if (qualityScore >= 60) {
      recommendation = '이미지 품질이 양호합니다. 분석이 가능하지만, 더 선명한 사진을 권장합니다.';
    } else if (qualityScore >= 50) {
      recommendation = '이미지 품질이 보통입니다. 가능하면 다시 촬영해주세요.';
    } else {
      recommendation = '이미지 품질이 낮습니다. 밝고 선명하게 다시 촬영해주세요.';
    }

    return {
      isValid,
      qualityScore,
      metrics,
      issues,
      recommendation
    };

  } catch (error) {
    console.error('이미지 품질 검증 오류:', error);
    return {
      isValid: false,
      qualityScore: 0,
      metrics: {},
      issues: ['이미지를 분석할 수 없습니다.'],
      recommendation: '올바른 이미지 파일인지 확인해주세요.'
    };
  }
};

/**
 * 빠른 품질 체크 (해상도만)
 */
export const quickQualityCheck = async (base64Image) => {
  try {
    const img = await loadImage(base64Image);
    const resolution = checkResolution(img);
    return {
      isValid: resolution.isValid,
      width: resolution.width,
      height: resolution.height,
      message: resolution.message
    };
  } catch (error) {
    return {
      isValid: false,
      width: 0,
      height: 0,
      message: '이미지를 로드할 수 없습니다.'
    };
  }
};

export default { validateImageQuality, quickQualityCheck };
