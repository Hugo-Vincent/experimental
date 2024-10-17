import { ECompanies } from '../../common/companies.enum';

const CRITICALITY_TPSPS = {
  /**
   * CRITICAL
   */
  BUNQ: 'critical',
  COMPLYADVANTAGE: 'critical',
  ELLIPTIC: 'critical',
  GOOGLE_IRELAND: 'critical',
  MICROSOFT: 'critical',
  SECUROSYS: 'critical',
  VERCEL: 'critical',

  /**
   * NOT CRITICAL
   */
  AFAS: 'non-critical',
  BITVAVO: 'non-critical',
  CHAINSTACK: 'non-critical',
  HEXNODE: 'non-critical',
  KRAKEN: 'non-critical',
  KWINZO: 'non-critical',
  NOTION: 'non-critical',
  SANITY: 'non-critical',
  SENDGRID: 'non-critical',
  TWILIO: 'non-critical',
  UBIQUITI: 'non-critical',
  ZENDESK: 'non-critical',
  GLASSNODE: 'non-critical',
  GRAFANA: 'non-critical',
  BITWARDEN: 'non-critical',
  BLOCKCHAINDOTCOM: 'non-critical',
  COINGECKO: 'non-critical',
  COLT: 'non-critical',
  GITHUB: 'non-critical',
  GOOGLE: 'non-critical',
  IDIN: 'non-critical',
  ING: 'non-critical',
  LINEAR: 'non-critical',
  MEMPOOL: 'non-critical',
  NEXTNOVATE: 'non-critical',
  PAY_DOT: 'non-critical',
  POSTCODEAPI: 'non-critical',
  QUICKNODE: 'non-critical',
  SCRIVE: 'non-critical',
  SENTRY: 'non-critical',
  SHIFTBASE: 'non-critical',
  SLACK: 'non-critical',
  SONARCLOUD: 'non-critical',
  SUREPAY: 'non-critical',
  UNISCAPE: 'non-critical',
  VERIFF: 'non-critical',

  /**
   * COMPANIES THAT ARE NOT TPSPS.
   */
  ALPHABET: 'not applicable',
  BLOCKRISE: 'not applicable',
  BLOCKRISE_GROUP: 'not applicable',
  STICHTING_BLOCKRISE: 'not applicable',

  // CLOUDFLARE: 'deleted',
} as const;


export type TCriticalTPSP = keyof {
  [P in keyof typeof CRITICALITY_TPSPS as typeof CRITICALITY_TPSPS[P] extends 'critical' ? P : never]: true;
};
const _CRITICAL_TPSPS: Record<TCriticalTPSP, ECompanies> = {
  [ECompanies.BUNQ]: undefined,
  [ECompanies.COMPLYADVANTAGE]: undefined,
  [ECompanies.ELLIPTIC]: undefined,
  [ECompanies.GOOGLE_IRELAND]: undefined,
  [ECompanies.MICROSOFT]: undefined,
  [ECompanies.SECUROSYS]: undefined,
  [ECompanies.VERCEL]: undefined,
};
export const CRITICAL_TPSP_KEYS = Object.keys(_CRITICAL_TPSPS) as TCriticalTPSP[];


export type TNonCriticalTPSP = keyof {
  [P in keyof typeof CRITICALITY_TPSPS as typeof CRITICALITY_TPSPS[P] extends 'non-critical' ? P : never]: true;
}
const _NON_CRITICAL_TPSPS: Record<TNonCriticalTPSP, ECompanies> = {
  AFAS: undefined,
  BITVAVO: undefined,
  BITWARDEN: undefined,
  CHAINSTACK: undefined,
  HEXNODE: undefined,
  KRAKEN: undefined,
  KWINZO: undefined,
  NOTION: undefined,
  SANITY: undefined,
  SENDGRID: undefined,
  TWILIO: undefined,
  UBIQUITI: undefined,
  ZENDESK: undefined,
  GLASSNODE: undefined,
  GRAFANA: undefined,
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
  VERIFF: undefined,
};
export const NON_CRITICAL_TPSPS_KEYS = Object.keys(_NON_CRITICAL_TPSPS) as TNonCriticalTPSP[];
