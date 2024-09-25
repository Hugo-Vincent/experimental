import { ECompanies } from './constants/companies.enum';
import { Company } from './company.template';
import { COMPANY_LEI_CODES } from '../company-data/company-lei-codes.constants';
import { COMPANY_LEGAL_NAMES } from '../company-data/company-legal-names.constants';
import { COMPANY_CRN_CODES } from '../company-data/company-registration-numbers.constants';
import { TCriticalTPSP, TNonCriticalTPSP } from './constants/third-party-service-providers.constants';

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
const GoogleIreland = new Company(ECompanies.GOOGLE_IRELAND, {
  parent: {
    lei: COMPANY_LEI_CODES[ECompanies.ALPHABET].code,
    name: COMPANY_LEGAL_NAMES[ECompanies.ALPHABET],
  },
});

const _CRITICAL_TPSP_INSTANCES: Record<TCriticalTPSP, Company> = {
  [ECompanies.AFAS]: undefined,
  [ECompanies.BITVAVO]: undefined,
  [ECompanies.BUNQ]: undefined,
  [ECompanies.CHAINSTACK]: undefined,
  [ECompanies.CLOUDFLARE]: undefined,
  [ECompanies.COMPLYADVANTAGE]: undefined,
  [ECompanies.ELLIPTIC]: undefined,
  [ECompanies.GLASSNODE]: undefined,
  [ECompanies.GOOGLE_IRELAND]: GoogleIreland,
  [ECompanies.GRAFANA]: undefined,
  [ECompanies.HEXNODE]: undefined,
  [ECompanies.KRAKEN]: undefined,
  [ECompanies.KWINZO]: undefined,
  [ECompanies.MICROSOFT]: undefined,
  [ECompanies.NOTION]: undefined,
  [ECompanies.SANITY]: undefined,
  [ECompanies.SECUROSYS]: undefined,
  [ECompanies.SENDGRID]: undefined,
  [ECompanies.TWILIO]: undefined,
  [ECompanies.UBIQUITI]: undefined,
  [ECompanies.VERCEL]: undefined,
  [ECompanies.ZENDESK]: undefined,
};
export const CRITICAL_TPSP_INSTANCES = (() => {
  (Object.keys(_CRITICAL_TPSP_INSTANCES) as TCriticalTPSP[]).forEach((x ) => {
    if (_CRITICAL_TPSP_INSTANCES[x]) return;
    _CRITICAL_TPSP_INSTANCES[x] = new Company(x);
  });
  return _CRITICAL_TPSP_INSTANCES;
})();

const _NON_CRITICAL_TPSP_INSTANCES: Record<TNonCriticalTPSP, Company> = {
  BITWARDEN: undefined,
  BLOCKCHAINDOTCOM: undefined,
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
  VERIFF: undefined
};
export const NON_CRITICAL_TPSP_INSTANCES = (() => {
  (Object.keys(_NON_CRITICAL_TPSP_INSTANCES) as TCriticalTPSP[]).forEach((x ) => {
    if (_NON_CRITICAL_TPSP_INSTANCES[x]) return;
    _NON_CRITICAL_TPSP_INSTANCES[x] = new Company(x);
  });
  return _NON_CRITICAL_TPSP_INSTANCES;
})();



export const ALL_COMPANY_INSTANCES: Record<ECompanies, Company> = {
  ...CRITICAL_TPSP_INSTANCES,
  ...NON_CRITICAL_TPSP_INSTANCES,
  [ECompanies.ALPHABET]: new Company(ECompanies.ALPHABET),
  [ECompanies.BLOCKRISE_GROUP]: new Company(ECompanies.BLOCKRISE_GROUP),

  [ECompanies.BLOCKRISE]: BlockriseCapital,
  [ECompanies.STICHTING_BLOCKRISE]: StichtingBlockrise,
};

