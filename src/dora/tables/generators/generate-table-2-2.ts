import { EntryTable2_2 } from '../entry-template/table-2-2-entry';
import { CRITICAL_CONTRACTS_ARRAY } from '../../classes/contract-instances';

export function generateTable2_2() {
  return CRITICAL_CONTRACTS_ARRAY.map((x) => new EntryTable2_2(x));
}
