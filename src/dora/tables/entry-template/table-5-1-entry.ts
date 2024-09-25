import { TableEntry } from './table-entry';
import { Company } from '../../companies/company.template';
import { TCodeType } from '../../types/general-types';
import { Countries } from '../../constant-data/enums/countries.enum';
import { Currencies } from '../../constant-data/enums/currencies.enum';

export class EntryTable5_1 extends TableEntry {
  idCode: string;
  typeOfCode: TCodeType
  name: string;
  typeOfPerson: string;
  countryOfHQ: Countries;
  currency: Currencies;
  annualExpense: number;
  parentIdCode: string;
  parentTypeOfCode: TCodeType;

  constructor(company: Company) {
    super(5, 1);
    this.idCode = company.companyIdentification.code;
    this.typeOfCode = company.typeOfCode;
    this.name = company.legalName;
    this.typeOfPerson = 'Legal person';
    this.countryOfHQ = company.country;
    this.currency = Currencies.EUR;
    this.annualExpense = 15000;
    this.parentIdCode = company.parentLei;
    this.parentTypeOfCode = company.parentLei ? 'LEI' : 'NL_CRN';
  }
}
