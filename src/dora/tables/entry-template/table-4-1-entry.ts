import { TableEntry } from './table-entry';

export class EntryTable4_1 extends TableEntry {
  contractReferenceNumber: string;
  leiEntityUsingIctServices: string;
  natureEntity: string;
  branchIdCode: string;

  constructor(refNumber: string, lei: string, natureEntity: string) {
    super(4, 1);
    this.contractReferenceNumber = refNumber;
    this.leiEntityUsingIctServices = lei;
    this.natureEntity = natureEntity;
  }
}
