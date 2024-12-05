import { Day } from './day';

export class Day3 extends Day {
  private regexpr = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;

  constructor() {
    super(3);
  }

  run(): number {
    // 166630675
    const multiplications = this.rawFile.match(this.regexpr);
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
    super.rawFile = 'do()' + super.rawFile;
    const parts = super.rawFile.split('don\'t()');
    const sanitizedTodoMults = parts.map((segment) => {
      const part = segment.split('do()');
      const sanitizedNotTODOPart = part[0]?.match(this.regexpr);
      if (part.length < 2) {
        return undefined;
      }
      let stringValue = '';
      for (let i = 1; i < part.length; i++) {
        stringValue += part[i];
      }
      // The 1st part is what NOT to do cuz it came right after a don't()
      return stringValue.match(this.regexpr);
    }).filter(x => x).flat(1);

    const answers = sanitizedTodoMults.map((x) => {
      const sanitized = x.slice(4, x.length).slice(0, x.length - 5);
      const [l, r] = sanitized.split(',').map((x) => Number(x));
      return l*r;
    });
    return answers.reduce((sum, x) => sum + x, 0);
  }

  protected parse(): any {

  }
}
