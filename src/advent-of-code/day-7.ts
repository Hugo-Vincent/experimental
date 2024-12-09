import { Day } from './day';

export class Day7 extends Day {
  constructor() {
    super(7);
  }

  protected parse(): { answer: number, values: number[] }[] {
    const fileLines = this.rawFile.split('\n');
    const input: { answer: number, values: number[] }[] = [];
    for (const line of fileLines) {
      let [answer, rest] = line.split(':');
      rest = rest.trimStart();
      const values = rest.split(' ');
      input.push({
        answer: Number(answer), values: values.map(Number),
      });
    }
    return input;
  }

  run(): number {
    const input = this.parse();
    let sum = 0;
    for (const equation of input) {
      sum += this.runEquation(equation);
    }
    return sum;
  }

  runEquation(equation: { answer: number, values: number[] }): number {
    const operatorCount = equation.values.length - 1;
    const permutations = this.getAllPermutations(operatorCount);
    // console.log(equation.values, permutations);
    for (const permutation of permutations) {
      let value = equation.values[0];
      for (let i = 0; i < permutation.length; i++) {
        if (permutation[i] === '0') value += equation.values[i + 1];
        if (permutation[i] === '1') value *= equation.values[i + 1];
      }
      if (value === equation.answer) {
        return value;
      }
    }
    return 0;
  }

  getAllPermutations(operatorCount: number) {
    const permutationsCount = Math.pow(2, operatorCount);
    const permutations: string[] = [];
    for (let i = 0; i < permutationsCount; i++) {
      let binary = i.toString(2);
      binary = binary.padStart(operatorCount, '0');
      permutations.push(binary);
    }
    return permutations;
  }
}

