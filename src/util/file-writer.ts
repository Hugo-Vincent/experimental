import * as fs from 'fs';
import { Util } from './util';
import { TAny } from './types/generic-types';

export abstract class FileWriter {
  basePath: `${string}/`;

  protected constructor(basePath?: string) {
    if (basePath) {
      this.basePath = `${basePath}/`;
    } else {
      this.basePath = 'src/written-files/';
    }
  }

  protected writeToFile(path: string, content: string) {
    const stream = fs.createWriteStream(path, { flags: 'a' });
    stream.write(content);
    stream.end();
  }

  protected preserveKeys(object: TAny): void {
    if (!Util.isObject(object)) {
      return;
    }
    for (const key in object) {
      if (!object[key]) {
        object[key] = null;
      }
    }
  }

  wipeFile (path: string): void {
    fs.writeFileSync(path, '');
  };
}
