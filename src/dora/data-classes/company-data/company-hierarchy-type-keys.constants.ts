import { ECompanies } from '../../common/companies.enum';
import { THierarchyKey } from '../closed-options/hierarchy-types.constants';

export const COMPANY_HIERARCHY_TYPE_KEYS: Record<ECompanies, THierarchyKey> = {
  [ECompanies.ALPHABET]: 1,
  [ECompanies.BITVAVO]: 1,
  [ECompanies.BITWARDEN]: 1,
  [ECompanies.BLOCKCHAINDOTCOM]: 1,

  /**
   * Blockrise
   */
  [ECompanies.BLOCKRISE]: 3,
  [ECompanies.BLOCKRISE_GROUP]: 1,
  [ECompanies.STICHTING_BLOCKRISE]: 3,

  [ECompanies.BLUEM]: 1,
  [ECompanies.BUNQ]: 1,
  [ECompanies.CHAINSTACK]: 1,
  [ECompanies.COINGECKO]: 1,
  [ECompanies.COMPLYADVANTAGE]: 1,
  [ECompanies.ELLIPTIC]: 1,
  [ECompanies.EXPO]: 1,
  [ECompanies.FLANTUA]: 1,
  [ECompanies.GITHUB]: 1,
  [ECompanies.GLASSNODE]: 1,
  [ECompanies.GOOGLE_IRELAND]: 3,
  [ECompanies.GRAFANA]: 1,
  [ECompanies.HEXNODE]: 1,
  [ECompanies.ING]: 1,
  [ECompanies.KRAKEN]: 1,
  [ECompanies.KWINZO]: 1,
  [ECompanies.LINEAR]: 1,
  [ECompanies.MEMPOOL]: 1,
  [ECompanies.MICROSOFT]: 1,
  [ECompanies.MICROSOFT_IRELAND]: 1,
  [ECompanies.NEXTNOVATE]: 1,
  [ECompanies.NOTION]: 1,
  [ECompanies.POSTCODEDOTNL]: 1,
  [ECompanies.PAY_DOT]: 1,
  [ECompanies.QUICKNODE]: 1,
  [ECompanies.SANITY]: 1,
  [ECompanies.SECUROSYS]: 1,
  [ECompanies.SENTRY]: 1,
  [ECompanies.SHIFTBASE]: 1,
  [ECompanies.SLACK]: 1,
  [ECompanies.SONARCLOUD]: 1,
  [ECompanies.TWILIO]: 1,
  [ECompanies.UBIQUITI]: 1,
  [ECompanies.UNISCAPE]: 1,
  [ECompanies.VERCEL]: 1,
  [ECompanies.VERIFF]: 1,
  [ECompanies.ZENDESK]: 1,
} as const;
