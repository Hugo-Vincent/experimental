import { ECompanies } from '../../common/companies.enum';
import { ENTITY_TYPES, TEntity } from '../closed-options/entity-types.constants';

export const COMPANY_ENTITY_TYPES: Record<ECompanies, TEntity> = {
  [ECompanies.ALPHABET]: ENTITY_TYPES[1],
  [ECompanies.AFAS]: ENTITY_TYPES[1],
  [ECompanies.BITVAVO]: ENTITY_TYPES[1],
  [ECompanies.BITWARDEN]: ENTITY_TYPES[1],
  [ECompanies.BLOCKRISE]: ENTITY_TYPES[6],
  [ECompanies.BLOCKRISE_GROUP]: ENTITY_TYPES[1],
  [ECompanies.STICHTING_BLOCKRISE]: ENTITY_TYPES[23],

  [ECompanies.BUNQ]: ENTITY_TYPES[1],
  [ECompanies.CHAINSTACK]: ENTITY_TYPES[1],
  [ECompanies.COLT]: ENTITY_TYPES[1],

  [ECompanies.COMPLYADVANTAGE]: ENTITY_TYPES[1],
  [ECompanies.ELLIPTIC]: ENTITY_TYPES[1],
  [ECompanies.EXPO]: ENTITY_TYPES[1],
  [ECompanies.GITHUB]: ENTITY_TYPES[1],

  [ECompanies.GOOGLE]: ENTITY_TYPES[1],
  [ECompanies.GOOGLE_IRELAND]: ENTITY_TYPES[1],
  [ECompanies.GRAFANA]: ENTITY_TYPES[1],
  [ECompanies.HEXNODE]: ENTITY_TYPES[1],
  [ECompanies.IDIN]: ENTITY_TYPES[1],

  [ECompanies.KRAKEN]: ENTITY_TYPES[1],

  [ECompanies.LINEAR]: ENTITY_TYPES[1],

  [ECompanies.MICROSOFT]: ENTITY_TYPES[1],
  [ECompanies.MICROSOFT_IRELAND]: ENTITY_TYPES[1],
  [ECompanies.NEXTNOVATE]: ENTITY_TYPES[1],
  [ECompanies.NOTION]: ENTITY_TYPES[1],

  [ECompanies.PAY_DOT]: ENTITY_TYPES[1],
  [ECompanies.POSTCODEDOTNL]: ENTITY_TYPES[1],
  [ECompanies.SANITY]: ENTITY_TYPES[1],
  [ECompanies.SCRIVE]: ENTITY_TYPES[1],
  [ECompanies.SECUROSYS]: ENTITY_TYPES[1],
  [ECompanies.SENDGRID]: ENTITY_TYPES[1],
  [ECompanies.SENTRY]: ENTITY_TYPES[1],
  [ECompanies.SHIFTBASE]: ENTITY_TYPES[1],
  [ECompanies.SLACK]: ENTITY_TYPES[1],
  [ECompanies.SONARCLOUD]: ENTITY_TYPES[1],
  [ECompanies.SUREPAY]: ENTITY_TYPES[1],
  [ECompanies.TWILIO]: ENTITY_TYPES[1],
  [ECompanies.UBIQUITI]: ENTITY_TYPES[1],
  [ECompanies.UNISCAPE]: ENTITY_TYPES[1],
  [ECompanies.VERCEL]: ENTITY_TYPES[1],
  [ECompanies.VERIFF]: ENTITY_TYPES[1],
  [ECompanies.ZENDESK]: ENTITY_TYPES[1],

  /**
   * Discarded
   */
  [ECompanies.BLOCKCHAINDOTCOM]: ENTITY_TYPES[1],
  [ECompanies.COINGECKO]: ENTITY_TYPES[1],
  [ECompanies.GLASSNODE]: ENTITY_TYPES[1],
  [ECompanies.ING]: ENTITY_TYPES[1],
  [ECompanies.KWINZO]: ENTITY_TYPES[1],
  [ECompanies.MEMPOOL]: ENTITY_TYPES[1],
  [ECompanies.QUICKNODE]: ENTITY_TYPES[1],
} as const;
