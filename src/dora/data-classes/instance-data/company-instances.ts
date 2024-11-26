import { ECompanies } from '../../common/companies.enum';
import { Company } from '../../classes/company';

const CRITICALITY_TPSPS = {
  /**
   * CRITICAL
   */
  [ECompanies.BUNQ]: 'critical',
  [ECompanies.COMPLYADVANTAGE]: 'critical',
  [ECompanies.ELLIPTIC]: 'critical',
  [ECompanies.GOOGLE_IRELAND]: 'critical',
  [ECompanies.MICROSOFT_IRELAND]: 'critical',
  [ECompanies.SECUROSYS]: 'critical',

  /**
   * NOT CRITICAL
   */
  [ECompanies.VERCEL]: 'non-critical', // (moved to non-critical 13-11-2024)
  [ECompanies.AFAS]: 'non-critical',
  [ECompanies.BITVAVO]: 'non-critical',
  [ECompanies.CHAINSTACK]: 'non-critical',
  [ECompanies.HEXNODE]: 'non-critical',
  [ECompanies.KRAKEN]: 'non-critical',
  [ECompanies.KWINZO]: 'non-critical',
  [ECompanies.NOTION]: 'non-critical',
  [ECompanies.SANITY]: 'non-critical',
  [ECompanies.SENDGRID]: 'non-critical',
  [ECompanies.TWILIO]: 'non-critical',
  [ECompanies.UBIQUITI]: 'non-critical',
  [ECompanies.ZENDESK]: 'non-critical',
  [ECompanies.GLASSNODE]: 'non-critical',
  [ECompanies.GRAFANA]: 'non-critical',
  [ECompanies.BITWARDEN]: 'non-critical',
  [ECompanies.BLOCKCHAINDOTCOM]: 'non-critical',
  [ECompanies.COINGECKO]: 'non-critical',
  [ECompanies.COLT]: 'non-critical',
  [ECompanies.GITHUB]: 'non-critical',
  [ECompanies.GOOGLE]: 'non-critical',
  [ECompanies.IDIN]: 'non-critical',
  [ECompanies.ING]: 'non-critical',
  [ECompanies.LINEAR]: 'non-critical',
  [ECompanies.MEMPOOL]: 'non-critical',
  [ECompanies.NEXTNOVATE]: 'non-critical',
  [ECompanies.PAY_DOT]: 'non-critical',
  [ECompanies.POSTCODEAPI]: 'non-critical',
  [ECompanies.QUICKNODE]: 'non-critical',
  [ECompanies.SCRIVE]: 'non-critical',
  [ECompanies.SENTRY]: 'non-critical',
  [ECompanies.SHIFTBASE]: 'non-critical',
  [ECompanies.SLACK]: 'non-critical',
  [ECompanies.SONARCLOUD]: 'non-critical',
  [ECompanies.SUREPAY]: 'non-critical',
  [ECompanies.UNISCAPE]: 'non-critical',
  [ECompanies.VERIFF]: 'non-critical',

  /**
   * COMPANIES THAT ARE NOT TPSPS.
   */
  [ECompanies.ALPHABET]: 'not applicable',
  [ECompanies.BLOCKRISE]: 'not applicable',
  [ECompanies.BLOCKRISE_GROUP]: 'not applicable',
  [ECompanies.MICROSOFT]: 'not applicable',
  [ECompanies.STICHTING_BLOCKRISE]: 'not applicable',

  // CLOUDFLARE: 'deleted',
} as const;
const _CRITICAL_TPSPS: Record<TCriticalTPSP, boolean> = {
  [ECompanies.BUNQ]: undefined,
  [ECompanies.COMPLYADVANTAGE]: undefined,
  [ECompanies.ELLIPTIC]: undefined,
  [ECompanies.GOOGLE_IRELAND]: undefined,
  [ECompanies.MICROSOFT_IRELAND]: undefined,
  [ECompanies.SECUROSYS]: undefined,
} as const;
const _NON_CRITICAL_TPSPS: Record<TNonCriticalTPSP, boolean> = {
  [ECompanies.VERCEL]: undefined,
  [ECompanies.AFAS]: undefined,
  [ECompanies.BITVAVO]: undefined,
  [ECompanies.BITWARDEN]: undefined,
  [ECompanies.CHAINSTACK]: undefined,
  [ECompanies.HEXNODE]: undefined,
  [ECompanies.KRAKEN]: undefined,
  [ECompanies.KWINZO]: undefined,
  [ECompanies.NOTION]: undefined,
  [ECompanies.SANITY]: undefined,
  [ECompanies.SENDGRID]: undefined,
  [ECompanies.TWILIO]: undefined,
  [ECompanies.UBIQUITI]: undefined,
  [ECompanies.ZENDESK]: undefined,
  [ECompanies.GLASSNODE]: undefined,
  [ECompanies.GRAFANA]: undefined,
  [ECompanies.BLOCKCHAINDOTCOM]: undefined,
  [ECompanies.COINGECKO]: undefined,
  [ECompanies.COLT]: undefined,
  [ECompanies.GITHUB]: undefined,
  [ECompanies.GOOGLE]: undefined,
  [ECompanies.IDIN]: undefined,
  [ECompanies.ING]: undefined,
  [ECompanies.LINEAR]: undefined,
  [ECompanies.MEMPOOL]: undefined,
  [ECompanies.NEXTNOVATE]: undefined,
  [ECompanies.PAY_DOT]: undefined,
  [ECompanies.POSTCODEAPI]: undefined,
  [ECompanies.QUICKNODE]: undefined,
  [ECompanies.SCRIVE]: undefined,
  [ECompanies.SENTRY]: undefined,
  [ECompanies.SHIFTBASE]: undefined,
  [ECompanies.SLACK]: undefined,
  [ECompanies.SONARCLOUD]: undefined,
  [ECompanies.SUREPAY]: undefined,
  [ECompanies.UNISCAPE]: undefined,
  [ECompanies.VERIFF]: undefined,
} as const;

