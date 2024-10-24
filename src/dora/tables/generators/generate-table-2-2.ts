import { EntryTable2_2 } from '../entry-template/table-2-2-entry';
import { CRITICAL_CONTRACTS } from '../../classes/contract-instances';

export function generateTable2_2() {
  return CRITICAL_CONTRACTS.map((x) => new EntryTable2_2(x));
}
