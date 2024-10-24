import { ECompanies } from '../../common/companies.enum';
import { FIRST_REPORTING_DATE } from '../../common/data-constants';
import { EntryTable1_2 } from '../entry-template/table-1-2-entry';
import { ALL_COMPANY_INSTANCES } from '../../classes/company-instances';

export function generateTable1_2(): EntryTable1_2[] {
  return [
    new EntryTable1_2(ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE], FIRST_REPORTING_DATE, FIRST_REPORTING_DATE),
    new EntryTable1_2(ALL_COMPANY_INSTANCES[ECompanies.STICHTING_BLOCKRISE], FIRST_REPORTING_DATE, FIRST_REPORTING_DATE),
  ];
}
