import { TableEntry } from './table-entry';
import { Countries } from '../../common/countries.enum';

export class EntryTable1_3 extends TableEntry {
  branchIdCode: string;
  leiHeadOffice: string;
  branchName: string;
  branchCountry: Countries;

  constructor(branchIdCode: string, leiHeadOffice: string, branchName: string, branchCountry: Countries) {
    super(1, 3);
    this.branchIdCode = branchIdCode;
    this.leiHeadOffice = leiHeadOffice;
    this.branchName = branchName;
    this.branchCountry = branchCountry;
  }
}
