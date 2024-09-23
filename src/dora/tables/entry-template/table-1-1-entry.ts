import { COMPANY_LEI_CODES } from '../../company-data/company-lei-codes.constants';
import { ECompanies } from '../../companies/constants/companies.enum';
import { COMPANY_COUNTRY_CODES } from '../../company-data/company-country-codes.constants';
import { COMPANY_LEGAL_NAMES, TLegalName } from '../../company-data/company-legal-names.constants';
import { Countries } from '../../constant-data/enums/countries.enum';
import { TEntity } from '../../constant-data/entity-types.constants';
import { TableEntry } from './table-entry';
import { COMPANY_ENTITY_TYPES } from '../../company-data/company-entity-types.constants';
import { TDate } from '../../types/general-types';

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
    this.type = COMPANY_ENTITY_TYPES[ECompanies.BLOCKRISE];
    this.competentAuthority = 'AFM';
    this.dateOfReporting = dateOfReporting;
  }
}
