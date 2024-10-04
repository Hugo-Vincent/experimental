import { TAny } from '../dora/general/general-types';
import { FileWriter } from './file-writer';

export class TxtFileWriter extends FileWriter {
  constructor(basePath?: string) {
    super(basePath);
  }

  write(objectsToWrite: TAny[], fileName: string, basePath?: string, wipeOldFile = true): void {
    const path = (basePath ?? this.basePath) + fileName + '.txt';
    if (wipeOldFile) this.wipeFile(path);
    const objectProperties = Object.keys(objectsToWrite[0]);
    let txt = '';
    for (const key of objectProperties) {
      for (const element of objectsToWrite) {
        txt += element[key];
        txt += '\n';
      }
      txt += '\n';
    }
    this.writeToFile(path, txt);
  };
}
