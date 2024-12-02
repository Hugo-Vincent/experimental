import { ECompanies } from '../companies.enum';
import { EFunctions } from '../functions.enum';
import { CRITICAL_TPSP_KEYS, TCriticalTPSP, TTPSP } from '../../data-classes/instance-data/company-instances';

export const TPSP_TO_FUNCTIONS_MAPPING: Record<TTPSP, EFunctions[]> = {
  /**
   * CRITICAL
   */

  // Functions 8 and 13 don't belong to any of the 7 critical parties.
  [ECompanies.BUNQ]: [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS],
  [ECompanies.COMPLYADVANTAGE]: [
    EFunctions.FUNCTION_1_CLIENT_ONBOARDING,
    EFunctions.FUNCTION_7_CLIENT_TX_MONITORING,
    EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS,
  ],
  [ECompanies.ELLIPTIC]: [EFunctions.FUNCTION_7_CLIENT_TX_MONITORING, EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS],
  [ECompanies.GOOGLE_IRELAND]: [
    // All except 8 9 and 13
    EFunctions.FUNCTION_1_CLIENT_ONBOARDING,
    EFunctions.FUNCTION_2_CLIENT_DATA_STORAGE_MANAGEMENT,
    EFunctions.FUNCTION_3_TRANSFERRING_ASSETS,
    EFunctions.FUNCTION_6_DASHBOARD,
    EFunctions.FUNCTION_4_TRADING,
    EFunctions.FUNCTION_5_PORT_MANAGEMENT,
    EFunctions.FUNCTION_7_CLIENT_TX_MONITORING,
    EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS,
    EFunctions.FUNCTION_11_MARKETING_COMMUNICATION,
    EFunctions.FUNCTION_12_EMAILING,
    EFunctions.FUNCTION_14_INVOICING,
  ],
  [ECompanies.MICROSOFT_IRELAND]: [
    EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT,
    EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS,
    EFunctions.FUNCTION_12_EMAILING,
  ],
  [ECompanies.SECUROSYS]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING, EFunctions.FUNCTION_4_TRADING],
  [ECompanies.VERCEL]: [EFunctions.FUNCTION_6_DASHBOARD, EFunctions.FUNCTION_11_MARKETING_COMMUNICATION],

  /**
   * NON-CRITICAL
   */
  [ECompanies.AFAS]: [],
  [ECompanies.BITVAVO]: [EFunctions.FUNCTION_4_TRADING],
  [ECompanies.BITWARDEN]: [],
  [ECompanies.CHAINSTACK]: [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS],
  [ECompanies.COLT]: [],
  [ECompanies.EXPO]: [],
  [ECompanies.GITHUB]: [],
  [ECompanies.HEXNODE]: [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT],
  [ECompanies.IDIN]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [ECompanies.KRAKEN]: [EFunctions.FUNCTION_4_TRADING],
  [ECompanies.LINEAR]: [],
  [ECompanies.NOTION]: [
    EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT,
    EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS,
    EFunctions.FUNCTION_11_MARKETING_COMMUNICATION,
  ],
  [ECompanies.PAY_DOT]: [EFunctions.FUNCTION_14_INVOICING],
  [ECompanies.POSTCODEDOTNL]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [ECompanies.SANITY]: [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION],
  [ECompanies.SCRIVE]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [ECompanies.SENDGRID]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING, EFunctions.FUNCTION_11_MARKETING_COMMUNICATION, EFunctions.FUNCTION_12_EMAILING, EFunctions.FUNCTION_14_INVOICING],
  [ECompanies.SENTRY]: [],
  [ECompanies.SLACK]: [],
  [ECompanies.SONARCLOUD]: [],
  [ECompanies.SUREPAY]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [ECompanies.TWILIO]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING, EFunctions.FUNCTION_11_MARKETING_COMMUNICATION, EFunctions.FUNCTION_12_EMAILING, EFunctions.FUNCTION_14_INVOICING],
  [ECompanies.UNISCAPE]: [],
  [ECompanies.UBIQUITI]: [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT],
  [ECompanies.VERIFF]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [ECompanies.ZENDESK]: [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION],
};

export const CRITICAL_TPSP_TO_FUNCTIONS_MAPPING: Record<TCriticalTPSP, EFunctions[]> = CRITICAL_TPSP_KEYS.reduce((acc, x) => {
  acc[x] = TPSP_TO_FUNCTIONS_MAPPING[x];
  return acc;
}, {} as Record<TCriticalTPSP, EFunctions[]>);
