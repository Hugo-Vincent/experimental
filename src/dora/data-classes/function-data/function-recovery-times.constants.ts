import { EFunctions } from '../../common/functions.enum';

export const FUNCTION_RECOVERY_TIMES: Record<EFunctions, number> = {
  /**
   * CRITICAL
   */
  [EFunctions.FUNCTION_2_CLIENT_DATA_STORAGE_MANAGEMENT]: 4,
  [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS]: 8,
  [EFunctions.FUNCTION_6_DASHBOARD]: 8,
  [EFunctions.FUNCTION_7_CLIENT_TX_MONITORING]: 24,
  [EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS]: null,

  /**
   * NON-CRITICAL
   */
  [EFunctions.FUNCTION_1_CLIENT_ONBOARDING]: 24,
  [EFunctions.FUNCTION_4_TRADING]: 8,
  [EFunctions.FUNCTION_5_PORT_MANAGEMENT]: 8,
  [EFunctions.FUNCTION_8_RISK_MANAGEMENTS]: 24,
  [EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT]: 168,
  [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION]: 24,
  [EFunctions.FUNCTION_12_EMAILING]: 24,
  [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT]: 24,
  [EFunctions.FUNCTION_14_INVOICING]: 24,
} as const;
