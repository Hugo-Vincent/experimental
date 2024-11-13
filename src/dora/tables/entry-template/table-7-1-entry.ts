import { TableEntry } from './table-entry';
import { Contract } from '../../classes/contract';
import { Company } from '../../classes/company';

export class EntryTable7_1 extends TableEntry {
  contractRefNumber: Contract['id'];
  idCodeTPSP: Company['companyIdentification']['code'];
  idCodeTPSPType: Company['companyIdentification']['typeOfCode']
  ictSDerviceType: Contract['ictServicesType'];
  substitutability: Contract['substitutability'];
  lastAuditDate: Contract['lastAuditDate'];
  exitPlanExists: Contract['exitPlanExists'];

  constructor(contract: Contract) {
    super(7, 1);
    this.contractRefNumber = contract.id
    this.idCodeTPSP = contract.tpspInstance.companyIdentification.code;
    this.idCodeTPSPType = contract.tpspInstance.companyIdentification.typeOfCode;
    this.ictSDerviceType = contract.ictServicesType;
    this.substitutability = contract.substitutability;
    this.lastAuditDate = contract.lastAuditDate;
    this.exitPlanExists =
  }
}
