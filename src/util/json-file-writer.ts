import { FileWriter } from './file-writer';
import { TAny } from './types/generic-types';

export class JsonFileWriter extends FileWriter {
  constructor(basePath?: string) {
    super(basePath);
  }

  write(objectToWrite: TAny, fileName: string, basePath?: string, wipeData = true, preserveKeys = false): void {
    const path = (basePath ?? this.basePath) + fileName + '.json';
    if (wipeData) super.wipeFile(path);
    if (preserveKeys) super.preserveKeys(objectToWrite);
    const json = JSON.stringify(objectToWrite, null, 2) + '\n';
    super.writeToFile(path, json);
  };
}
