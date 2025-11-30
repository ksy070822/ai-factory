/**
 * 동물 종류별 품종 옵션
 */

export const BREED_OPTIONS = {
  dog: [
    { id: 'poodle', name: '푸들', emoji: '🐩' },
    { id: 'golden_retriever', name: '골든 리트리버', emoji: '🐕' },
    { id: 'shiba', name: '시바이누', emoji: '🐕' },
    { id: 'husky', name: '허스키', emoji: '🐺' },
    { id: 'maltese', name: '말티즈', emoji: '🐶' },
    { id: 'chihuahua', name: '치와와', emoji: '🐕' },
    { id: 'beagle', name: '비글', emoji: '🐕' },
    { id: 'bulldog', name: '불독', emoji: '🐕' },
    { id: 'labrador', name: '래브라도 리트리버', emoji: '🐕' },
    { id: 'corgi', name: '코기', emoji: '🐕' },
    { id: 'jindo', name: '진돗개', emoji: '🐕' },
    { id: 'other_dog', name: '기타', emoji: '🐕' }
  ],
  cat: [
    { id: 'persian', name: '페르시안', emoji: '🐱' },
    { id: 'russian_blue', name: '러시안 블루', emoji: '🐱' },
    { id: 'scottish_fold', name: '스코티시 폴드', emoji: '🐱' },
    { id: 'korean_short', name: '코리안 숏헤어', emoji: '🐱' },
    { id: 'maine_coon', name: '메인쿤', emoji: '🐱' },
    { id: 'british_shorthair', name: '브리티시 숏헤어', emoji: '🐱' },
    { id: 'ragdoll', name: '랙돌', emoji: '🐱' },
    { id: 'siamese', name: '샴', emoji: '🐱' },
    { id: 'other_cat', name: '기타', emoji: '🐱' }
  ],
  rabbit: [
    { id: 'dutch_dwarf', name: '네덜란드 드워프', emoji: '🐰' },
    { id: 'mini_rex', name: '미니 렉스', emoji: '🐰' },
    { id: 'angora', name: '앙고라', emoji: '🐰' },
    { id: 'lionhead', name: '라이온헤드', emoji: '🐰' },
    { id: 'other_rabbit', name: '기타', emoji: '🐰' }
  ],
  hamster: [
    { id: 'golden_hamster', name: '골든 햄스터', emoji: '🐹' },
    { id: 'winter_white', name: '윈터 화이트', emoji: '🐹' },
    { id: 'roborovski', name: '로보로브스키', emoji: '🐹' },
    { id: 'other_hamster', name: '기타', emoji: '🐹' }
  ],
  bird: [
    { id: 'canary', name: '카나리아', emoji: '🐦' },
    { id: 'parrot', name: '앵무새', emoji: '🦜' },
    { id: 'budgerigar', name: '문조', emoji: '🐦' },
    { id: 'cockatiel', name: '코카틸', emoji: '🦜' },
    { id: 'other_bird', name: '기타', emoji: '🐦' }
  ],
  hedgehog: [
    { id: 'african_pygmy', name: '아프리카 피그미 고슴도치', emoji: '🦔' },
    { id: 'other_hedgehog', name: '기타', emoji: '🦔' }
  ],
  reptile: [
    { id: 'lizard', name: '도마뱀', emoji: '🦎' },
    { id: 'snake', name: '뱀', emoji: '🐍' },
    { id: 'turtle', name: '거북이', emoji: '🐢' },
    { id: 'other_reptile', name: '기타', emoji: '🦎' }
  ],
  other: [
    { id: 'other_pet', name: '기타', emoji: '🐾' }
  ]
};

/**
 * 동물 종류에 따른 품종 옵션 가져오기
 */
export const getBreedsForSpecies = (species) => {
  return BREED_OPTIONS[species] || BREED_OPTIONS.other;
};

