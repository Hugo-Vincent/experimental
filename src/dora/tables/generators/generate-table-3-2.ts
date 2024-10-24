import { EntryTable3_2 } from '../entry-template/table-3-2-entry';
import { CRITICAL_CONTRACTS } from '../../classes/contract-instances';

export function generateTable3_2() {
  return CRITICAL_CONTRACTS.map((x) => new EntryTable3_2(x));
}
