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


export class Day3 extends Day {
  private regexpr = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;

  constructor() {
    super(3);
  }

  run(): number {
    // 166630675
    const rawFile = this.load();
    const multiplications = rawFile.match(this.regexpr);
    // const fileWriter = TxtFileWriter.fromDirectory(DIRECTORY);
    // fileWriter.writeArrayAsList(multiplications, 'local2');
    const answers = multiplications.map((x) => {
      const sanitized = x.slice(4, x.length).slice(0, x.length - 5);
      const [l, r] = sanitized.split(',').map((x) => Number(x));
      return l*r;
    });
    return answers.reduce((sum, x) => sum + x, 0);
  }

  runTwo(): number {
    let rawFile = this.load();
    rawFile = 'do()' + rawFile;
    const parts = rawFile.split('don\'t()');
    const sanitizedTodoMults = parts.map((segment) => {
      const part = segment.split('do()');
      console.log(part);
      const sanitizedNotTODOPart = part[0]?.match(this.regexpr);
      if (part.length < 2) {
        return [''];
      }
      for (let i = 0; i < part.length; i++) {

      }

      const sanitizedTODOPart = part[1]?.match(this.regexpr);
      // The 2nd part is what to DO cuz it got split after a do()
      // The 1st part is what NOT to do cuz it came right after a don't()
      return sanitizedTODOPart;
    }).filter(x => x).flat(1);

    const answers = sanitizedTodoMults.map((x) => {
      const sanitized = x.slice(4, x.length).slice(0, x.length - 5);
      const [l, r] = sanitized.split(',').map((x) => Number(x));
      return l*r;
    });
    return answers.reduce((sum, x) => sum + x, 0);
  }

  protected parse(rawFile: string): any {
  }
}
