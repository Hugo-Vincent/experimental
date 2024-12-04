import { Day } from './day';

export class Day1 extends Day {
  constructor() {
    super(1);
  }

  run() {
    const rawFile = this.load();
    const [left, right] = this.parse(rawFile);
    return left.map((l, i) => Math.abs(l - right[i])).reduce((sum, x) => sum + x, 0);
  }

  runTwo() {
    const rawFile = this.load();
    const [leftArr, rightArr] = this.parse(rawFile);
    const rightMap = rightArr.reduce((result, x) => {
      result[x] = (result[x] ?? 0) + 1;
      return result;
    }, {});
    return leftArr.reduce((result, x) => {
      result += (x * (rightMap[x] ?? 0));
      return result;
    }, 0);
  }

  parse(rawFile: string): [number[], number[]] {
    const lines = rawFile.split('\n');
    const numberArrays = lines.map(x => x.split('   ').map(x => Number(x)));
    const [leftArr, rightArr] = numberArrays.reduce((result: [number[], number[]], [l, r]) => {
      result[0].push(l);
      result[1].push(r);
      return result;
    }, [[], []]);
    return [leftArr.sort(), rightArr.sort()];
  }
}
