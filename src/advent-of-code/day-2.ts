import { Day } from './day';

export class Day2 extends Day {
  constructor() {
    super(2);
  }

  parse(): number[][] {
    const lines = this.rawFile.split('\n');
    return lines.map(x => x.split(' ').map(x => Number(x)));
  }

  run(): number {
    const input = this.parse();
    let safeCount = 0;
    for (const report of input) {
      const permutations = this.createReportPermutations(report);
      safeCount += permutations
        .map(x => this.evaluateReport(x)).some(x => x === 1) ? 1 : 0;
      // safeCount += this.evaluateReport(report);
    }
    return safeCount;
  }

  evaluateReport(report: number[]): 0 | 1 {
    let sign = null;
    for (let i = 1; i < report.length; i++) {
      const diff = report[i - 1] - report[i];
      if (Math.abs(diff) === 0 || Math.abs(diff) > 3) return 0;
      if (i === 1) {
        sign = diff > 0 ? '+' : '-';
        continue;
      }
      if ((diff > 0 && sign === '-') || (diff < 0 && sign === '+')) return 0;
    }
    return 1;
  }

  createReportPermutations(report: number[]): number[][] {
    return [report, ...(report.map((_, i) => [...report]
      .filter((value, index, self) => i !== index)))];
  }
}
