import { EntryTable5_2 } from '../entry-template/table-5-2-entry';
import { CRITICAL_TPSP_INSTANCES } from '../../companies/company-instances.constants';

export function generateTable5_2() {
  return Object.values(CRITICAL_TPSP_INSTANCES).map((x) => new EntryTable5_2(x));
}
