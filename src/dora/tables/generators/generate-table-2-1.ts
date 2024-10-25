import { EntryTable2_1 } from '../entry-template/table-2-1.entry';
import { CRITICAL_CONTRACTS_ARRAY } from '../../classes/contract-instances';

export function generateTable2_1() {
  return CRITICAL_CONTRACTS_ARRAY.map((x) => new EntryTable2_1(x));
}
