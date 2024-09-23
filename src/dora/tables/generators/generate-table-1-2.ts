import { ECompanies } from '../../companies/constants/companies.enum';
import { DELETION_DATE_PLACEHOLDER, FIRST_REPORTING_DATE } from '../constants/data-constants';
import { EntryTable1_2 } from '../entry-template/table-1-2-entry';
import { COMPANY_INSTANCES } from '../../companies/company-instances.constants';

export function generateTable1_2(): EntryTable1_2[] {
  return [
    new EntryTable1_2(COMPANY_INSTANCES[ECompanies.BLOCKRISE], FIRST_REPORTING_DATE, FIRST_REPORTING_DATE, DELETION_DATE_PLACEHOLDER),
    new EntryTable1_2(COMPANY_INSTANCES[ECompanies.STICHTING_BLOCKRISE], FIRST_REPORTING_DATE, FIRST_REPORTING_DATE, DELETION_DATE_PLACEHOLDER),
  ];
}
