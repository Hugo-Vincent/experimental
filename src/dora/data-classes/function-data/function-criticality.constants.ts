import { EFunctions } from '../../common/functions.enum';

export const FUNCTION_CRITICALITY = {
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
