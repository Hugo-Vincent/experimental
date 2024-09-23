import { TableEntry } from './table-entry';
import { TDate } from '../../types/general-types';
import { Currencies } from '../../constant-data/enums/currencies.enum';
import { Company } from '../../companies/company.template';
import { DELETION_DATE_PLACEHOLDER } from '../constants/data-constants';

type TEntryTable1_2 = Pick<Company, 'legalName' | 'country'>

export class EntryTable1_2 extends TableEntry {
  lei:  Company['companyIdentification']['code'];
  legalName: Company['legalName'];
  country: Company['country'];
  entityType: Company['entityType'];
  lastUpdate: TDate;
  integrationDate: TDate;
  deletionDate: TDate;
  currency: Currencies;
  totalAssetValue: Company['totalAssetValue'];
  hierarchy: Company['hierarchy'];
  parentLei: Company['companyIdentification']['code'];

  constructor(
    company: Company,
    lastUpdate: TDate,
    integrationDate: TDate,
    deletionDate: TDate = DELETION_DATE_PLACEHOLDER,
  ) {
    super(1, 2);
    this.lei = company.companyIdentification.code;
    this.legalName = company.legalName;
    this.country = company.country;
    this.entityType = company.entityType;
    this.hierarchy = company.hierarchy;
    this.parentLei = company.parentLei ?? company.parentCrn ?? '/';
    this.lastUpdate = lastUpdate;
    this.integrationDate = integrationDate;
    this.deletionDate = deletionDate;
    this.currency = Currencies.EUR;
    this.totalAssetValue = company.totalAssetValue;
  }
}
