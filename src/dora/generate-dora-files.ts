import { TableGenerator } from './tables/table-generator';
import { JsonFileWriter } from '../util/json-file-writer';
import { TxtFileWriter } from '../util/txt-file-writer';

const jsonFilePath = 'src/dora/output/json-tables/';
const txtFilePath = 'src/dora/output/text-tables/';

export function createJsonFiles(): void {
  const mapOfTables = new TableGenerator().generateAll();
  const jsonWriter = new JsonFileWriter(jsonFilePath);
  Object.entries(mapOfTables).forEach(([key, tableEntries]) => {
    jsonWriter.write(tableEntries.map((y) => y.toJSONFormat()), key);
  });
}

export function createTxtFiles(): void {
  const mapOfTables = new TableGenerator().generateAll();
  const txtWriter = new TxtFileWriter(txtFilePath);
  Object.entries(mapOfTables).forEach(([key, tableEntries]) => {
    txtWriter.write(tableEntries.map((y) => y.toJSONFormat()), key);
  });
}
