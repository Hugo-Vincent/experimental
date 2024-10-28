import { EntryTable2_2 } from '../entry-template/table-2-2-entry';
import { MAIN_DB } from '../../data-getters/main-db';

export function generateTable2_2() {
  return MAIN_DB.contract.getCriticalContractsArray().map((x) => new EntryTable2_2(x));
}
