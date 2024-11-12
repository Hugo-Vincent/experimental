import { EFunctions } from '../../common/functions.enum';
import { FunctionDescriptor } from '../../classes/function';

const _FUNCTION_CRITICALITY = {
  /**
   * CRITICAL
   */
  [EFunctions.FUNCTION_2_CLIENT_DATA_STORAGE_MANAGEMENT]: 'critical',
  [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS]: 'critical',
  [EFunctions.FUNCTION_6_DASHBOARD]: 'critical',
  [EFunctions.FUNCTION_7_CLIENT_TX_MONITORING]: 'critical',
  [EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS]: 'critical',

  /**
   * NON-CRITICAL
   */
  [EFunctions.FUNCTION_1_CLIENT_ONBOARDING]: 'non-critical',
  [EFunctions.FUNCTION_4_TRADING]: 'non-critical',
  [EFunctions.FUNCTION_5_PORT_MANAGEMENT]: 'non-critical',
  [EFunctions.FUNCTION_8_RISK_MANAGEMENTS]: 'non-critical',
  [EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT]: 'non-critical',
  [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION]: 'non-critical',
  [EFunctions.FUNCTION_12_EMAILING]: 'non-critical',
  [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT]: 'non-critical',
  [EFunctions.FUNCTION_14_INVOICING]: 'non-critical',
} as const;

const _CRITICAL_FUNCTIONS: Record<TCriticalFunction, void> = {
  [EFunctions.FUNCTION_2_CLIENT_DATA_STORAGE_MANAGEMENT]: undefined,
  [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS]: undefined,
  [EFunctions.FUNCTION_6_DASHBOARD]: undefined,
  [EFunctions.FUNCTION_7_CLIENT_TX_MONITORING]: undefined,
  [EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS]: undefined,
} as const;
const _NON_CRITICAL_FUNCTIONS: Record<TNonCriticalFunction, void> = {
  [EFunctions.FUNCTION_1_CLIENT_ONBOARDING]: undefined,
  [EFunctions.FUNCTION_4_TRADING]: undefined,
  [EFunctions.FUNCTION_5_PORT_MANAGEMENT]: undefined,
  [EFunctions.FUNCTION_8_RISK_MANAGEMENTS]: undefined,
  [EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT]: undefined,
  [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION]: undefined,
  [EFunctions.FUNCTION_12_EMAILING]: undefined,
  [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT]: undefined,
  [EFunctions.FUNCTION_14_INVOICING]: undefined
} as const;

/**
 * CRITICAL FUNCTIONS
 */
export type TCriticalFunction = keyof {
  [P in keyof typeof _FUNCTION_CRITICALITY as typeof _FUNCTION_CRITICALITY[P] extends 'critical' ? P : never]: true;
};
export const CRITICAL_FUNCTION_KEYS: TCriticalFunction[] = Object.keys(_CRITICAL_FUNCTIONS) as TCriticalFunction[];
export const CRITICAL_FUNCTION_INSTANCES = CRITICAL_FUNCTION_KEYS.reduce((acc: Record<TCriticalFunction, FunctionDescriptor>, functionId: TCriticalFunction) => {
  acc[functionId] = new FunctionDescriptor(functionId, 1);
  return acc;
}, {} as Record<TCriticalFunction, FunctionDescriptor>);
export const CRITICAL_FUNCTION_INSTANCES_ARRAY = Object.values(CRITICAL_FUNCTION_INSTANCES);

/**
 * NON-CRITICAL FUNCTIONS
 */
export type TNonCriticalFunction = keyof {
  [P in keyof typeof _FUNCTION_CRITICALITY as typeof _FUNCTION_CRITICALITY[P] extends 'non-critical' ? P : never]: true;
};
export const NON_CRITICAL_FUNCTION_KEYS: TNonCriticalFunction[] = Object.keys(_NON_CRITICAL_FUNCTIONS) as TNonCriticalFunction[];
export const NON_CRITICAL_FUNCTION_INSTANCES = NON_CRITICAL_FUNCTION_KEYS.reduce((acc: Record<TNonCriticalFunction, FunctionDescriptor>, functionId: TNonCriticalFunction) => {
  acc[functionId] = new FunctionDescriptor(functionId, 2);
  return acc;
}, {} as Record<TNonCriticalFunction, FunctionDescriptor>);
export const NON_CRITICAL_FUNCTION_INSTANCES_ARRAY = Object.values(NON_CRITICAL_FUNCTION_INSTANCES);

/**
 * ALL FUNCTIONS
 */
export const FUNCTION_INSTANCES: Record<EFunctions, FunctionDescriptor> = {
  ...CRITICAL_FUNCTION_INSTANCES,
  ...NON_CRITICAL_FUNCTION_INSTANCES,
};
export const FUNCTION_INSTANCES_ARRAY = Object.values(FUNCTION_INSTANCES).sort((x, y) => x.id.localeCompare(y.id, undefined, { numeric: true }));
