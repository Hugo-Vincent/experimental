import { TableEntry } from './table-entry';
import { Currencies } from '../../common/currencies.enum';
import { TContractualArrangement } from '../../contracts/constants/contractual-arrangement-types.constants';
import { Contract } from '../../contracts/contract';

export class EntryTable2_1 extends TableEntry {
  contractReferenceNumber: string;
  typeOfContract: TContractualArrangement;
  overarchingContractReferenceNumber: string;
  annualCostCurrency: Currencies;
  annualCost: number;

  constructor(contract: Contract) {
    super(2, 1);
    this.contractReferenceNumber = contract.referenceNumber;
    this.typeOfContract = contract.contractType;
    this.overarchingContractReferenceNumber = contract.overarchingContractualArrangementReferenceNumber;
    this.annualCostCurrency = contract.annualCostcurrency;
    this.annualCost = contract.annualExpense;
  }
}
