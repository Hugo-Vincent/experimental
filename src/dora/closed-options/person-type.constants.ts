export const TPSP_PERSON_TYPE = {
  1: 'Legal person',
  2: 'Individual acting in a business capacity',
} as const;
export type TPersonTPSPKey = keyof typeof TPSP_PERSON_TYPE;
export type TPersonTPSP = typeof TPSP_PERSON_TYPE[TPersonTPSPKey];
