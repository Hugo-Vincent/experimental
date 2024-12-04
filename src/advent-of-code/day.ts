import { TxtFileWriter } from '../util/txt-file-writer';
import { DIRECTORY } from './constants';

export abstract class Day {
  protected fileName: string;

  protected constructor(fileID: number) {
    this.fileName = `day-${fileID}.txt`
  }

  protected load(): string {
    const txtWriter = TxtFileWriter.fromDirectory(DIRECTORY);
    return txtWriter.readFile(this.fileName);
  }

  protected abstract parse(rawFile: string): any;
  protected abstract run(): void;
}
