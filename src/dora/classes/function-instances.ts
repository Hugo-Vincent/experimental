import { EFunctions } from '../common/functions.enum';
import { FunctionDescriptor } from './function';

const CRITICALITY_FUNCTIONS = {
  /**
   * CRITICAL
   */
  [EFunctions.FUNCTION_2_CLIENT_DATA_STORAGE_MANAGEMENT]: 'critical',
  [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS]: 'critical',
  [EFunctions.FUNCTION_6_DASHBOARD]: 'critical',
  /**
   * NON-CRITICAL
   */
  [EFunctions.FUNCTION_1_CLIENT_ONBOARDING]: 'non-critical',
  [EFunctions.FUNCTION_4_TRADING]: 'non-critical',
  [EFunctions.FUNCTION_5_PORT_MANAGEMENT]: 'non-critical',
  [EFunctions.FUNCTION_7_CLIENT_TX_MONITORING]: 'non-critical',
  [EFunctions.FUNCTION_8_RISK_MANAGEMENTS]: 'non-critical',
  [EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT]: 'non-critical',
  [EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS]: 'non-critical',
  [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION]: 'non-critical',
  [EFunctions.FUNCTION_12_EMAILING]: 'non-critical',
  [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT]: 'non-critical',
  [EFunctions.FUNCTION_14_INVOICING]: 'non-critical',
} as const;
const _CRITICAL_FUNCTIONS: Record<TCriticalFunction, undefined> = {
  [EFunctions.FUNCTION_2_CLIENT_DATA_STORAGE_MANAGEMENT]: undefined,
  [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS]: undefined,
  [EFunctions.FUNCTION_6_DASHBOARD]: undefined,
} as const;
const _NON_CRITICAL_FUNCTIONS: Record<TNonCriticalFunction, boolean> = {
  [EFunctions.FUNCTION_1_CLIENT_ONBOARDING]: undefined,
  [EFunctions.FUNCTION_4_TRADING]: undefined,
  [EFunctions.FUNCTION_5_PORT_MANAGEMENT]: undefined,
  [EFunctions.FUNCTION_7_CLIENT_TX_MONITORING]: undefined,
  [EFunctions.FUNCTION_8_RISK_MANAGEMENTS]: undefined,
  [EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT]: undefined,
  [EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS]: undefined,
  [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION]: undefined,
  [EFunctions.FUNCTION_12_EMAILING]: undefined,
  [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT]: undefined,
  [EFunctions.FUNCTION_14_INVOICING]: undefined
} as const;
export type TCriticalFunction = keyof {
  [P in keyof typeof CRITICALITY_FUNCTIONS as typeof CRITICALITY_FUNCTIONS[P] extends 'critical' ? P : never]: true;
};
export type TNonCriticalFunction = keyof {
  [P in keyof typeof CRITICALITY_FUNCTIONS as typeof CRITICALITY_FUNCTIONS[P] extends 'non-critical' ? P : never]: true;
};
export const CRITICAL_FUNCTION_KEYS: TCriticalFunction[] = Object.keys(_CRITICAL_FUNCTIONS) as TCriticalFunction[];
export const NON_CRITICAL_FUNCTION_KEYS: TNonCriticalFunction[] = Object.keys(_NON_CRITICAL_FUNCTIONS) as TNonCriticalFunction[];

/**
 * FUNCTIONS
 */
export const FUNCTION_INSTANCES = Object.values(EFunctions)
  .reduce((map: Record<EFunctions, FunctionDescriptor>, functionId: EFunctions) => {
    map[functionId] = new FunctionDescriptor(functionId, 6, 3, 'Fill in reasons for Criticality.', '9999-12-31', 4, 4, 3);
    return map;
  }, {} as Record<EFunctions, FunctionDescriptor>);
export const CRITICAL_FUNCTION_INSTANCES = CRITICAL_FUNCTION_KEYS.map((x) => FUNCTION_INSTANCES[x]);
export const CRITICAL_FUNCTION_INSTANCE_ARRAYS;
export const NON_CRITICAL_FUNCTION_INSTANCES = NON_CRITICAL_FUNCTION_KEYS.map((x) => FUNCTION_INSTANCES[x]);
