import { ECompanies } from './companies.enum';

const CRITICALITY_TPSPS = {
  /**
   * CRITICAL
   */
  AFAS: 'critical',
  BITVAVO: 'critical',
  BUNQ: 'critical',
  CHAINSTACK: 'critical',
  CLOUDFLARE: 'critical',
  COMPLYADVANTAGE: 'critical',
  ELLIPTIC: 'critical',
  GOOGLE_IRELAND: 'critical',
  HEXNODE: 'critical',
  KRAKEN: 'critical',
  KWINZO: 'critical',
  MICROSOFT: 'critical',
  NOTION: 'critical',
  SANITY: 'critical',
  SECUROSYS: 'critical',
  SENDGRID: 'critical',
  TWILIO: 'critical',
  UBIQUITI: 'critical',
  VERCEL: 'critical',
  ZENDESK: 'critical',
  /**
   * Are these 2 really critical?
   */
  GLASSNODE: 'critical',
  GRAFANA: 'critical',

  /**
   * NOT CRITICAL
   */
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
} as const;


export type TCriticalTPSP = keyof {
  [P in keyof typeof CRITICALITY_TPSPS as typeof CRITICALITY_TPSPS[P] extends 'critical' ? P : never]: true;
};
const _CRITICAL_TPSPS: Record<TCriticalTPSP, ECompanies> = {
  [ECompanies.AFAS]: undefined,
  [ECompanies.BITVAVO]: undefined,
  [ECompanies.BUNQ]: undefined,
  [ECompanies.CHAINSTACK]: undefined,
  [ECompanies.CLOUDFLARE]: undefined,
  [ECompanies.COMPLYADVANTAGE]: undefined,
  [ECompanies.ELLIPTIC]: undefined,
  [ECompanies.GLASSNODE]: undefined,
  [ECompanies.GOOGLE_IRELAND]: undefined,
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
export const CRITICAL_TPSPS = Object.keys(_CRITICAL_TPSPS) as TCriticalTPSP[];


export type TNonCriticalTPSP = keyof {
  [P in keyof typeof CRITICALITY_TPSPS as typeof CRITICALITY_TPSPS[P] extends 'non-critical' ? P : never]: true;
}
const _NON_CRITICAL_TPSPS: Record<TNonCriticalTPSP, ECompanies> = {
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
export const NON_CRITICAL_TPSPS = Object.keys(_NON_CRITICAL_TPSPS) as TNonCriticalTPSP[];
