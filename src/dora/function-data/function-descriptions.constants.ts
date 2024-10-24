import { EFunctions } from '../common/functions.enum';

export const FUNCTION_DESCRIPTIONS: Record<EFunctions, string> = {
  [EFunctions.FUNCTION_1_CLIENT_ONBOARDING]: 'Client Onboarding (inc. KYC)',
  [EFunctions.FUNCTION_2_CLIENT_DATA_STORAGE_MANAGEMENT]: 'Client (personal) data storage, management',
  [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS]: 'Transferring assets to/from client accounts or wallets (incl. backup)',
  [EFunctions.FUNCTION_4_TRADING]: 'Trading',
  [EFunctions.FUNCTION_5_PORT_MANAGEMENT]: 'Portfolio Management',
  [EFunctions.FUNCTION_6_DASHBOARD]: 'Blockrise dashboard (Client, backoffice, App)',
  [EFunctions.FUNCTION_7_CLIENT_TX_MONITORING]: 'Client (transaction) monitoring',
  [EFunctions.FUNCTION_8_RISK_MANAGEMENTS]: 'Risk management: Monitoring, analysis and reporting',
  [EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT]: 'HR and Talent management',
  [EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS]: 'Record Keeping + Documentation',
  [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION]: 'Marketing + ext. Communication',
  [EFunctions.FUNCTION_12_EMAILING]: 'E-mailing incl. SMS',
  [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT]: 'IT system management (Hardware)',
  [EFunctions.FUNCTION_14_INVOICING]: 'Invoicing / payment acceptance',
};
