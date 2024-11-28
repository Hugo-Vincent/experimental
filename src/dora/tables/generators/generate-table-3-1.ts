import { EntryTable3_1 } from '../entry-template/table-3-1-entry';
import { MAIN_DB } from '../../data-getters/main-db';

export function generateTable3_1() {
  return MAIN_DB.contract.getNonCriticalContractsArray().map(x => new EntryTable3_1(x));
}
