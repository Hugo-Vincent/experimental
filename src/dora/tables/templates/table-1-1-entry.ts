import { COMPANY_LEI_CODES } from '../../companies/constants/company-data/lei-codes.constants';
import { ECompanies } from '../../companies/enums/companies.enum';
import { COMPANY_COUNTRY_CODES } from '../../constants/country-codes.constants';
import { COMPANY_LEGAL_NAMES, TLegalName } from '../../companies/constants/company-data/legal-names.constants';
import { Countries } from '../../companies/enums/countries.enum';
import { TEntityType } from '../../constants/entity-types.constants';
import { Table } from './table';
import { COMPANY_ENTITY_TYPES } from '../../companies/constants/company-data/company-entity-types.constants';
import { TDate } from '../../types/general-types';

/**
 * REPORTING ENTITY (BLOCKRISE)
 */
export class EntryTable1_1 extends Table {
  lei: string;
  legalName: TLegalName;
  country: Countries;
  type: TEntityType;
  competentAuthority: string;
  dateOfReporting: TDate;

  constructor(dateOfReporting: TDate) {
    super(1, 1);
    this.lei = COMPANY_LEI_CODES[ECompanies.BLOCKRISE].code;
    this.legalName = COMPANY_LEGAL_NAMES[ECompanies.BLOCKRISE];
    this.country = COMPANY_COUNTRY_CODES[ECompanies.BLOCKRISE];
    this.type = COMPANY_ENTITY_TYPES[ECompanies.BLOCKRISE];
    this.competentAuthority = '?';
    this.dateOfReporting = dateOfReporting;
  }
}
