import { EntryTable5_2 } from '../entry-template/table-5-2-entry';
import { MAIN_DB } from '../../data-getters/main-db';

export function generateTable5_2() {
  return MAIN_DB.company.getCriticalTPSArray().map((x) => new EntryTable5_2(x));
}
