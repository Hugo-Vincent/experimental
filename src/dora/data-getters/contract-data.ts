import { Contract } from '../classes/contract';
import {
  ALL_CONTRACT_INSTANCES,
  ALL_CONTRACT_INSTANCES_ARRAY,
  CRITICAL_CONTRACTS,
  CRITICAL_CONTRACTS_ARRAY,
  NON_CRITICAL_CONTRACTS,
  NON_CRITICAL_CONTRACTS_ARRAY,
  TCriticalContract,
  TNonCriticalContract,
} from '../data-classes/instance-data/contract-instances';

export class ContractData {
  getAllContracts(): Record<TCriticalContract | TNonCriticalContract, Contract> {
    return ALL_CONTRACT_INSTANCES;
  }
  getAllContractsArray(): Contract[] {
    return ALL_CONTRACT_INSTANCES_ARRAY;
  }

  getCriticalContracts(): Record<TCriticalContract, Contract> {
    return CRITICAL_CONTRACTS;
  }
  getCriticalContractsArray(): Contract[] {
    return CRITICAL_CONTRACTS_ARRAY;
  }

  getNonCriticalContracts(): Record<TNonCriticalContract, Contract> {
    return NON_CRITICAL_CONTRACTS;
  }
  getNonCriticalContractsArray(): Contract[] {
    return NON_CRITICAL_CONTRACTS_ARRAY;
  }
}
