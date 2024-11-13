import { EntryTable1_1 } from '../entry-template/table-1-1-entry';
import { FIRST_REPORTING_DATE } from '../../common/data-constants';
import { ECompanies } from '../../common/companies.enum';

export function generateTable1_1() {
  return [new EntryTable1_1(ECompanies.BLOCKRISE, FIRST_REPORTING_DATE)];
}
