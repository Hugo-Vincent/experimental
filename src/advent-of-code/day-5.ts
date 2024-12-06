import { Day } from './day';

export class Day5 extends Day {
  constructor() {
    super(5);
  }

  protected parse(): { rulesMap: Record<number, number[]>, updates: number[][] } {
    const fileLines = this.rawFile.split('\n');
    const fileDelimiter = fileLines.findIndex((x) => x === '');
    const rules = fileLines.slice(0, fileDelimiter);
    const updates = fileLines.slice(fileDelimiter, fileLines.length);
    const rulesMap = this.createRulesMap(rules);
    const updateNumbers = updates.map(x => x.split(',').map(y => Number(y)));
    return { rulesMap, updates: updateNumbers };
  }


  run(invalidUpdatesArr?: number[][]): number {
    const { rulesMap, updates } = this.parse();

    let sum = 0;
    for (const update of updates) {
      let validUpdate = true;
      for (let i = 0; i < update.length; i++) {
        const currentNumber = update[i];
        if (!rulesMap[currentNumber]) continue;

        for (const ruleNum of rulesMap[currentNumber]) {
          if (update.includes(ruleNum)) {
            const index = update.findIndex((x) => x === ruleNum);
            if (index < i) {
              validUpdate = false;
            }
          }
        }
        if (!validUpdate) {
          break;
        }
      }

      if (validUpdate) {
        const middleIndex = Math.floor(update.length / 2);
        sum += update[middleIndex];
      } else {
        if (invalidUpdatesArr) {
          invalidUpdatesArr.push(update);
        }
      }
    }
    console.log(invalidUpdatesArr);
    return sum;
  }

  runTwo() {
    const { rulesMap, updates } = this.parse();
    const invalidUpdatesArray = [];
    // Fill invalidUpdatesArray by reference
    this.run(invalidUpdatesArray);

    // Fix all updates by reference
    for (const update of invalidUpdatesArray) {
      for (let i = update.length - 1; i > 0; i--) {
        console.log(i);
        const currentNumber = update[i];
        if (!rulesMap[currentNumber]) continue;
        let fixedNumber = true;
        while(fixedNumber) {
          fixedNumber = this.fixOneUpdateNumber(update, i, currentNumber, rulesMap);
        }
      }
    }

    // With the fixed updates array, count all the middle numbers.
    let sum = 0;
    for (const update of invalidUpdatesArray) {
      const middleIndex = Math.floor(update.length / 2);
      sum += update[middleIndex];
    }
    return sum;
  }

  private fixOneUpdateNumber(update: number[], i: number, currentNumber: number, rulesMap: Record<number, number[]>) {
    let fixedSomething = false;
    for (const ruleNum of rulesMap[currentNumber]) {
      if (update.includes(ruleNum)) {
        let ruleNumIndex = update.findIndex((x) => x === ruleNum);
        while (ruleNumIndex < i) {
          const tempRight = update[ruleNumIndex + 1];
          const tempLeft = update[ruleNumIndex];
          update[ruleNumIndex + 1] = tempLeft;
          update[ruleNumIndex] = tempRight;
          ruleNumIndex++;
          fixedSomething = true;
        }
      }
    }
    return fixedSomething;
  }

  private createRulesMap(rules: string[]): Record<number, number[]> {
    const map: Record<number, number[]> = {};
    for (const rule of rules) {
      const [l,r] = rule.split('|').map(x => Number(x));
      map[l]?.push(r) ?? (map[l] = [r]);
    }
    return map;
  }
}
