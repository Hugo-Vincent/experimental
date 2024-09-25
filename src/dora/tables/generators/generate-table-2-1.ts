import { EntryTable2_1 } from '../entry-template/table-2-1.entry';
import { CONTRACT_INSTANCES } from '../../contracts/contract-instances.constants';

export function generateTable2_1() {
  return CONTRACT_INSTANCES.map((x) => new EntryTable2_1(x));
}
