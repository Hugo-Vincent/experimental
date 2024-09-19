import { ITableGenerator } from './table-generator.interface';
import { generateTable1_1 } from './generate-table-1-1';
import { generateTable1_2 } from './generate-table-1-2';
import { generateTable1_3 } from './generate-table-1-3';
import { TTableIds } from '../constants/types/table-types';
import { Table } from '../templates/table';

export class TableGenerator implements ITableGenerator {
  private tableGeneratorMap: Record<TTableIds, () => Table[]> = {
    ['1-1']: generateTable1_1,
    ['1-2']: generateTable1_2,
    ['1-3']: generateTable1_3,
    ['2-1']: generateTable2_1,
    ['2-2']: generateTable2_2,
    ['2-3']: generateTable2_3,
    ['3-1']: generateTable3_1,
    ['3-2']: generateTable3_2,
    ['3-3']: generateTable3_3,
    ['4-1']: generateTable4_1,
    ['5-1']: generateTable5_1,
    ['5-2']: generateTable5_2,
    ['6-1']: generateTable6_1,
    ['7-1']: generateTable7_1,
  };

  generateTable(identifier: TTableIds): any {

  }
}
