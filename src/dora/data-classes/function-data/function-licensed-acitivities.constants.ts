import { ENTITY_ACTIVITIES, TEntityActivity } from '../closed-options/entity-activities.constants';
import { EFunctions } from '../../common/functions.enum';
import { Nullable } from '../../../types/types';

export const FUNCTION_LICENSED_ACTIVITIES: Record<EFunctions, Nullable<TEntityActivity>> = {
  [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS]: ENTITY_ACTIVITIES[6],
  [EFunctions.FUNCTION_4_TRADING]: ENTITY_ACTIVITIES[6],
  [EFunctions.FUNCTION_1_CLIENT_ONBOARDING]: null,
  [EFunctions.FUNCTION_2_CLIENT_DATA_STORAGE_MANAGEMENT]: null,
  [EFunctions.FUNCTION_5_PORT_MANAGEMENT]: null,
  [EFunctions.FUNCTION_6_DASHBOARD]: null,
  [EFunctions.FUNCTION_7_CLIENT_TX_MONITORING]: null,
  [EFunctions.FUNCTION_8_RISK_MANAGEMENTS]: null,
  [EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT]: null,
  [EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS]: null,
  [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION]: null,
  [EFunctions.FUNCTION_12_EMAILING]: null,
  [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT]: null,
  [EFunctions.FUNCTION_14_INVOICING]: null,
};
