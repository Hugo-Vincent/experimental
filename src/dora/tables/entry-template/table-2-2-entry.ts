import { TableEntry } from './table-entry';
import { TCodeType, TDate } from '../../types/general-types';
import { Countries } from '../../companies/enums/countries.enum';

export class EntryTable2_2 extends TableEntry {
  contractReferenceNumber: string; // uuid;
  leiFinEntity: string;
  idCodeTPSP: string;
  typeOfCodeTPSP: TCodeType;
  functionIdentifier: string;

  ictServicesType: string;
  startDateContract: TDate;
  endDateContract: TDate;
  terminationReason: string;
  noticePeriodFinEntity: string;

  noticePeriodTPSP: string;
  countryOfContractLaw: Countries;
  countryOfProvisionOfIctServices: string;
  storageOfData: 'yes' | 'no';
  locationOfDataStorage: string;

  locationOfDataProcessing: string;
  sensitivenessTPSPData: string;
  relianceLevelOnTPSP: string;

  constructor() {
    super(2, 2);
  }
}
