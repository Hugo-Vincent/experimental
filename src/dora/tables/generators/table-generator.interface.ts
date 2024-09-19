import { EntryTable1_1 } from '../templates/table-1-1-entry';
import { EntryTable1_2 } from '../templates/table-1-2-entry';
import { EntryTable1_3 } from '../templates/table-1-3-entry';

export interface ITableGenerator {
  generateTable1_1(): EntryTable1_1[];
  generateTable1_2(): EntryTable1_2[];
  generateTable1_3(): EntryTable1_3[];
  generateTable2_1(): EntryTable1_1[];
  generateTable2_2(): EntryTable1_1[];
  generateTable2_3(): EntryTable1_1[];
  generateTable3_1(): EntryTable1_1[];
  generateTable3_2(): EntryTable1_1[];
  generateTable3_3(): EntryTable1_1[];
  generateTable4_1(): EntryTable1_1[];
  generateTable5_1(): EntryTable1_1[];
  generateTable5_2(): EntryTable1_1[];
  generateTable6_1(): EntryTable1_1[];
  generateTable7_1(): EntryTable1_1[];
}
