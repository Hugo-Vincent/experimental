import { EntryTable2_1 } from '../entry-template/table-2-1.entry';
import { CRITICAL_CONTRACTS } from '../../classes/contract-instances';

export function generateTable2_1() {
  return CRITICAL_CONTRACTS.map((x) => new EntryTable2_1(x));
}
