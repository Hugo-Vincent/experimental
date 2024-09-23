import { ECompanies } from './constants/companies.enum';
import { Company } from './company.template';
import { COMPANY_LEI_CODES } from '../company-data/company-lei-codes.constants';
import { COMPANY_LEGAL_NAMES } from '../company-data/company-legal-names.constants';
import { COMPANY_CRN_CODES } from '../company-data/company-registration-numbers.constants';
import { TCriticalTPSP } from './constants/third-party-service-providers.constants';

const GoogleIreland = new Company(ECompanies.GOOGLE_IRELAND, {
  parent: {
    lei: COMPANY_LEI_CODES[ECompanies.ALPHABET].code,
    name: COMPANY_LEGAL_NAMES[ECompanies.ALPHABET],
  },
});
const BlockriseCapital = new Company(ECompanies.BLOCKRISE, {
  parent: {
    crn: COMPANY_CRN_CODES[ECompanies.BLOCKRISE_GROUP].code,
    name: COMPANY_LEGAL_NAMES[ECompanies.BLOCKRISE_GROUP],
  },
  totalAssetValue: 1e7,
});
const StichtingBlockrise = new Company(ECompanies.STICHTING_BLOCKRISE, {
  parent: {
    crn: COMPANY_CRN_CODES[ECompanies.BLOCKRISE_GROUP].code,
    name: COMPANY_LEGAL_NAMES[ECompanies.BLOCKRISE_GROUP],
  },
  totalAssetValue: 0,
});

export const CRITICAL_COMPANY_INSTANCES: Record<TCriticalTPSP, Company> = {
  AFAS: undefined,
  BITVAVO: undefined,
  BUNQ: undefined,
  CHAINSTACK: undefined,
  CLOUDFLARE: undefined,
  COMPLYADVANTAGE: undefined,
  ELLIPTIC: undefined,
  GLASSNODE: undefined,
  [ECompanies.GOOGLE_IRELAND]: GoogleIreland,
  GRAFANA: undefined,
  HEXNODE: undefined,
  KRAKEN: undefined,
  KWINZO: undefined,
  MICROSOFT: undefined,
  NOTION: undefined,
  SANITY: undefined,
  SECUROSYS: undefined,
  SENDGRID: undefined,
  TWILIO: undefined,
  UBIQUITI: undefined,
  VERCEL: undefined,
  ZENDESK: undefined
};

export const COMPANY_INSTANCES: Record<ECompanies, Company> = {
  ALPHABET: undefined,
  BITWARDEN: undefined,
  BLOCKCHAINDOTCOM: undefined,
  [ECompanies.BLOCKRISE]: BlockriseCapital,
  [ECompanies.STICHTING_BLOCKRISE]: StichtingBlockrise,
  BLOCKRISE_GROUP: undefined,
  COINGECKO: undefined,
  COLT: undefined,
  GITHUB: undefined,
  GOOGLE: undefined,
  IDIN: undefined,
  ING: undefined,
  LINEAR: undefined,
  MEMPOOL: undefined,
  NEXTNOVATE: undefined,
  PAY_DOT: undefined,
  POSTCODEAPI: undefined,
  QUICKNODE: undefined,
  SCRIVE: undefined,
  SENTRY: undefined,
  SHIFTBASE: undefined,
  SLACK: undefined,
  SONARCLOUD: undefined,
  SUREPAY: undefined,
  UNISCAPE: undefined,
  VERIFF: undefined,
  ...CRITICAL_COMPANY_INSTANCES
};
