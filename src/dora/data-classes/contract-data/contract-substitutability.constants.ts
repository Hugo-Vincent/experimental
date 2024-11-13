import { EContracts } from '../../common/contracts.enum';
import { SUBSTITUTABILITY, TSubstitutability } from '../closed-options/substitutability.types';

export const CONTRACT_SUBSTITUTABILITY: Record<EContracts, TSubstitutability> = {
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
  [EContracts.VERCEL]: SUBSTITUTABILITY[3],

  /**
   * NON-CRITICAL
   */
  CONTRACT_9: SUBSTITUTABILITY[4],
  CONTRACT_10: SUBSTITUTABILITY[4],
  CONTRACT_11: SUBSTITUTABILITY[4],
  CONTRACT_12: SUBSTITUTABILITY[4],
  CONTRACT_13: SUBSTITUTABILITY[4],
  CONTRACT_14: SUBSTITUTABILITY[4],
  CONTRACT_15: SUBSTITUTABILITY[4],
  CONTRACT_16: SUBSTITUTABILITY[4],
  CONTRACT_17: SUBSTITUTABILITY[4],
  CONTRACT_18: SUBSTITUTABILITY[4],
  CONTRACT_19: SUBSTITUTABILITY[4],
  CONTRACT_20: SUBSTITUTABILITY[4],
  CONTRACT_21: SUBSTITUTABILITY[4],
  CONTRACT_22: SUBSTITUTABILITY[4],
  CONTRACT_23: SUBSTITUTABILITY[4],
  CONTRACT_24: SUBSTITUTABILITY[4],
  CONTRACT_25: SUBSTITUTABILITY[4],
  CONTRACT_26: SUBSTITUTABILITY[4],
  CONTRACT_27: SUBSTITUTABILITY[4],
  CONTRACT_28: SUBSTITUTABILITY[4],
  CONTRACT_29: SUBSTITUTABILITY[4],
  CONTRACT_30: SUBSTITUTABILITY[4],
  CONTRACT_31: SUBSTITUTABILITY[4],
  CONTRACT_32: SUBSTITUTABILITY[4],
  CONTRACT_33: SUBSTITUTABILITY[4],
  CONTRACT_34: SUBSTITUTABILITY[4],
  CONTRACT_35: SUBSTITUTABILITY[4],
  CONTRACT_36: SUBSTITUTABILITY[4],
  CONTRACT_37: SUBSTITUTABILITY[4],
  CONTRACT_38: SUBSTITUTABILITY[4],
  CONTRACT_39: SUBSTITUTABILITY[4],
  CONTRACT_40: SUBSTITUTABILITY[4],
  CONTRACT_41: SUBSTITUTABILITY[4],
  CONTRACT_42: SUBSTITUTABILITY[4],
  CONTRACT_43: SUBSTITUTABILITY[4],
  CONTRACT_44: SUBSTITUTABILITY[4],
};
