import { Countries } from '../companies/enums/countries.enum';
import { TEntityType } from '../constants/entity-types.constants';
import { Table } from './table';
import { TDate } from '../types/dora-types';

export class Table1_2_Entry extends Table {
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
    lei: string,
    legalName: string,
    country: Countries,
    entityType: TEntityType,
    hierarchy: string,
    parentLei: string,
    lastUpdate: TDate,
    integrationDate: TDate,
    deletionDate: TDate,
    currency: string,
    totalAssetValue: string,
  ) {
    super(1, 2);
    this.lei = lei;
    this.legalName = legalName;
    this.country = country;
    this.entityType = entityType;
    this.hierarchy = hierarchy;
    this.parentLei = parentLei;
    this.lastUpdate = lastUpdate;
    this.integrationDate = integrationDate;
    this.deletionDate = deletionDate;
    this.currency = currency;
    this.totalAssetValue = totalAssetValue;
  }
}
