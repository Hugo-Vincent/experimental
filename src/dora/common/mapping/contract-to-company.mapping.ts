import { EContracts } from '../contracts.enum';
import { ECompanies } from '../companies.enum';

export const CONTRACT_TO_COMPANY_MAPPING: Record<EContracts, ECompanies> = {
  /**
   * CRITICAL
   */
  [EContracts.BUNQ_BLOCKRISE_BV]: ECompanies.BUNQ,
  [EContracts.BUNQ_BLOCKRISE_STICHTING]: ECompanies.BUNQ,
  [EContracts.COMPLYADVANTAGE]: ECompanies.COMPLYADVANTAGE,
  [EContracts.ELLIPTIC]: ECompanies.ELLIPTIC,
  [EContracts.GOOGLE_IRELAND]: ECompanies.GOOGLE_IRELAND,
  [EContracts.MICROSOFT]: ECompanies.MICROSOFT,
  [EContracts.SECUROSYS]: ECompanies.SECUROSYS,
  [EContracts.VERCEL]: ECompanies.VERCEL,

  /**
   * NOT CRITICAL
   */
  [EContracts.AFAS]: ECompanies.AFAS,
  [EContracts.BITVAVO]: ECompanies.BITVAVO,
  [EContracts.CHAINSTACK]: ECompanies.CHAINSTACK,
  [EContracts.HEXNODE]: ECompanies.HEXNODE,
  [EContracts.KRAKEN]: ECompanies.KRAKEN,
  [EContracts.KWINZO]: ECompanies.KWINZO,
  [EContracts.NOTION]: ECompanies.NOTION,
  [EContracts.SANITY]: ECompanies.SANITY,
  [EContracts.SENDGRID]: ECompanies.SENDGRID,
  [EContracts.TWILIO]: ECompanies.TWILIO,
  [EContracts.UBIQUITI]: ECompanies.UBIQUITI,
  [EContracts.ZENDESK]: ECompanies.ZENDESK,
  [EContracts.GLASSNODE]: ECompanies.GLASSNODE,
  [EContracts.GRAFANA]: ECompanies.GRAFANA,
  [EContracts.BITWARDEN]: ECompanies.BITWARDEN,
  [EContracts.BLOCKCHAINDOTCOM]: ECompanies.BLOCKCHAINDOTCOM,
  [EContracts.COINGECKO]: ECompanies.COINGECKO,
  [EContracts.COLT]: ECompanies.COLT,
  [EContracts.GITHUB]: ECompanies.GITHUB,
  [EContracts.GOOGLE]: ECompanies.GOOGLE,
  [EContracts.IDIN]: ECompanies.IDIN,
  [EContracts.ING]: ECompanies.ING,
  [EContracts.LINEAR]: ECompanies.LINEAR,
  [EContracts.MEMPOOL]: ECompanies.MEMPOOL,
  [EContracts.NEXTNOVATE]: ECompanies.NEXTNOVATE,
  [EContracts.PAY_DOT]: ECompanies.PAY_DOT,
  [EContracts.POSTCODEAPI]: ECompanies.POSTCODEAPI,
  [EContracts.QUICKNODE]: ECompanies.QUICKNODE,
  [EContracts.SCRIVE]: ECompanies.SCRIVE,
  [EContracts.SENTRY]: ECompanies.SENTRY,
  [EContracts.SHIFTBASE]: ECompanies.SHIFTBASE,
  [EContracts.SLACK]: ECompanies.SLACK,
  [EContracts.SONARCLOUD]: ECompanies.SONARCLOUD,
  [EContracts.SUREPAY]: ECompanies.SUREPAY,
  [EContracts.UNISCAPE]: ECompanies.UNISCAPE,
  [EContracts.VERIFF]: ECompanies.VERIFF,
};
