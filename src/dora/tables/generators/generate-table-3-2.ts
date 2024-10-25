import { EntryTable3_2 } from '../entry-template/table-3-2-entry';
import { CRITICAL_CONTRACTS_ARRAY } from '../../classes/contract-instances';

export function generateTable3_2() {
  return CRITICAL_CONTRACTS_ARRAY.map((x) => new EntryTable3_2(x));
}
