import { TableGenerator } from './tables/table-generator';
import fs from 'fs';
import { TableEntry } from './tables/entry-template/table-entry';
import { TJson } from './types/general-types';

const jsonFilePath = 'src/dora/output/json-tables/';
const txtFilePath = 'src/dora/output/text-tables/';

export function createJsonFiles(): void {
  const mapOfTables = new TableGenerator().generateAll();
  console.log(mapOfTables);
 // Object.entries(mapOfTables).forEach((x: [string, TableEntry[]]) => {
 //   fileWriter.writeJsonToFile(x[1].map((y) => y.toJSON()), x[0]);
 //  });
  const fileWriter = new FileWriter();
  Object.entries(mapOfTables).forEach((x: [string, TableEntry[]]) => {
    fileWriter.writeTxtToFile(x[1].map((y) => y.toJSON()), x[0]);
  });
}

export class FileWriter {
  textFilePath: `${string}/`;

  writeJsonToFile(objectToWrite: Record<string, any>, fileName: string, wipeData = true): void {
    const path = jsonFilePath + fileName + '.json';
    if (wipeData) this.wipeFile(path);
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


  writeTxtToFile(objectsToWrite: TJson[], fileName: string, wipeData = true): void {
    const path = txtFilePath + fileName + '.txt';
    if (wipeData) this.wipeFile(path);

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

  wipeFile = (path: string) => {
    fs.writeFileSync(path, '');
  };
}