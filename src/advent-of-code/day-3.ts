import { Day } from './day';
import { TxtFileWriter } from '../util/txt-file-writer';
import { DIRECTORY } from './constants';

const expressionChars = ['m','u','l','(',')', ','].reduce((result, x) => {
  result[x] = true;
  return result;
}, {});
const numberChars = [0,1,2,3,4,5,6,7,8,9].reduce((result, x) => {
  result[x] = true;
  return result;
}, {});
const allowedChars = {
  ...expressionChars,
  ...numberChars,
};

export class Day3 extends Day {
  private regexpr = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;

  constructor() {
    super(3);
  }

  run(): number {
    // 166630675
    const rawFile = this.load();
    const sanitizedString = this.parse(rawFile);
    const multiplications = sanitizedString.match(this.regexpr);
    console.log(multiplications);
    const fileWriter = TxtFileWriter.fromDirectory(DIRECTORY);
    fileWriter.writeArrayAsList(multiplications, 'local2');
    const answers = multiplications.map((x) => {
      const sanitized = x.slice(4, x.length).slice(0, x.length - 5);
      const [l, r] = sanitized.split(',').map((x) => Number(x));
      return l*r;
    });
    return answers.reduce((sum, x) => sum + x, 0);
  }

  protected parse(rawFile: string): string {
    let sanitizedString = '';
    for (const char of rawFile) {
      if (char in allowedChars) {
        sanitizedString += char;
      }
    }
    return sanitizedString;
  }
}
