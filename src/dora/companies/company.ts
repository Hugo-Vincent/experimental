import { ICompanyInfo } from './interfaces/company.interface';
import { TCodeType, TCompanyIdentifiers } from '../types/general-types';
import { ICompanyIndentification } from './interfaces/company-id.interface';
import { COMPANY_LEGAL_NAMES } from './constants/company-data/legal-names.constants';
import { COMPANY_TRADEMARKS } from './constants/company-data/trade-mark-names.constants';
import { COMPANY_COUNTRY_CODES } from '../constants/country-codes.constants';
import { CODETYPE_TO_CODEMAP } from '../constants/mappings.constants';
import { ECompanies } from './enums/companies.enum';
import { COMPANY_LEI_CODES } from './constants/company-data/lei-codes.constants';
import { COMPANY_CRN_CODES } from './constants/company-data/crn-codes.constants';
import { Countries } from './enums/countries.enum';
import { TEntityType } from '../constants/entity-types.constants';
import { COMPANY_ENTITY_TYPES } from './constants/company-data/company-entity-types.constants';

export class Company implements ICompanyInfo {
  legalName: string;
  tradeMark: string;
  country: Countries;
  entityType: TEntityType;
  typeOfCode: TCodeType;
  companyIdentification: ICompanyIndentification;

  constructor(company: ECompanies) {
    this.legalName = COMPANY_LEGAL_NAMES[company];
    this.tradeMark = COMPANY_TRADEMARKS[company];
    this.country = COMPANY_COUNTRY_CODES[company];
    this.entityType = COMPANY_ENTITY_TYPES[company];
    const companyIdType = this.getIdType(company);
    this.typeOfCode =
      companyIdType === 'LEI' ? 'LEI' : `${this.country}_${companyIdType}`;
    this.companyIdentification = CODETYPE_TO_CODEMAP[companyIdType][company];
  }

  private getIdType(company: ECompanies): TCompanyIdentifiers {
    let companyIdType = COMPANY_LEI_CODES[company];
    if (companyIdType) {
      return 'LEI';
    }
    companyIdType = COMPANY_CRN_CODES[company];
    if (companyIdType) {
      return 'CRN';
    }
    throw new Error('No valid identification code type');
  }
}
