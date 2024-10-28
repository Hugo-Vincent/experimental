import { EntryTable3_2 } from '../entry-template/table-3-2-entry';
import { MAIN_DB } from '../../data-getters/main-db';

export function generateTable3_2() {
  return MAIN_DB.contract.getCriticalContractsArray().map((x) => new EntryTable3_2(x));
}
