export const CONTRACT_TERMINATION_REASONS = {
  1: "(1) Termination not for cause. The contractual arrangement has expired/ended and has not been renewed by any of the party",
  2: "(2) Termination for cause. The contractual arrangement has been terminated, being the ICT third-party service provider in a breach of applicable law, regulations or contractual provisions",
  3: "(3) Termination for cause. The contractual arrangement has been terminated, due to impediments of the ICT third-party service provider capable of altering the supported function are identified",
  4: "(4) Termination for cause. The contractual arrangement has been terminated due to weaknesses of the ICT third-party provider regarding the management and security of sensitive data or information of any of the counterparty",
  5: "(5) Termination following a request by any Authority. The contractual arrangement has been terminated following a request by a Competent Authority",
  6: "(6) Other. The contractual arrangement has been terminated by any of the party for any reason different from the above"
} as const;
export type TTerminationReasonKey = keyof typeof CONTRACT_TERMINATION_REASONS;
export type TTerminationReason = typeof CONTRACT_TERMINATION_REASONS[TTerminationReasonKey];
