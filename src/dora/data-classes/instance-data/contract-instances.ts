import { Contract } from '../../classes/contract';
import { EContracts } from '../../common/contracts.enum';

const _CRITICALITY_CONTRACTS = {
  /**
   * CRITICAL
   */
  [EContracts.BUNQ_BLOCKRISE_BV]: 'critical',
  [EContracts.BUNQ_BLOCKRISE_STICHTING]: 'critical',
  [EContracts.COMPLYADVANTAGE]: 'critical',
  [EContracts.ELLIPTIC]: 'critical',
  [EContracts.GOOGLE_IRELAND]: 'critical',
  [EContracts.MICROSOFT]: 'critical',
  [EContracts.SECUROSYS]: 'critical',
  [EContracts.VERCEL]: 'non-critical',

  /**
   * NOT CRITICAL
   */
  [EContracts.AFAS]: 'non-critical',
  [EContracts.BITVAVO]: 'non-critical',
  [EContracts.CHAINSTACK]: 'non-critical',
  [EContracts.HEXNODE]: 'non-critical',
  [EContracts.KRAKEN]: 'non-critical',
  [EContracts.KWINZO]: 'non-critical',
  [EContracts.NOTION]: 'non-critical',
  [EContracts.SANITY]: 'non-critical',
  [EContracts.SENDGRID]: 'non-critical',
  [EContracts.TWILIO]: 'non-critical',
  [EContracts.UBIQUITI]: 'non-critical',
  [EContracts.ZENDESK]: 'non-critical',
  [EContracts.GLASSNODE]: 'non-critical',
  [EContracts.GRAFANA]: 'non-critical',
  [EContracts.BITWARDEN]: 'non-critical',
  [EContracts.BLOCKCHAINDOTCOM]: 'non-critical',
  [EContracts.COINGECKO]: 'non-critical',
  [EContracts.COLT]: 'non-critical',
  [EContracts.GITHUB]: 'non-critical',
  [EContracts.GOOGLE]: 'non-critical',
  [EContracts.IDIN]: 'non-critical',
  [EContracts.ING]: 'non-critical',
  [EContracts.LINEAR]: 'non-critical',
  [EContracts.MEMPOOL]: 'non-critical',
  [EContracts.NEXTNOVATE]: 'non-critical',
  [EContracts.PAY_DOT]: 'non-critical',
  [EContracts.POSTCODEAPI]: 'non-critical',
  [EContracts.QUICKNODE]: 'non-critical',
  [EContracts.SCRIVE]: 'non-critical',
  [EContracts.SENTRY]: 'non-critical',
  [EContracts.SHIFTBASE]: 'non-critical',
  [EContracts.SLACK]: 'non-critical',
  [EContracts.SONARCLOUD]: 'non-critical',
  [EContracts.SUREPAY]: 'non-critical',
  [EContracts.UNISCAPE]: 'non-critical',
  [EContracts.VERIFF]: 'non-critical',
} as const;

const _CRITICAL_CONTRACTS: Record<TCriticalContract, boolean> = {
  [EContracts.BUNQ_BLOCKRISE_BV]: undefined,
  [EContracts.BUNQ_BLOCKRISE_STICHTING]: undefined,
  [EContracts.COMPLYADVANTAGE]: undefined,
  [EContracts.ELLIPTIC]: undefined,
  [EContracts.GOOGLE_IRELAND]: undefined,
  [EContracts.MICROSOFT]: undefined,
  [EContracts.SECUROSYS]: undefined,
};
const _NON_CRITICAL_CONTRACTS: Record<TNonCriticalContract, boolean> = {
  [EContracts.VERCEL]: undefined,
  [EContracts.AFAS]: undefined,
  [EContracts.BITVAVO]: undefined,
  [EContracts.CHAINSTACK]: undefined,
  [EContracts.HEXNODE]: undefined,
  [EContracts.KRAKEN]: undefined,
  [EContracts.KWINZO]: undefined,
  [EContracts.NOTION]: undefined,
  [EContracts.SANITY]: undefined,
  [EContracts.SENDGRID]: undefined,
  [EContracts.TWILIO]: undefined,
  [EContracts.UBIQUITI]: undefined,
  [EContracts.ZENDESK]: undefined,
  [EContracts.GLASSNODE]: undefined,
  [EContracts.GRAFANA]: undefined,
  [EContracts.BITWARDEN]: undefined,
  [EContracts.BLOCKCHAINDOTCOM]: undefined,
  [EContracts.COINGECKO]: undefined,
  [EContracts.COLT]: undefined,
  [EContracts.GITHUB]: undefined,
  [EContracts.GOOGLE]: undefined,
  [EContracts.IDIN]: undefined,
  [EContracts.ING]: undefined,
  [EContracts.LINEAR]: undefined,
  [EContracts.MEMPOOL]: undefined,
  [EContracts.NEXTNOVATE]: undefined,
  [EContracts.PAY_DOT]: undefined,
  [EContracts.POSTCODEAPI]: undefined,
  [EContracts.QUICKNODE]: undefined,
  [EContracts.SCRIVE]: undefined,
  [EContracts.SENTRY]: undefined,
  [EContracts.SHIFTBASE]: undefined,
  [EContracts.SLACK]: undefined,
  [EContracts.SONARCLOUD]: undefined,
  [EContracts.SUREPAY]: undefined,
  [EContracts.UNISCAPE]: undefined,
  [EContracts.VERIFF]: undefined,
};

/**
 * CRITICAL
 */
export type TCriticalContract = keyof {
  [P in keyof typeof _CRITICALITY_CONTRACTS as typeof _CRITICALITY_CONTRACTS[P] extends 'critical' ? P : never]: true;
};
export const CRITICAL_CONTRACTS: Record<TCriticalContract, Contract> = Object.keys(_CRITICAL_CONTRACTS)
  .reduce((acc, contractId: EContracts) => {
    acc[contractId] = new Contract(contractId, 'No', null, null);
    return acc;
  }, {} as Record<TCriticalContract, Contract>);
export const CRITICAL_CONTRACTS_ARRAY = Object.values(CRITICAL_CONTRACTS);

/**
 * NON-CRITICAL
 */
export type TNonCriticalContract = keyof {
  [P in keyof typeof _CRITICALITY_CONTRACTS as typeof _CRITICALITY_CONTRACTS[P] extends 'non-critical' ? P : never]: true;
};
export const NON_CRITICAL_CONTRACTS: Record<TNonCriticalContract, Contract> = Object.keys(_NON_CRITICAL_CONTRACTS)
  .reduce((acc, contractId: EContracts) => {
    acc[contractId] = new Contract(contractId, 'No', null, null);
    return acc;
  }, {} as Record<TNonCriticalContract, Contract>);
export const NON_CRITICAL_CONTRACTS_ARRAY = Object.values(NON_CRITICAL_CONTRACTS);

/**
 * ALL
 */
export const ALL_CONTRACT_INSTANCES = {
  ...CRITICAL_CONTRACTS,
  ...NON_CRITICAL_CONTRACTS,
} as const;
export const ALL_CONTRACT_INSTANCES_ARRAY = Object.values(ALL_CONTRACT_INSTANCES);
