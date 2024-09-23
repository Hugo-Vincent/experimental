import { TableGenerator } from './tables/table-generator';
import fs from 'fs';
import { TableEntry } from './tables/entry-template/table-entry';
import { TJson } from './types/general-types';

const jsonFilePath = 'src/dora/json-tables/';
const txtFilePath = 'src/dora/text-tables/';

export function createJsonFiles(): void {
  const tableGenerator = new TableGenerator();
  const mapOfTables = tableGenerator.generateAll();

 // Object.entries(mapOfTables).forEach((x: [string, TableEntry[]]) => {
 //   writeJsonToFile(x[1].map((y) => y.toJSON()), x[0]);
 //  });

  Object.entries(mapOfTables).forEach((x: [string, TableEntry[]]) => {
    writeTxtToFile(x[1].map((y) => y.toJSON()), x[0]);
  });
}


const writeJsonToFile = (objectToWrite: Record<string, any>, tableName: string, wipeData = true): void => {
  const path = jsonFilePath + tableName + '.json';
  if (wipeData) {
    wipeFile(path);
  }
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


const writeTxtToFile = (objectsToWrite: TJson[], tableName: string, wipeData = true): void => {
  const path = txtFilePath + tableName + '.txt';
  if (wipeData) {
    wipeFile(path);
  }

  const stream = fs.createWriteStream(path, { flags: 'a' });
  const exampleEntry = objectsToWrite[0];
  const keys = Object.keys(exampleEntry);
  let txt = '';
  for (const key of keys) {
    for (const element of objectsToWrite) {
      txt += element[key];
      txt += '\n';
    }
    txt += '\n';
  }
  stream.write(txt);
  stream.end();
};

const wipeFile = (path: string) => {
  fs.writeFileSync(path, '');
};
