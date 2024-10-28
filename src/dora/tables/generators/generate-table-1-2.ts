import { ECompanies } from '../../common/companies.enum';
import { FIRST_REPORTING_DATE } from '../../common/data-constants';
import { EntryTable1_2 } from '../entry-template/table-1-2-entry';
import { MAIN_DB } from '../../data-getters/main-db';

export function generateTable1_2(): EntryTable1_2[] {
  return [
    new EntryTable1_2(MAIN_DB.company.getCompany(ECompanies.BLOCKRISE), FIRST_REPORTING_DATE, FIRST_REPORTING_DATE),
    new EntryTable1_2(MAIN_DB.company.getCompany(ECompanies.STICHTING_BLOCKRISE), FIRST_REPORTING_DATE, FIRST_REPORTING_DATE),
  ];
}
