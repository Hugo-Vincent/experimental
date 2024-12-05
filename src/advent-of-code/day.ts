import { TxtFileWriter } from '../util/txt-file-writer';
import { DIRECTORY } from './constants';

export abstract class Day {
  protected rawFile: string;

  protected constructor(fileID: number) {
    const txtWriter = TxtFileWriter.fromDirectory(DIRECTORY);
    this.rawFile = txtWriter.readFile(`day-${fileID}.txt`)
  }

  protected abstract parse(): any;

  abstract run(): void;
}
