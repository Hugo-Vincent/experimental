export const SUBSTITUTABILITY = {
  1: '1. Not substitutable',
  2: '2. Highly complex substitutability',
  3: '3. Medium complexity in terms of substitutability',
  4: '4. Easily substitutable',
} as const;
export type TSubstitutabilityKey = keyof typeof SUBSTITUTABILITY;
export type TSubstitutability = typeof SUBSTITUTABILITY[TSubstitutabilityKey];
