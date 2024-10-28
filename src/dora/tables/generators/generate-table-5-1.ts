import { EntryTable5_1 } from '../entry-template/table-5-1-entry';
import { MAIN_DB } from '../../data-getters/main-db';

export function generateTable5_1() {
  return MAIN_DB.company.getCriticalTPSArray().map((x) => new EntryTable5_1(x));
}
