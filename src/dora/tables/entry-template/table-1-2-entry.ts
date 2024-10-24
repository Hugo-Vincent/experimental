import { TableEntry } from './table-entry';
import { TDate } from '../../common/general-types';
import { Currencies } from '../../common/currencies.enum';
import { Company } from '../../classes/company';
import { DELETION_DATE_PLACEHOLDER } from '../../common/data-constants';

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
    this.parentLei = company.parent?.companyIdentification.code ?? null;
    this.lastUpdate = lastUpdate;
    this.integrationDate = integrationDate;
    this.deletionDate = deletionDate;
    this.currency = Currencies.EUR;
    this.totalAssetValue = company.totalAssetValue;
  }
}
