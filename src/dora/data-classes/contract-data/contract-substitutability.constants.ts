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
  [EContracts.MICROSOFT_IRELAND]: SUBSTITUTABILITY[2],
  [EContracts.SECUROSYS]: SUBSTITUTABILITY[3],

  /**
   * NON-CRITICAL
   */
  [EContracts.AFAS_VIA_FLANTUA]: SUBSTITUTABILITY[4],
  [EContracts.BITVAVO]: SUBSTITUTABILITY[4],
  [EContracts.BITWARDEN]: SUBSTITUTABILITY[4],
  [EContracts.CHAINSTACK]: SUBSTITUTABILITY[4],
  [EContracts.EXPO]: SUBSTITUTABILITY[4],
  [EContracts.HEXNODE]: SUBSTITUTABILITY[4],
  [EContracts.KRAKEN]: SUBSTITUTABILITY[4],
  [EContracts.NOTION]: SUBSTITUTABILITY[4],
  [EContracts.SANITY]: SUBSTITUTABILITY[4],
  [EContracts.SENDGRID_VIA_TWILIO]: SUBSTITUTABILITY[4],
  [EContracts.TWILIO]: SUBSTITUTABILITY[4],
  [EContracts.UBIQUITI]: SUBSTITUTABILITY[4],
  [EContracts.ZENDESK]: SUBSTITUTABILITY[4],
  [EContracts.UNISCAPE_COLT]: SUBSTITUTABILITY[4],
  [EContracts.GITHUB]: SUBSTITUTABILITY[4],
  [EContracts.IDIN_VIA_BLUEM]: SUBSTITUTABILITY[4],
  [EContracts.LINEAR]: SUBSTITUTABILITY[4],
  [EContracts.PAY_DOT]: SUBSTITUTABILITY[4],
  [EContracts.POSTCODEDOTNL]: SUBSTITUTABILITY[4],
  [EContracts.SCRIVE_VIA_BLUEM]: SUBSTITUTABILITY[4],
  [EContracts.SENTRY]: SUBSTITUTABILITY[4],
  [EContracts.SLACK]: SUBSTITUTABILITY[4],
  [EContracts.SONARCLOUD]: SUBSTITUTABILITY[4],
  [EContracts.SUREPAY_VIA_BLUEM]: SUBSTITUTABILITY[4],
  [EContracts.UNISCAPE]: SUBSTITUTABILITY[4],
  [EContracts.VERCEL]: SUBSTITUTABILITY[3],
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
  [EContracts.MICROSOFT_IRELAND]: SUBSTITUTABILITY_REASONS[2],
};
