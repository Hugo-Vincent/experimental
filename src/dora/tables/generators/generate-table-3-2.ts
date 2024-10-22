import { EntryTable3_2 } from '../entry-template/table-3-2-entry';
import { CONTRACT_INSTANCES } from '../../classes/instances';

export function generateTable3_2() {
  return CONTRACT_INSTANCES.map((x) => new EntryTable3_2(x));
}
