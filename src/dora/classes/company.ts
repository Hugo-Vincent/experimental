import { TCodeType, TCompanyIdentifiers } from '../common/general-types';
import { ICompanyIndentification } from '../common/interfaces/company-id.interface';
import { COMPANY_LEGAL_NAMES, TLegalName } from '../data-classes/company-data/company-legal-names.constants';
import { COMPANY_TRADEMARKS } from '../data-classes/company-data/company-trade-mark-names.constants';
import { COMPANY_COUNTRY_CODES } from '../data-classes/company-data/company-country-codes.constants';
import { CODETYPE_TO_CODEMAP } from '../common/mapping/mappings.constants';
import { ECompanies } from '../common/companies.enum';
import { COMPANY_LEI_CODES } from '../data-classes/company-data/company-lei-codes.constants';
import { COMPANY_CRN_CODES } from '../data-classes/company-data/company-registration-numbers.constants';
import { Countries } from '../common/countries.enum';
import { TEntity } from '../data-classes/closed-options/entity-types.constants';
import { COMPANY_ENTITY_TYPES } from '../data-classes/company-data/company-entity-type-keys.constants';
import { Nullable, Optional } from '../../types/types';
import { HIERARCHY_TYPES, THierarchy } from '../data-classes/closed-options/hierarchy-types.constants';
import { COMPANY_HIERARCHY_TYPE_KEYS } from '../data-classes/company-data/company-hierarchy-type-keys.constants';
import { ALL_COMPANY_INSTANCES, TCriticalTPSP, TNonCriticalTPSP } from '../data-classes/instance-data/company-instances';
import { Contract } from './contract';
import { COMPANY_PARENT_UNDERTAKINGS } from '../data-classes/company-data/company-parent-undertakings.constants';
import { TPersonTPSP, TPSP_PERSON_TYPE } from '../data-classes/closed-options/person-type.constants';
import { COMPANY_VAT_NUMBERS } from '../data-classes/company-data/company-vat-numbers.constants';

interface ICompanyOptions {
  parent?: Optional<{
    lei?: string;
    crn?: string;
    name: string;
  }>;
  totalAssetValue?: Optional<number>;
}

export class Company {
  // ID and references
  id: ECompanies;
  contract: Contract;

  // Data
  legalName: TLegalName;
  tradeMark: string;
  country: Countries;
  entityType: TEntity;
  companyIdentification: ICompanyIndentification & { typeOfCode: TCodeType };
  hierarchy: THierarchy;
  parentID?: ECompanies;
  totalAssetValue: Nullable<number>;
  typeOfPerson: TPersonTPSP;

  constructor(
    company: ECompanies | TCriticalTPSP | TNonCriticalTPSP,
    options: Nullable<ICompanyOptions> = null,
  ) {
    this.id = company;

    this.legalName = COMPANY_LEGAL_NAMES[company];
    this.tradeMark = COMPANY_TRADEMARKS[company];
    this.country = COMPANY_COUNTRY_CODES[company];
    this.entityType = COMPANY_ENTITY_TYPES[company];

    const companyIdType = this.getIdType(company);
    const typeOfCode: TCodeType = companyIdType === 'LEI' ? 'LEI' : `${this.country}_${companyIdType}`;
    this.companyIdentification = { ...CODETYPE_TO_CODEMAP[companyIdType][company], typeOfCode };
    this.hierarchy = HIERARCHY_TYPES[COMPANY_HIERARCHY_TYPE_KEYS[company]];
    this.parentID = COMPANY_PARENT_UNDERTAKINGS[company];
    this.totalAssetValue = options?.totalAssetValue ?? null;
    this.typeOfPerson = TPSP_PERSON_TYPE[1];
  }

  private getIdType(company: ECompanies | TCriticalTPSP | TNonCriticalTPSP): TCompanyIdentifiers {
    if (COMPANY_LEI_CODES[company]) {
      return 'LEI';
    }
    if (COMPANY_CRN_CODES[company]) {
      return 'CRN';
    }
    if (COMPANY_VAT_NUMBERS[company]) {
      return 'VAT';
    }
    throw new Error('No valid identification code type');
  }

  get parent(): Nullable<Company> {
    return ALL_COMPANY_INSTANCES[this.parentID] ?? null;
  }
}
