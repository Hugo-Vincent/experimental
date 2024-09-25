export const CRITICALITY_ASSESSMENT_TYPES = {
  1: '(1) Yes',
  2: '(2) No',
  3: '(3) Assessment not performed',
} as const;
export type TCriticalityAssessmentKey = keyof typeof CRITICALITY_ASSESSMENT_TYPES;
export type TCriticalityAssessment = typeof CRITICALITY_ASSESSMENT_TYPES[TCriticalityAssessmentKey];