/**
 * CRITICAL TPSPs
 */
export type TCriticalTPSP = keyof {
  [P in keyof typeof CRITICALITY_TPSPS as typeof CRITICALITY_TPSPS[P] extends 'critical' ? P : never]: true;
};
export const CRITICAL_TPSP_KEYS: TCriticalTPSP[] = Object.keys(_CRITICAL_TPSPS) as TCriticalTPSP[];
export const CRITICAL_TPSP_INSTANCES = CRITICAL_TPSP_KEYS.reduce((map, x) => {
  map[x] = new Company(x);
  return map;
}, {} as Record<TCriticalTPSP, Company>);
export const CRITICAL_TPSP_INSTANCES_ARRAY = Object.values(CRITICAL_TPSP_INSTANCES);

/**
 * NON-CRITICAL TPSPs
 */
export type TNonCriticalTPSP = keyof {
  [P in keyof typeof CRITICALITY_TPSPS as typeof CRITICALITY_TPSPS[P] extends 'non-critical' ? P : never]: true;
}
export const NON_CRITICAL_TPSPS_KEYS: TNonCriticalTPSP[] = Object.keys(_NON_CRITICAL_TPSPS) as TNonCriticalTPSP[];
export const NON_CRITICAL_TPSP_INSTANCES = NON_CRITICAL_TPSPS_KEYS.reduce((map, x) => {
  map[x] = new Company(x);
  return map;
}, {} as Record<TNonCriticalTPSP, Company>);
export const NON_CRITICAL_TPSP_INSTANCES_ARRAY = Object.values(NON_CRITICAL_TPSP_INSTANCES);

/**
 * CRITICAL AND NON-CRITICAL TPSPs
 */
export type TTPSP = TCriticalTPSP | TNonCriticalTPSP;
export const ALL_TPSP_INSTANCES: Record<TNonCriticalTPSP | TCriticalTPSP, Company> = {
  ...CRITICAL_TPSP_INSTANCES,
  ...NON_CRITICAL_TPSP_INSTANCES,
}
export const ALL_TPSP_INSTANCES_ARRAY = Object.values(ALL_TPSP_INSTANCES);
export const ALL_TPSP_KEYS = Object.keys(ALL_TPSP_INSTANCES) as TTPSP[];

/**
 * REST
 */
export const _OTHER_COMPANIES: Record<Exclude<ECompanies, TNonCriticalTPSP | TCriticalTPSP>, Company> = {
  [ECompanies.ALPHABET]: new Company(ECompanies.ALPHABET),
  [ECompanies.BLOCKRISE_GROUP]: new Company(ECompanies.BLOCKRISE_GROUP),
  [ECompanies.BLOCKRISE]: new Company(ECompanies.BLOCKRISE, {
    totalAssetValue: 1e7,
  }),
  [ECompanies.MICROSOFT]: new Company(ECompanies.MICROSOFT),
  [ECompanies.STICHTING_BLOCKRISE]: new Company(ECompanies.STICHTING_BLOCKRISE, {
    totalAssetValue: 0,
  }),
};

/**
 * ALL TPSPs
 */
export const ALL_COMPANY_INSTANCES: Record<ECompanies, Company> = {
  ...CRITICAL_TPSP_INSTANCES,
  ...NON_CRITICAL_TPSP_INSTANCES,
  ..._OTHER_COMPANIES,
};
