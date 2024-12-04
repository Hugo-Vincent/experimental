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
  [ECompanies.BITVAVO]: 'non-critical',
  [ECompanies.BITWARDEN]: 'non-critical',
  [ECompanies.BLUEM]: 'non-critical',
  [ECompanies.CHAINSTACK]: 'non-critical',
  // Colt re-sells Uniscape's product called Uniscape.
  [ECompanies.COLT]: 'non-critical',
  [ECompanies.EXPO]: 'non-critical',
  [ECompanies.GITHUB]: 'non-critical',
  [ECompanies.FLANTUA]: 'non-critical',
  [ECompanies.HEXNODE]: 'non-critical',
  [ECompanies.KRAKEN]: 'non-critical',
  [ECompanies.LINEAR]: 'non-critical',
  [ECompanies.NOTION]: 'non-critical',
  [ECompanies.PAY_DOT]: 'non-critical',
  [ECompanies.POSTCODEDOTNL]: 'non-critical',
  [ECompanies.SANITY]: 'non-critical',
  [ECompanies.SCRIVE]: 'non-critical',
  [ECompanies.SENDGRID]: 'non-critical',
  [ECompanies.SENTRY]: 'non-critical',
  [ECompanies.SLACK]: 'non-critical',
  [ECompanies.SONARCLOUD]: 'non-critical',
  [ECompanies.TWILIO]: 'non-critical',
  [ECompanies.UBIQUITI]: 'non-critical',
  // The party Uniscape sells a product called Uniscape
  [ECompanies.UNISCAPE]: 'non-critical',
  [ECompanies.VERCEL]: 'non-critical',
  [ECompanies.VERIFF]: 'non-critical',
  [ECompanies.ZENDESK]: 'non-critical',

  /**
   * COMPANIES THAT ARE NOT TPSPS.
   */
  [ECompanies.ALPHABET]: 'other',
  [ECompanies.BLOCKRISE]: 'other',
  [ECompanies.BLOCKRISE_GROUP]: 'other',
  [ECompanies.MICROSOFT]: 'other',
  [ECompanies.STICHTING_BLOCKRISE]: 'other',

  /**
   * DISCARDED
   */
  [ECompanies.BLOCKCHAINDOTCOM]: 'discarded',
  [ECompanies.COINGECKO]: 'discarded',
  [ECompanies.GLASSNODE]: 'discarded',
  [ECompanies.GRAFANA]: 'discarded',
  [ECompanies.ING]: 'discarded',
  [ECompanies.KWINZO]: 'discarded',
  [ECompanies.MEMPOOL]: 'discarded',
  [ECompanies.NEXTNOVATE]: 'discarded',
  [ECompanies.QUICKNODE]: 'discarded',
  [ECompanies.SHIFTBASE]: 'discarded',
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
  [ECompanies.BITVAVO]: undefined,
  [ECompanies.BITWARDEN]: undefined,
  [ECompanies.BLUEM]: undefined,
  [ECompanies.CHAINSTACK]: undefined,
  [ECompanies.COLT]: undefined, // Supplier of Uniscape
  [ECompanies.EXPO]: undefined,
  [ECompanies.FLANTUA]: undefined,
  [ECompanies.GITHUB]: undefined,
  [ECompanies.HEXNODE]: undefined,
  [ECompanies.KRAKEN]: undefined,
  [ECompanies.LINEAR]: undefined,
  [ECompanies.NOTION]: undefined,
  [ECompanies.PAY_DOT]: undefined,
  [ECompanies.POSTCODEDOTNL]: undefined,
  [ECompanies.SANITY]: undefined,
  [ECompanies.SCRIVE]: undefined,
  [ECompanies.SENDGRID]: undefined,
  [ECompanies.SENTRY]: undefined,
  [ECompanies.SLACK]: undefined,
  [ECompanies.SONARCLOUD]: undefined,
  [ECompanies.TWILIO]: undefined,
  [ECompanies.UBIQUITI]: undefined,
  [ECompanies.UNISCAPE]: undefined,
  [ECompanies.VERCEL]: undefined,
  [ECompanies.VERIFF]: undefined,
  [ECompanies.ZENDESK]: undefined,
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
export type TOtherCompanies = keyof {
  [P in keyof typeof CRITICALITY_TPSPS as typeof CRITICALITY_TPSPS[P] extends 'other' ? P : never]: true;
}
export const _OTHER_COMPANIES: Record<TOtherCompanies, Company> = {
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

export type TCompanies = TNonCriticalTPSP | TCriticalTPSP | TOtherCompanies;

/**
 * ALL TPSPs
 */
export const ALL_COMPANY_INSTANCES: Record<TCriticalTPSP | TNonCriticalTPSP | TOtherCompanies, Company> = {
  ...CRITICAL_TPSP_INSTANCES,
  ...NON_CRITICAL_TPSP_INSTANCES,
  ..._OTHER_COMPANIES,
};
