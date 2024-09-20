import { EntryTable1_1 } from '../entry-template/table-1-1-entry';
import { FIRST_REPORTING_DATE } from '../constants/data-constants';

export function generateTable1_1() {
  return [new EntryTable1_1(FIRST_REPORTING_DATE)];
}
