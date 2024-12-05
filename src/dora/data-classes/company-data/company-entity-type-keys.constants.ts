import { ECompanies } from '../../common/companies.enum';
import { ENTITY_TYPES, TEntity } from '../closed-options/entity-types.constants';

export const COMPANY_ENTITY_TYPES: Record<ECompanies, TEntity> = {
  [ECompanies.BLOCKRISE]: ENTITY_TYPES[6],
  [ECompanies.STICHTING_BLOCKRISE]: ENTITY_TYPES[23],

  [ECompanies.ALPHABET]: null,
  [ECompanies.BITVAVO]: null,
  [ECompanies.BITWARDEN]: null,
  [ECompanies.BLOCKRISE_GROUP]: null,
  [ECompanies.BLUEM]: null,
  [ECompanies.BUNQ]: null,
  [ECompanies.CHAINSTACK]: null,
  [ECompanies.COMPLYADVANTAGE]: null,
  [ECompanies.ELLIPTIC]: null,
  [ECompanies.EXPO]: null,
  [ECompanies.FLANTUA]: null,
  [ECompanies.GITHUB]: null,
  [ECompanies.GOOGLE_IRELAND]: null,
  [ECompanies.HEXNODE]: null,
  [ECompanies.KRAKEN]: null,
  [ECompanies.LINEAR]: null,
  [ECompanies.MICROSOFT]: null,
  [ECompanies.MICROSOFT_IRELAND]: null,
  [ECompanies.NOTION]: null,
  [ECompanies.PAY_DOT]: null,
  [ECompanies.POSTCODEDOTNL]: null,
  [ECompanies.SANITY]: null,
  [ECompanies.SECUROSYS]: null,
  [ECompanies.SENTRY]: null,
  [ECompanies.SLACK]: null,
  [ECompanies.SONARCLOUD]: null,
  [ECompanies.TWILIO]: null,
  [ECompanies.UBIQUITI]: null,
  [ECompanies.UNISCAPE]: null,
  [ECompanies.VERCEL]: null,
  [ECompanies.VERIFF]: null,
  [ECompanies.ZENDESK]: null,

  /**
   * Discarded
   */
  [ECompanies.BLOCKCHAINDOTCOM]: null,
  [ECompanies.COINGECKO]: null,
  [ECompanies.GLASSNODE]: null,
  [ECompanies.GRAFANA]: null,
  [ECompanies.ING]: null,
  [ECompanies.KWINZO]: null,
  [ECompanies.MEMPOOL]: null,
  [ECompanies.NEXTNOVATE]: null,
  [ECompanies.QUICKNODE]: null,
  [ECompanies.SHIFTBASE]: null,
} as const;
