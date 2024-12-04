import { FileWriter } from './file-writer';
import { TAny } from './types/generic-types';

export class TxtFileWriter extends FileWriter {
  constructor(basePath?: string) {
    super(basePath);
  }

  static fromDirectory(directory: string): TxtFileWriter {
    return new TxtFileWriter(`src/${directory}/files`);
  }

  write(objectsToWrite: TAny[], fileName: string,  header: string, wipeOldFile = true, basePath?: string): void {
    const path = (basePath ?? this.basePath) + fileName + '.txt';
    if (wipeOldFile) this.wipeFile(path);
    const objectProperties = Object.keys(objectsToWrite[0]);
    let txt = header + '\n\n';
    for (const key of objectProperties) {
      txt += '================================' + '\n';
      for (const element of objectsToWrite) {
        txt += element[key] + '\n';
      }
      txt += '\n';
    }
    this.writeToFile(path, txt);
  };

  writeArrayAsList(arrayToWrite: TAny[], fileName: string, wipeOldFile = true, basePath?: string) {
    const path = (basePath ?? this.basePath) + fileName + '.txt';
    if (wipeOldFile) this.wipeFile(path);
    let  txt = '';
    for (const element of arrayToWrite) {
      txt += String(element) + '\n';
    }
    this.writeToFile(path, txt);
  }
}
