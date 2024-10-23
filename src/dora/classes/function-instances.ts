import { EFunctions } from '../common/functions.enum';

const CRITICALITY_FUNCTIONS = {
  /**
   * CRITICAL
   */
  [EFunctions.FUNCTION_2]: 'critical',
  [EFunctions.FUNCTION_3]: 'critical',
  [EFunctions.FUNCTION_6]: 'critical',
  /**
   * NON-CRITICAL
   */
  [EFunctions.FUNCTION_1]: 'non-critical',
  [EFunctions.FUNCTION_4]: 'non-critical',
  [EFunctions.FUNCTION_5]: 'non-critical',
  [EFunctions.FUNCTION_7]: 'non-critical',
  [EFunctions.FUNCTION_8]: 'non-critical',
  [EFunctions.FUNCTION_9]: 'non-critical',
  [EFunctions.FUNCTION_10]: 'non-critical',
  [EFunctions.FUNCTION_11]: 'non-critical',
  [EFunctions.FUNCTION_12]: 'non-critical',
  [EFunctions.FUNCTION_13]: 'non-critical',
  [EFunctions.FUNCTION_14]: 'non-critical',
} as const;
const _CRITICAL_FUNCTIONS: Record<TCriticalFunction, undefined> = {
  [EFunctions.FUNCTION_2]: undefined,
  [EFunctions.FUNCTION_3]: undefined,
  [EFunctions.FUNCTION_6]: undefined,
} as const;
const _NON_CRITICAL_FUNCTIONS: Record<TNonCriticalFunction, boolean> = {
  [EFunctions.FUNCTION_1]: undefined,
  [EFunctions.FUNCTION_4]: undefined,
  [EFunctions.FUNCTION_5]: undefined,
  [EFunctions.FUNCTION_7]: undefined,
  [EFunctions.FUNCTION_8]: undefined,
  [EFunctions.FUNCTION_9]: undefined,
  [EFunctions.FUNCTION_10]: undefined,
  [EFunctions.FUNCTION_11]: undefined,
  [EFunctions.FUNCTION_12]: undefined,
  [EFunctions.FUNCTION_13]: undefined,
  [EFunctions.FUNCTION_14]: undefined
} as const;
export type TCriticalFunction = keyof {
  [P in keyof typeof CRITICALITY_FUNCTIONS as typeof CRITICALITY_FUNCTIONS[P] extends 'critical' ? P : never]: true;
};
export type TNonCriticalFunction = keyof {
  [P in keyof typeof CRITICALITY_FUNCTIONS as typeof CRITICALITY_FUNCTIONS[P] extends 'non-critical' ? P : never]: true;
}
export const CRITICAL_FUNCTION_KEYS: TCriticalFunction[] = Object.keys(_CRITICAL_FUNCTIONS) as TCriticalFunction[];
export const NON_CRITICAL_FUNCTION_KEYS: TNonCriticalFunction[] = Object.keys(_NON_CRITICAL_FUNCTIONS) as TNonCriticalFunction[];
