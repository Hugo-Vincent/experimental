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
  [EContracts.MICROSOFT_IRELAND]: 'critical',
  [EContracts.SECUROSYS]: 'critical',

  /**
   * NOT CRITICAL
   */
  [EContracts.AFAS]: 'non-critical',
  [EContracts.BITVAVO]: 'non-critical',
  [EContracts.CHAINSTACK]: 'non-critical',
  [EContracts.EXPO]: 'non-critical',
  [EContracts.HEXNODE]: 'non-critical',
  [EContracts.KRAKEN]: 'non-critical',
  [EContracts.NOTION]: 'non-critical',

  [EContracts.ZENDESK]: 'non-critical',
  [EContracts.BITWARDEN]: 'non-critical',
  [EContracts.COLT]: 'non-critical',
  [EContracts.GITHUB]: 'non-critical',
  [EContracts.IDIN]: 'non-critical',
  [EContracts.LINEAR]: 'non-critical',
  [EContracts.PAY_DOT]: 'non-critical',
  [EContracts.POSTCODEDOTNL]: 'non-critical',

  [EContracts.SANITY]: 'non-critical',
  [EContracts.SCRIVE]: 'non-critical',
  [EContracts.SENDGRID]: 'non-critical',
  [EContracts.SENTRY]: 'non-critical',
  [EContracts.SLACK]: 'non-critical',
  [EContracts.SONARCLOUD]: 'non-critical',
  [EContracts.SUREPAY]: 'non-critical',
  [EContracts.TWILIO]: 'non-critical',
  [EContracts.UBIQUITI]: 'non-critical',
  [EContracts.UNISCAPE]: 'non-critical',
  [EContracts.VERIFF]: 'non-critical',
  [EContracts.VERCEL]: 'non-critical',
} as const;

const _CRITICAL_CONTRACTS: Record<TCriticalContract, boolean> = {
  [EContracts.BUNQ_BLOCKRISE_BV]: undefined,
  [EContracts.BUNQ_BLOCKRISE_STICHTING]: undefined,
  [EContracts.COMPLYADVANTAGE]: undefined,
  [EContracts.ELLIPTIC]: undefined,
  [EContracts.GOOGLE_IRELAND]: undefined,
  [EContracts.MICROSOFT_IRELAND]: undefined,
  [EContracts.SECUROSYS]: undefined,
};
const _NON_CRITICAL_CONTRACTS: Record<TNonCriticalContract, boolean> = {
  [EContracts.AFAS]: undefined,
  [EContracts.BITVAVO]: undefined,
  [EContracts.BITWARDEN]: undefined,
  [EContracts.CHAINSTACK]: undefined,
  [EContracts.COLT]: undefined,
  [EContracts.EXPO]: undefined,
  [EContracts.GITHUB]: undefined,
  [EContracts.HEXNODE]: undefined,
  [EContracts.IDIN]: undefined,
  [EContracts.KRAKEN]: undefined,
  [EContracts.LINEAR]: undefined,
  [EContracts.NOTION]: undefined,
  [EContracts.PAY_DOT]: undefined,
  [EContracts.POSTCODEDOTNL]: undefined,
  [EContracts.SANITY]: undefined,
  [EContracts.SCRIVE]: undefined,
  [EContracts.SENDGRID]: undefined,
  [EContracts.SENTRY]: undefined,
  [EContracts.SLACK]: undefined,
  [EContracts.SONARCLOUD]: undefined,
  [EContracts.SUREPAY]: undefined,
  [EContracts.TWILIO]: undefined,
  [EContracts.UBIQUITI]: undefined,
  [EContracts.UNISCAPE]: undefined,
  [EContracts.VERCEL]: undefined,
  [EContracts.VERIFF]: undefined,
  [EContracts.ZENDESK]: undefined,
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
