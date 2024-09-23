const _CONTRACTUAL_ARRANGEMENT_TYPES = {
  1: "(1) Standalone arrangement",
  2: "(2) Overarching arrangement",
  3: "(3) Subsequent or associated arrangement",
} as const;
export type TContractualArrangement = typeof _CONTRACTUAL_ARRANGEMENT_TYPES[keyof typeof _CONTRACTUAL_ARRANGEMENT_TYPES];
export const CONTRACTUAL_ARRANGEMENT_TYPES: Record<number, TContractualArrangement> = _CONTRACTUAL_ARRANGEMENT_TYPES;
