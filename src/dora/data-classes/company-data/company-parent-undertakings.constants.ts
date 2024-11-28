import { ECompanies } from '../../common/companies.enum';

export const COMPANY_PARENT_UNDERTAKINGS: Record<ECompanies, ECompanies> = {
  [ECompanies.AFAS]: undefined,
  [ECompanies.ALPHABET]: null,
  [ECompanies.BITVAVO]: undefined,
  [ECompanies.BITWARDEN]: undefined,
  [ECompanies.BLOCKCHAINDOTCOM]: undefined,

  [ECompanies.BLOCKRISE]: ECompanies.BLOCKRISE_GROUP,
  [ECompanies.STICHTING_BLOCKRISE]: ECompanies.BLOCKRISE_GROUP,
  [ECompanies.BLOCKRISE_GROUP]: undefined,

  [ECompanies.BUNQ]: undefined,
  [ECompanies.CHAINSTACK]: undefined,
  [ECompanies.COINGECKO]: undefined,
  [ECompanies.COLT]: undefined,
  [ECompanies.COMPLYADVANTAGE]: undefined,
  [ECompanies.ELLIPTIC]: undefined,
  [ECompanies.EXPO]: undefined,
  [ECompanies.GITHUB]: undefined,
  [ECompanies.GLASSNODE]: undefined,
  [ECompanies.GOOGLE]: ECompanies.ALPHABET,
  [ECompanies.GOOGLE_IRELAND]: ECompanies.ALPHABET,
  [ECompanies.GRAFANA]: undefined,
  [ECompanies.HEXNODE]: undefined,
  [ECompanies.IDIN]: undefined,
  [ECompanies.ING]: undefined,
  [ECompanies.KRAKEN]: undefined,
  [ECompanies.KWINZO]: undefined,
  [ECompanies.LINEAR]: undefined,
  [ECompanies.MEMPOOL]: undefined,
  [ECompanies.MICROSOFT]: null,
  [ECompanies.MICROSOFT_IRELAND]: null,
  [ECompanies.NEXTNOVATE]: undefined,
  [ECompanies.NOTION]: undefined,
  [ECompanies.PAY_DOT]: undefined,
  [ECompanies.POSTCODEDOTNL]: undefined,
  [ECompanies.QUICKNODE]: undefined,
  [ECompanies.SANITY]: undefined,
  [ECompanies.SCRIVE]: undefined,
  [ECompanies.SECUROSYS]: undefined,
  [ECompanies.SENDGRID]: undefined,
  [ECompanies.SENTRY]: undefined,
  [ECompanies.SHIFTBASE]: undefined,
  [ECompanies.SLACK]: undefined,
  [ECompanies.SONARCLOUD]: undefined,
  [ECompanies.SUREPAY]: undefined,
  [ECompanies.TWILIO]: undefined,
  [ECompanies.UBIQUITI]: undefined,
  [ECompanies.UNISCAPE]: undefined,
  [ECompanies.VERCEL]: undefined,
  [ECompanies.VERIFF]: undefined,
  [ECompanies.ZENDESK]: undefined,
};
