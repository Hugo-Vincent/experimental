const _CONTRACTUAL_ARRANGEMENT_TYPES = {
  1: "(1) Standalone arrangement",
  2: "(2) Overarching arrangement",
  3: "(3) Subsequent or associated arrangement",
} as const;
export type TContractualArrangementKey = keyof typeof _CONTRACTUAL_ARRANGEMENT_TYPES;
export type TContractualArrangement = typeof _CONTRACTUAL_ARRANGEMENT_TYPES[TContractualArrangementKey];
export const CONTRACTUAL_ARRANGEMENT_TYPES: Record<TContractualArrangementKey, TContractualArrangement> = _CONTRACTUAL_ARRANGEMENT_TYPES;
