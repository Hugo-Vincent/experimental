import { TableGenerator } from './tables/table-generator';
import fs from 'fs';
import { TableEntry } from './tables/entry-template/table-entry';

const jsonFilePath = 'src/dora/json-tables/';

export function createJsonFiles(): void {
  const tableGenerator = new TableGenerator();
  const mapOfTables = tableGenerator.generateAll();
 Object.entries(mapOfTables).forEach((x: [string, TableEntry[]]) => {
    writeToFile(x[1].map((y) => y.toJSON()), x[0]);
  })
}


const writeToFile = (objectToWrite: Record<string, any>, tableName: string, wipeData = true): void => {
  const path = jsonFilePath + tableName + '.json';

  // Preserve keys with null values.
  // for (const key in objectToWrite) {
  //   if (!objectToWrite[key]) {
  //     objectToWrite[key] = null;
  //   }
  // }

  const stream = fs.createWriteStream(path, { flags: 'a' });
  stream.write(JSON.stringify(objectToWrite) + '\n');
  stream.end();
};

// const stringifyObject = (object: Record<string,any>): string {
//
// };
