import { TableEntry } from './table-entry';
import { Contract } from '../../classes/contract';
import { Company } from '../../classes/company';

export class EntryTable2_2 extends TableEntry {
  contractReferenceNumber: Contract['referenceNumber'];
  financialEntityLei: Contract['financialEntityLei'];
  tpspCompanyIdentificationCode: Company['companyIdentification']['code'];
  typeOfCode:  Company['companyIdentification']['typeOfCode'];
  functionIdentifier: Contract['functionIdentifier'];

  ictServicesType: Contract['ictServicesType'];
  start: Contract['start'];
  end: Contract['end'];
  reasonForTermination: Contract['reasonForTermination'];
  noticePeriodFinEntity: Contract['noticePeriodFinEntity'];

  noticePeriodTpsp: Contract['noticePeriodTpsp'];
  contractGoverningLawCountry: Contract['contractGoverningLawCountry'];
  provisionCountry: Contract['provisionCountry'];
  storageOfData: Contract['storageOfData'];
  dataLocation: Contract['dataLocation'];

  processingLocation: Contract['processingLocation']
  dataSensitivity: Contract['dataSensitivity']
  relianceLevel: Contract['relianceLevel'];

  constructor(contract: Contract) {
    super(2, 2);
    this.contractReferenceNumber = contract.referenceNumber;
    this.financialEntityLei = contract.financialEntityLei;
    this.tpspCompanyIdentificationCode = contract.tpsp.companyIdentification.code;
    this.typeOfCode = contract.tpsp.companyIdentification.typeOfCode;
    this.functionIdentifier = contract.functionIdentifier;

    this.ictServicesType = contract.ictServicesType;
    this.start = contract.start;
    this.end = contract.end;
    this.reasonForTermination = contract.reasonForTermination;
    this.noticePeriodFinEntity = contract.noticePeriodFinEntity;

    this.noticePeriodTpsp = contract.noticePeriodTpsp;
    this.contractGoverningLawCountry = contract.contractGoverningLawCountry;
    this.provisionCountry = contract.provisionCountry;
    this.storageOfData = contract.storageOfData;
    this.dataLocation = contract.dataLocation;

    this.processingLocation = contract.processingLocation;
    this.dataSensitivity = contract.dataSensitivity;
    this.relianceLevel = contract.relianceLevel;
  }
}
