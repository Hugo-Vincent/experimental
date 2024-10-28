import { TableEntry } from './table-entry';
import { TCodeType } from '../../common/general-types';
import { Contract } from '../../classes/contract';

export class EntryTable3_2 extends TableEntry {
  contractReferenceNumber: string;
  tpspIdCode: string;
  typeOfCode: TCodeType;

  constructor(contract: Contract) {
    super(3, 2);
    this.contractReferenceNumber = contract.id;
    this.tpspIdCode = contract.tpspInstance.companyIdentification.code;
    this.typeOfCode = contract.tpspInstance.companyIdentification.typeOfCode;
  }
}
