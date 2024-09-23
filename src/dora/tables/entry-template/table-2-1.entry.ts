import { TableEntry } from './table-entry';
import { Currencies } from '../../constant-data/enums/currencies.enum';

export class EntryTable2_1 extends TableEntry {
  contractReferenceNumber: string;
  typeOfContract: string;
  overarchingContractReferenceNumber: string;
  annualCostCurrency: Currencies;
  annualCost: number;

  constructor() {
    super(2, 1);
  }
}
