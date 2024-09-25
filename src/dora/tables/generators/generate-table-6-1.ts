import { EntryTable6_1 } from '../entry-template/table-6-1-entry';
import { FUNCTION_INSTANCES } from '../../functions/function-instances.constants';

export function generateTable6_1() {
  return Object.values(FUNCTION_INSTANCES).map((x) => new EntryTable6_1(x));
}
