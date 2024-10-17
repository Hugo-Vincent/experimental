import { EntryTable5_1 } from '../entry-template/table-5-1-entry';
import {
  CRITICAL_TPSP_INSTANCES_ARRAY,
} from '../../companies/company-instances.constants';

export function generateTable5_1() {
  return CRITICAL_TPSP_INSTANCES_ARRAY.map((x) => new EntryTable5_1(x));
}
