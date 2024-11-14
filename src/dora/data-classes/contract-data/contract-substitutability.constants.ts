import { EContracts } from '../../common/contracts.enum';
import { SUBSTITUTABILITY, TSubstitutability } from '../closed-options/substitutability.types';
import { SUBSTITUTABILITY_REASONS } from '../closed-options/substitutability-reasons.types';

const _CONTRACT_SUBSTITUTABILITY = {
  /**
   * CRITICAL
   */
  [EContracts.BUNQ_BLOCKRISE_BV]: SUBSTITUTABILITY[3],
  [EContracts.BUNQ_BLOCKRISE_STICHTING]: SUBSTITUTABILITY[3],
  [EContracts.COMPLYADVANTAGE]: SUBSTITUTABILITY[4],
  [EContracts.ELLIPTIC]: SUBSTITUTABILITY[4],
  [EContracts.GOOGLE_IRELAND]: SUBSTITUTABILITY[2],
  [EContracts.MICROSOFT]: SUBSTITUTABILITY[2],
  [EContracts.SECUROSYS]: SUBSTITUTABILITY[3],

  /**
   * NON-CRITICAL
   */
  [EContracts.VERCEL]: SUBSTITUTABILITY[3],

  // FIll in here. If complex or not substitutable, below will error so you must give a reason.
  [EContracts.AFAS]: SUBSTITUTABILITY[4],
  [EContracts.BITVAVO]: SUBSTITUTABILITY[4],
  [EContracts.BITWARDEN]: SUBSTITUTABILITY[4],
  [EContracts.CHAINSTACK]: SUBSTITUTABILITY[4],
  [EContracts.HEXNODE]: SUBSTITUTABILITY[4],
  [EContracts.KRAKEN]: SUBSTITUTABILITY[4],
  [EContracts.KWINZO]: SUBSTITUTABILITY[4],
  [EContracts.NOTION]: SUBSTITUTABILITY[4],
  [EContracts.SANITY]: SUBSTITUTABILITY[4],
  [EContracts.SENDGRID]: SUBSTITUTABILITY[4],
  [EContracts.TWILIO]: SUBSTITUTABILITY[4],
  [EContracts.UBIQUITI]: SUBSTITUTABILITY[4],
  [EContracts.ZENDESK]: SUBSTITUTABILITY[4],
  [EContracts.GLASSNODE]: SUBSTITUTABILITY[4],
  [EContracts.GRAFANA]: SUBSTITUTABILITY[4],
  [EContracts.BLOCKCHAINDOTCOM]: SUBSTITUTABILITY[4],
  [EContracts.COINGECKO]: SUBSTITUTABILITY[4],
  [EContracts.COLT]: SUBSTITUTABILITY[4],
  [EContracts.GITHUB]: SUBSTITUTABILITY[4],
  [EContracts.GOOGLE]: SUBSTITUTABILITY[4],
  [EContracts.IDIN]: SUBSTITUTABILITY[4],
  [EContracts.ING]: SUBSTITUTABILITY[4],
  [EContracts.LINEAR]: SUBSTITUTABILITY[4],
  [EContracts.MEMPOOL]: SUBSTITUTABILITY[4],
  [EContracts.NEXTNOVATE]: SUBSTITUTABILITY[4],
  [EContracts.PAY_DOT]: SUBSTITUTABILITY[4],
  [EContracts.POSTCODEAPI]: SUBSTITUTABILITY[4],
  [EContracts.QUICKNODE]: SUBSTITUTABILITY[4],
  [EContracts.SCRIVE]: SUBSTITUTABILITY[4],
  [EContracts.SENTRY]: SUBSTITUTABILITY[4],
  [EContracts.SHIFTBASE]: SUBSTITUTABILITY[4],
  [EContracts.SLACK]: SUBSTITUTABILITY[4],
  [EContracts.SONARCLOUD]: SUBSTITUTABILITY[4],
  [EContracts.SUREPAY]: SUBSTITUTABILITY[4],
  [EContracts.UNISCAPE]: SUBSTITUTABILITY[4],
  [EContracts.VERIFF]: SUBSTITUTABILITY[4],
} as const;
type TContractCSubstitutabilityKey = keyof typeof _CONTRACT_SUBSTITUTABILITY;
type TContractSubstitutabilityValueParameterized<P extends TContractCSubstitutabilityKey> = typeof _CONTRACT_SUBSTITUTABILITY[P];

type TContractComplexSubstitutability = {
  [P in TContractCSubstitutabilityKey as TContractSubstitutabilityValueParameterized<P> extends '1. Not substitutable' | '2. Highly complex substitutability' ? P : never]: typeof SUBSTITUTABILITY_REASONS[keyof typeof SUBSTITUTABILITY_REASONS];
};

export const CONTRACT_SUBSTITUTABILITY: Record<EContracts, TSubstitutability> = _CONTRACT_SUBSTITUTABILITY;
export const CONTRACT_SUBSTITUTABILITY_COMPLEX_REASONS: TContractComplexSubstitutability = {
  /**
   * CRITICAL
   */
  [EContracts.GOOGLE_IRELAND]: SUBSTITUTABILITY_REASONS[2],
  [EContracts.MICROSOFT]: SUBSTITUTABILITY_REASONS[2],
};
