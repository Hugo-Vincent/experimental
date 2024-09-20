import { Countries } from '../../companies/enums/countries.enum';
import { TEntityType } from '../../constants/entity-types.constants';
import { TableEntry } from './table-entry';
import { TDate } from '../../types/general-types';
import { Currencies } from '../../companies/enums/currencies.enum';
import { Company } from '../../companies/company';

export class EntryTable1_2 extends TableEntry {
  lei: string;
  legalName: string;
  country: Countries;
  entityType: TEntityType;
  hierarchy: string;
  parentLei: string;
  lastUpdate: TDate;
  integrationDate: TDate;
  deletionDate: TDate;
  currency: string;
  totalAssetValue: string;

  constructor(
    company: Company,
    hierarchy: string,
    parentLei: string,
    lastUpdate: TDate,
    integrationDate: TDate,
    deletionDate: TDate,
    currency: Currencies,
    totalAssetValue: string,
  ) {
    super(1, 2);
    this.lei = company.companyIdentification.code;
    this.legalName = company.legalName;
    this.country = company.country;
    this.entityType = company.entityType;
    this.hierarchy = hierarchy;
    this.parentLei = parentLei;
    this.lastUpdate = lastUpdate;
    this.integrationDate = integrationDate;
    this.deletionDate = deletionDate;
    this.currency = currency;
    this.totalAssetValue = totalAssetValue;
  }
}
