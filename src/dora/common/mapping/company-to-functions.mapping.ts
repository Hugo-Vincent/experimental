import { EFunctions } from '../functions.enum';
import { CRITICAL_TPSP_KEYS, TCriticalTPSP, TTPSP } from '../../data-classes/instance-data/company-instances';
import { EContracts } from '../contracts.enum';
import { TContract } from '../../data-classes/instance-data/contract-instances';

export const CONTRACT_TO_FUNCTIONS_MAPPING: Record<TContract, EFunctions[]> = {
  /**
   * CRITICAL
   */

  // Functions 8 and 13 don't belong to any of the 7 critical parties.
  [EContracts.BUNQ_BLOCKRISE_BV]: [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS],
  [EContracts.BUNQ_BLOCKRISE_STICHTING]: [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS],
  [EContracts.COMPLYADVANTAGE]: [
    EFunctions.FUNCTION_1_CLIENT_ONBOARDING,
    EFunctions.FUNCTION_7_CLIENT_TX_MONITORING,
    EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS,
  ],
  [EContracts.ELLIPTIC]: [EFunctions.FUNCTION_7_CLIENT_TX_MONITORING, EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS],
  [EContracts.GOOGLE_IRELAND]: [
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
  [EContracts.MICROSOFT_IRELAND]: [
    EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT,
    EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS,
    EFunctions.FUNCTION_12_EMAILING,
  ],
  [EContracts.SECUROSYS]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING, EFunctions.FUNCTION_4_TRADING],
  [EContracts.VERCEL]: [EFunctions.FUNCTION_6_DASHBOARD, EFunctions.FUNCTION_11_MARKETING_COMMUNICATION],

  /**
   * NON-CRITICAL
   */
  [EContracts.AFAS]: [],
  [EContracts.BITVAVO]: [EFunctions.FUNCTION_4_TRADING],
  [EContracts.BITWARDEN]: [],
  [EContracts.CHAINSTACK]: [EFunctions.FUNCTION_3_TRANSFERRING_ASSETS],
  [EContracts.COLT]: [],
  [EContracts.EXPO]: [],
  [EContracts.GITHUB]: [],
  [EContracts.HEXNODE]: [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT],
  [EContracts.IDIN]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [EContracts.KRAKEN]: [EFunctions.FUNCTION_4_TRADING],
  [EContracts.LINEAR]: [],
  [EContracts.NOTION]: [
    EFunctions.FUNCTION_9_HR_TALENT_MANAGEMENT,
    EFunctions.FUNCTION_10_RECORD_KEEPING_DOCS,
    EFunctions.FUNCTION_11_MARKETING_COMMUNICATION,
  ],
  [EContracts.PAY_DOT]: [EFunctions.FUNCTION_14_INVOICING],
  [EContracts.POSTCODEDOTNL]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [EContracts.SANITY]: [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION],
  [EContracts.SCRIVE]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [EContracts.SENDGRID]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING, EFunctions.FUNCTION_11_MARKETING_COMMUNICATION, EFunctions.FUNCTION_12_EMAILING, EFunctions.FUNCTION_14_INVOICING],
  [EContracts.SENTRY]: [],
  [EContracts.SLACK]: [],
  [EContracts.SONARCLOUD]: [],
  [EContracts.SUREPAY]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [EContracts.TWILIO]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING, EFunctions.FUNCTION_11_MARKETING_COMMUNICATION, EFunctions.FUNCTION_12_EMAILING, EFunctions.FUNCTION_14_INVOICING],
  [EContracts.UNISCAPE]: [],
  [EContracts.UBIQUITI]: [EFunctions.FUNCTION_13_IT_SYSTEM_MNGMNT],
  [EContracts.VERIFF]: [EFunctions.FUNCTION_1_CLIENT_ONBOARDING],
  [EContracts.ZENDESK]: [EFunctions.FUNCTION_11_MARKETING_COMMUNICATION],
};

export const CRITICAL_TPSP_TO_FUNCTIONS_MAPPING: Record<TCriticalTPSP, EFunctions[]> = CRITICAL_TPSP_KEYS.reduce((acc, x) => {
  acc[x] = CONTRACT_TO_FUNCTIONS_MAPPING[x];
  return acc;
}, {} as Record<TCriticalTPSP, EFunctions[]>);
