import { TCodeType, TCompanyIdentifiers } from '../common/general-types';
import { ICompanyIndentification } from '../interfaces/company-id.interface';
import { COMPANY_LEGAL_NAMES, TLegalName } from '../company-data/company-legal-names.constants';
import { COMPANY_TRADEMARKS } from '../company-data/company-trade-mark-names.constants';
import { COMPANY_COUNTRY_CODES } from '../company-data/company-country-codes.constants';
import { CODETYPE_TO_CODEMAP } from '../common/mappings.constants';
import { ECompanies } from '../common/companies.enum';
import { COMPANY_LEI_CODES } from '../company-data/company-lei-codes.constants';
import { COMPANY_CRN_CODES } from '../company-data/company-registration-numbers.constants';
import { Countries } from '../common/countries.enum';
import { ENTITY_TYPES, TEntity } from '../closed-options/entity-types.constants';
import { COMPANY_ENTITY_TYPE_KEYS } from '../company-data/company-entity-type-keys.constants';
import { Nullable, Optional } from '../../types/types';
import { HIERARCHY_TYPES, THierarchy } from '../closed-options/hierarchy-types.constants';
import { COMPANY_HIERARCHY_TYPE_KEYS } from '../company-data/company-hierarchy-type-keys.constants';
import { TCriticalTPSP, TNonCriticalTPSP } from './tpsp-instances';
import { Contract } from './contract';
import { ENTITY_ACTIVITIES, TEntityActivity } from '../closed-options/entity-activities.constants';
import { COMPANY_PARENT_UNDERTAKINGS } from '../company-data/company-parent-undertakings.constants';
import { TPersonTPSP, TPSP_PERSON_TYPE } from '../closed-options/person-type.constants';
import { ALL_COMPANY_INSTANCES } from './instances';

interface ICompanyOptions {
  parent?: Optional<{
    lei?: string;
    crn?: string;
    name: string;
  }>;
  totalAssetValue?: Optional<number>;
}

export class Company {
  legalName: TLegalName;
  tradeMark: string;
  country: Countries;

  entityType: TEntity;
  entityActivity: TEntityActivity;

  companyIdentification: ICompanyIndentification & { typeOfCode: TCodeType };
  hierarchy: THierarchy;

  parentID?: ECompanies;
  totalAssetValue: Nullable<number>;
  typeOfPerson: TPersonTPSP;
  contract: Contract;


  constructor(
    company: ECompanies | TCriticalTPSP | TNonCriticalTPSP,
    options: Nullable<ICompanyOptions> = null,
  ) {
    this.legalName = COMPANY_LEGAL_NAMES[company];
    this.tradeMark = COMPANY_TRADEMARKS[company];
    this.country = COMPANY_COUNTRY_CODES[company];

    const entityTypeKey = COMPANY_ENTITY_TYPE_KEYS[company];
    this.entityType = ENTITY_TYPES[entityTypeKey];
    this.entityActivity = ENTITY_ACTIVITIES[entityTypeKey];

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
    throw new Error('No valid identification code type');
  }

  get parent(): Nullable<Company> {
    return ALL_COMPANY_INSTANCES[this.parentID] ?? null;
  }
}
