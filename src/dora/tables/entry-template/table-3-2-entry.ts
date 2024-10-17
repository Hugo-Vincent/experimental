import { TableEntry } from './table-entry';
import { TCodeType } from '../../common/general-types';
import { Contract } from '../../contracts/contract';

export class EntryTable3_2 extends TableEntry {
  contractReferenceNumber: string;
  tpspIdCode: string;
  typeOfCode: TCodeType;

  constructor(contract: Contract) {
    super(3, 2);
    this.contractReferenceNumber = contract.referenceNumber;
    this.tpspIdCode = contract.tpsp.companyIdentification.code;
    this.typeOfCode = contract.tpsp.companyIdentification.typeOfCode;
  }
}
