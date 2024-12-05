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
  [EContracts.MICROSOFT_IRELAND]: ECompanies.MICROSOFT_IRELAND,
  [EContracts.SECUROSYS]: ECompanies.SECUROSYS,
  [EContracts.VERCEL]: ECompanies.VERCEL,

  /**
   * NOT CRITICAL
   */
  [EContracts.AFAS_VIA_FLANTUA]: ECompanies.FLANTUA,
  [EContracts.BITVAVO]: ECompanies.BITVAVO,
  [EContracts.CHAINSTACK]: ECompanies.CHAINSTACK,
  [EContracts.EXPO]: ECompanies.EXPO,
  [EContracts.HEXNODE]: ECompanies.HEXNODE,
  [EContracts.KRAKEN]: ECompanies.KRAKEN,
  [EContracts.NOTION]: ECompanies.NOTION,
  [EContracts.SANITY]: ECompanies.SANITY,
  [EContracts.SENDGRID_VIA_TWILIO]: ECompanies.TWILIO,
  [EContracts.TWILIO]: ECompanies.TWILIO,
  [EContracts.UBIQUITI]: ECompanies.UBIQUITI,
  [EContracts.ZENDESK]: ECompanies.ZENDESK,
  [EContracts.BITWARDEN]: ECompanies.BITWARDEN,
  [EContracts.UNISCAPE_COLT]: ECompanies.UNISCAPE,
  [EContracts.GITHUB]: ECompanies.GITHUB,
  [EContracts.IDIN_VIA_BLUEM]: ECompanies.BLUEM,
  [EContracts.LINEAR]: ECompanies.LINEAR,
  [EContracts.PAY_DOT]: ECompanies.PAY_DOT,
  [EContracts.POSTCODEDOTNL]: ECompanies.POSTCODEDOTNL,
  [EContracts.SCRIVE_VIA_BLUEM]: ECompanies.BLUEM,
  [EContracts.SENTRY]: ECompanies.SENTRY,
  [EContracts.SLACK]: ECompanies.SLACK,
  [EContracts.SONARCLOUD]: ECompanies.SONARCLOUD,
  [EContracts.SUREPAY_VIA_BLUEM]: ECompanies.BLUEM,
  [EContracts.UNISCAPE]: ECompanies.UNISCAPE,
  [EContracts.VERIFF]: ECompanies.VERIFF,
};
