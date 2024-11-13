import { TableEntry } from './table-entry';
import { Contract } from '../../classes/contract';
import { ICompanyIndentification } from '../../common/interfaces/company-id.interface';

export class EntryTable3_1 extends TableEntry {
  contractRefNumber: Contract['id'];
  leiEntitySigningCOntract: Contract['contractUser'];

  constructor(contract: Contract) {
    super(3, 1);
    this.contractRefNumber = contract.id;
    this.leiEntitySigningCOntract = contract.contractSigner;
  }
}
