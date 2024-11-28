import { EntryTable2_1 } from '../entry-template/table-2-1.entry';
import { MAIN_DB } from '../../data-getters/main-db';

export function generateTable2_1() {
  return MAIN_DB.contract.getNonCriticalContractsArray().map((x) => new EntryTable2_1(x));
}
