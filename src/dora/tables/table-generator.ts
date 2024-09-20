import { generateTable1_1 } from './generators/generate-table-1-1';
import { generateTable1_2 } from './generators/generate-table-1-2';
import { generateTable1_3 } from './generators/generate-table-1-3';
import { generateTable2_1 } from './generators/generate-table-2-1';
import { generateTable2_2 } from './generators/generate-table-2-2';
import { generateTable2_3 } from './generators/generate-table-2-3';
import { generateTable3_1 } from './generators/generate-table-3-1';
import { generateTable3_2 } from './generators/generate-table-3-2';
import { generateTable3_3 } from './generators/generate-table-3-3';
import { generateTable4_1 } from './generators/generate-table-4-1';
import { generateTable5_1 } from './generators/generate-table-5-1';
import { generateTable5_2 } from './generators/generate-table-5-2';
import { generateTable6_1 } from './generators/generate-table-6-1';
import { generateTable7_1 } from './generators/generate-table-7-1';
import { TableEntry } from './entry-template/table-entry';

const tableGeneratorMap = {
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
} as const;
type TTableIndentifier = keyof typeof tableGeneratorMap;

export class TableGenerator {


  generate<K extends TTableIndentifier>(
    identifier: K
  ): ReturnType<typeof tableGeneratorMap[K]> {
    const generator = tableGeneratorMap[identifier];
    return generator() as ReturnType<typeof tableGeneratorMap[K]>;
  }

  generateAll(): { [P in TTableIndentifier]: TableEntry[] } {
    const results = {} as { [P in TTableIndentifier]: TableEntry[] };
    for (const key in tableGeneratorMap) {
      results[key] = tableGeneratorMap[key]();
    }
    return results;
  }
}
