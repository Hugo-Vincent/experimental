export const SUBSTITUTABILITY_REASONS = {
  1: '1. The lack of real alternatives, even partial, due to the limited number of ICT third-party service providers active on a specific market, or the market share of the relevant ICT third-party service provider, or the technical complexity or sophistication involved, including in relation to any proprietary technology, or the specific features of the ICT third-party service provider’s organisation or activity.',
  2: '2. Difficulties in relation to partially or fully migrating the relevant data and workloads from the relevant ICT third- party service provider to another ICT third-party service provider or to reintegrate them in the financial entity’s operations, due either to significant financial costs, time or other resources that the migration process may entail, or to increased ICT risk or other operational risks to which the financial entity.',
  3: '3. Both abovementioned reasons',
} as const;
export type TSubstitutabilityReasonKey = keyof typeof SUBSTITUTABILITY_REASONS;
export type TSubstitutabilityReason = typeof SUBSTITUTABILITY_REASONS[TSubstitutabilityReasonKey];
