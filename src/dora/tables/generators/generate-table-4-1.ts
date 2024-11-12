import { EntryTable4_1 } from '../entry-template/table-4-1-entry';
import { MAIN_DB } from '../../data-getters/main-db';
import { BRANCH_TYPES } from '../../data-classes/closed-options/branch-types';

export function generateTable4_1(): EntryTable4_1[] {
  return MAIN_DB.contract.getCriticalContractsArray().map((x) => new EntryTable4_1(x.id, x.financialEntityLei, BRANCH_TYPES[2]));
}
