import { TableEntry } from './table-entry';
import { Company } from '../../classes/company';
import { TCodeType } from '../../common/general-types';
import { Countries } from '../../common/countries.enum';
import { Currencies } from '../../common/currencies.enum';
import { ECompanies } from '../../common/companies.enum';
import { CONTRACT_COSTS } from '../../data-classes/contract-data/contract-costs.constants';
import { EContracts } from '../../common/contracts.enum';

export class EntryTable5_1 extends TableEntry {
  idCode: string;
  typeOfCode: TCodeType;
  name: string;
  typeOfPerson: string;
  countryOfHQ: Countries;
  currency: Currencies;
  annualExpense: number;
  parentIdCode: string;
  parentTypeOfCode: TCodeType | '';

  constructor(company: Company) {
    super(5, 1);
    this.idCode = company.companyIdentification.code;
    this.typeOfCode = company.companyIdentification.typeOfCode;
    this.name = company.legalName;
    this.typeOfPerson = 'Legal person';
    this.countryOfHQ = company.country;
    this.currency = company.contract.annualCostcurrency;
    if (company.id === ECompanies.BUNQ) {
      this.annualExpense = CONTRACT_COSTS[EContracts.BUNQ_BLOCKRISE_BV].annualCost + CONTRACT_COSTS[EContracts.BUNQ_BLOCKRISE_STICHTING].annualCost;
    } else {
      this.annualExpense = company.contract.annualExpense;
    }
    if (company.parent) {
      this.parentIdCode = company.parent.companyIdentification.code;
      this.parentTypeOfCode = company.parent.companyIdentification.typeOfCode;
    } else {
      this.parentIdCode = '';
      this.parentTypeOfCode = '';
    }
  }
}
