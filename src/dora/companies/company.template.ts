import { ICompanyInfo } from './interfaces/company.interface';
import { TCodeType, TCompanyIdentifiers } from '../types/general-types';
import { ICompanyIndentification } from './interfaces/company-id.interface';
import { COMPANY_LEGAL_NAMES, TLegalName } from '../company-data/company-legal-names.constants';
import { COMPANY_TRADEMARKS } from '../company-data/company-trade-mark-names.constants';
import { COMPANY_COUNTRY_CODES } from '../company-data/company-country-codes.constants';
import { CODETYPE_TO_CODEMAP } from '../constant-data/mappings.constants';
import { ECompanies } from './constants/companies.enum';
import { COMPANY_LEI_CODES } from '../company-data/company-lei-codes.constants';
import { COMPANY_CRN_CODES } from '../company-data/company-registration-numbers.constants';
import { Countries } from '../constant-data/enums/countries.enum';
import { ENTITY_TYPES, TEntity } from '../constant-data/entity-types.constants';
import { COMPANY_ENTITY_TYPE_KEYS } from '../company-data/company-entity-types.constants';
import { Nullable, Optional } from '../../types/types';
import { HIERARCHY_TYPES, THierarchy } from '../constant-data/hierarchy-types.constants';
import { COMPANY_HIERARCHY_TYPE_KEYS } from '../company-data/company-hierarchy-type-keys.constants';
import { TCriticalTPSP, TNonCriticalTPSP } from './constants/third-party-service-providers.constants';
import { Contract } from '../contracts/contract';

interface ICompanyOptions {
  parent?: Optional<{
    lei?: string;
    crn?: string;
    name: string;
  }>;
  totalAssetValue?: Optional<number>;
}

export class Company implements ICompanyInfo {
  legalName: TLegalName;
  tradeMark: string;
  country: Countries;
  entityType: TEntity;
  typeOfCode: TCodeType;
  companyIdentification: ICompanyIndentification;
  hierarchy: THierarchy;

  parent?: Company;
  parentLei: Nullable<string>;
  parentCrn: Nullable<string>;
  totalAssetValue: Nullable<number>;

  contract: Contract;


  constructor(
    company: ECompanies | TCriticalTPSP | TNonCriticalTPSP,
    options: Nullable<ICompanyOptions> = null,
  ) {
    this.legalName = COMPANY_LEGAL_NAMES[company];
    this.tradeMark = COMPANY_TRADEMARKS[company];
    this.country = COMPANY_COUNTRY_CODES[company];
    this.entityType = ENTITY_TYPES[COMPANY_ENTITY_TYPE_KEYS[company]];
    const companyIdType = this.getIdType(company);
    this.typeOfCode =
      companyIdType === 'LEI' ? 'LEI' : `${this.country}_${companyIdType}`;
    this.companyIdentification = CODETYPE_TO_CODEMAP[companyIdType][company];
    this.hierarchy = HIERARCHY_TYPES[COMPANY_HIERARCHY_TYPE_KEYS[company]];

    this.parentLei = options?.parent?.lei ?? null;
    this.parentCrn = options?.parent?.crn ?? null;
    this.totalAssetValue = options?.totalAssetValue ?? null;
  }

  private getIdType(company: ECompanies | TCriticalTPSP | TNonCriticalTPSP): TCompanyIdentifiers {
    if (COMPANY_LEI_CODES[company]) {
      return 'LEI';
    }
    if (COMPANY_CRN_CODES[company]) {
      return 'CRN';
    }
    throw new Error('No valid identification code type');
  }
}
