import { COMPANY_LEI_CODES } from '../../data-classes/company-data/company-lei-codes.constants';
import { ECompanies } from '../../common/companies.enum';
import { COMPANY_COUNTRY_CODES } from '../../data-classes/company-data/company-country-codes.constants';
import { COMPANY_LEGAL_NAMES, TLegalName } from '../../data-classes/company-data/company-legal-names.constants';
import { Countries } from '../../common/countries.enum';
import { TEntity } from '../../data-classes/closed-options/entity-types.constants';
import { TableEntry } from './table-entry';
import { COMPANY_ENTITY_TYPES } from '../../data-classes/company-data/company-entity-type-keys.constants';
import { TDate } from '../../common/general-types';
import { ICompanyIndentification } from '../../common/interfaces/company-id.interface';

/**
 * REPORTING ENTITY (BLOCKRISE)
 */
export class EntryTable1_1 extends TableEntry {
  lei: ICompanyIndentification['code'];
  legalName: TLegalName;
  country: Countries;
  type: TEntity;
  competentAuthority: string;
  dateOfReporting: TDate;

  constructor(financialEntity: ECompanies.BLOCKRISE, dateOfReporting: TDate) {
    super(1, 1);
    this.lei = COMPANY_LEI_CODES[financialEntity].code;
    this.legalName = COMPANY_LEGAL_NAMES[financialEntity];
    this.country = COMPANY_COUNTRY_CODES[financialEntity];
    this.type = COMPANY_ENTITY_TYPES[financialEntity];
    this.competentAuthority = 'AFM';
    this.dateOfReporting = dateOfReporting;
  }
}
