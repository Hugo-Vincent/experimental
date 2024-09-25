export const DISCONTINUATION_IMPACT_TYPES = {
  1: '(1) Low or Medium',
  2: '(2) High',
  3: '(3) Assessment not performed',
} as const;
export type TDiscontinuationImpactKey = keyof typeof DISCONTINUATION_IMPACT_TYPES;
export type TDiscontinuationImpact = typeof DISCONTINUATION_IMPACT_TYPES[TDiscontinuationImpactKey];
