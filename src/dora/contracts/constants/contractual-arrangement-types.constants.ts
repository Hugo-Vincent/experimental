export const CONTRACTUAL_ARRANGEMENT_TYPES = {
  1: "(1) Standalone arrangement",
  2: "(2) Overarching arrangement",
  3: "(3) Subsequent or associated arrangement",
} as const;
export type TContractualArrangementKey = keyof typeof CONTRACTUAL_ARRANGEMENT_TYPES;
export type TContractualArrangement = typeof CONTRACTUAL_ARRANGEMENT_TYPES[TContractualArrangementKey];
