import { EntryTable6_1 } from '../entry-template/table-6-1-entry';
import { Util } from '../../../util/util';
import { MAIN_DB } from '../../data-getters/main-db';


export function generateTable6_1() {
  const allFunctionsOfCriticalParties = MAIN_DB.company.getCriticalTPSArray().map(x => x.functions).flat();
  return Util.filterUniqueElements(allFunctionsOfCriticalParties).map(x => new EntryTable6_1(x));
}
