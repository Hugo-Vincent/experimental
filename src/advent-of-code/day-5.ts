import { Day } from './day';

export class Day5 extends Day {
  constructor() {
    super(5);
  }

  protected parse(): { rules: string[], updates: string[] } {
    const fileLines = this.rawFile.split('\n');
    const fileDelimiter = fileLines.findIndex((x) => x === '');
    const rules = fileLines.slice(0, fileDelimiter);
    const updates = fileLines.slice(fileDelimiter, fileLines.length);
    return { rules, updates };
  }

  run(): number {
    const { rules, updates } = this.parse();
    return 0;
  }

  createRulesMap(rules: string[]): Record<string, string[]> {
    for (const rule of rules) {
      const [l,r] = rule.split('|').map(x => Number(x));

    }
    const map: Record<string, string[]> = {};
    rules.forEach(rule => )
  }

}