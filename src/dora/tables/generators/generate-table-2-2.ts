import { EntryTable2_2 } from '../entry-template/table-2-2-entry';
import { CONTRACT_INSTANCES } from '../../contracts/contract-instances';

export function generateTable2_2() {
  return CONTRACT_INSTANCES.map((x) => new EntryTable2_2(x));
}
