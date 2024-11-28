import { EntryTable7_1 } from '../entry-template/table-7-1-entry';
import { MAIN_DB } from '../../data-getters/main-db';

export function generateTable7_1() {
  return MAIN_DB.contract.getNonCriticalContractsArray().map(x => new EntryTable7_1(x));
}
