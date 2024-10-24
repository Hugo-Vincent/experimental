import { COMPANY_LEI_CODES } from '../../company-data/company-lei-codes.constants';
import { ECompanies } from '../../common/companies.enum';
import { COMPANY_COUNTRY_CODES } from '../../company-data/company-country-codes.constants';
import { COMPANY_LEGAL_NAMES, TLegalName } from '../../company-data/company-legal-names.constants';
import { Countries } from '../../common/countries.enum';
import { ENTITY_TYPES, TEntity } from '../../closed-options/entity-types.constants';
import { TableEntry } from './table-entry';
import { COMPANY_ENTITY_TYPE_KEYS } from '../../company-data/company-entity-type-keys.constants';
import { TDate } from '../../common/general-types';

/**
 * REPORTING ENTITY (BLOCKRISE)
 */
export class EntryTable1_1 extends TableEntry {
  lei: string;
  legalName: TLegalName;
  country: Countries;
  type: TEntity;
  competentAuthority: string;
  dateOfReporting: TDate;

  constructor(dateOfReporting: TDate) {
    super(1, 1);
    this.lei = COMPANY_LEI_CODES[ECompanies.BLOCKRISE].code;
    this.legalName = COMPANY_LEGAL_NAMES[ECompanies.BLOCKRISE];
    this.country = COMPANY_COUNTRY_CODES[ECompanies.BLOCKRISE];
    this.type = ENTITY_TYPES[COMPANY_ENTITY_TYPE_KEYS[ECompanies.BLOCKRISE]];
    this.competentAuthority = 'AFM';
    this.dateOfReporting = dateOfReporting;
  }
}
