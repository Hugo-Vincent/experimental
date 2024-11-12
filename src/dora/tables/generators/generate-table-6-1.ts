import { EntryTable6_1 } from '../entry-template/table-6-1-entry';
import { FUNCTION_INSTANCES_ARRAY } from '../../data-classes/instance-data/function-instances';


export function generateTable6_1() {
  return FUNCTION_INSTANCES_ARRAY.map(x => new EntryTable6_1(x))
    .sort((x, y) => x.functionIdenfifier.localeCompare(y.functionIdenfifier, undefined, { numeric: true }));
}
