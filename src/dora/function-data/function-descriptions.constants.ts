import { EFunctions } from '../common/functions.enum';

export const FUNCTION_DESCRIPTIONS: Record<EFunctions, string> = {
  [EFunctions.FUNCTION_1]: 'Client Onboarding (inc. KYC)',
  [EFunctions.FUNCTION_2]: 'Client (personal) data storage, management',
  [EFunctions.FUNCTION_3]: 'Transferring assets to/from client accounts or wallets (incl. backup)',
  [EFunctions.FUNCTION_4]: 'Trading',
  [EFunctions.FUNCTION_5]: 'Portfolio Management',
  [EFunctions.FUNCTION_6]: 'Blockrise dashboard (Client, backoffice, App)',
  [EFunctions.FUNCTION_7]: 'Client (transaction) monitoring',
  [EFunctions.FUNCTION_8]: 'Risk management: Monitoring, analysis and reporting',
  [EFunctions.FUNCTION_9]: 'HR and Talent management',
  [EFunctions.FUNCTION_10]: 'Record Keeping + Documentation',
  [EFunctions.FUNCTION_11]: 'Marketing + ext. Communication',
  [EFunctions.FUNCTION_12]: 'E-mailing incl. SMS',
  [EFunctions.FUNCTION_13]: 'IT system management (Hardware)',
  [EFunctions.FUNCTION_14]: 'Invoicing / payment acceptance',
};
