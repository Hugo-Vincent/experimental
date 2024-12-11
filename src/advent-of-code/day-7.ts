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

  runTwo(): number {
    const input = this.parse();
    let sum = 0;
    for (const equation of input) {
      sum += this.runEquationTwo(equation);
    }
    return sum;
  }

  runEquationTwo(equation: { answer: number, values: number[] }): number {
    const possibleAnswers = [];
    const operatorCount = equation.values.length - 1;
    let permutations = this.getAllPermutations(operatorCount, 3);
    for (const permutation of permutations) {
      const {
        valuesConcatenated,
        newPermutation,
      } = this.applyConcatenationOperators(equation.values.map(x => String(x)), permutation);
      let value = valuesConcatenated[0];
      if (newPermutation.length === 0) {
        if (value === equation.answer) {
          possibleAnswers.push(value);
        }
        continue;
      }
      for (let i = 0; i < newPermutation.length; i++) {
        if (newPermutation[i] === '0') value += valuesConcatenated[i + 1];
        if (newPermutation[i] === '1') value *= valuesConcatenated[i + 1];
      }
      if (value === equation.answer) {
        possibleAnswers.push(value);
      }
    }
    if (possibleAnswers.length) {
      return possibleAnswers.sort()[possibleAnswers.length - 1];
    }
    return 0;
  }

  getAllPermutations(operatorCount: number, numberBase = 2) {
    const permutationsCount = Math.pow(numberBase, operatorCount);
    const permutations: string[] = [];
    for (let i = 0; i < permutationsCount; i++) {
      let binary = i.toString(numberBase);
      binary = binary.padStart(operatorCount, '0');
      permutations.push(binary);
    }
    return permutations;
  }

  applyConcatenationOperators(values: string[], permutation: string): {
    valuesConcatenated: number[],
    newPermutation: string,
  } {
    let anotherRound = false;
    const valuesCopy = values.map(String);
    for (let i = 0; i < values.length - 1; i++) {
      if (permutation[i] === '2') {
        valuesCopy[i] = valuesCopy[i] + valuesCopy[i + 1];
        valuesCopy[i + 1] = undefined;
        permutation = permutation.slice(0, i) + permutation.slice(i + 1, permutation.length);
        anotherRound = true;
        break;
      }
    }
    if (anotherRound) {
      return this.applyConcatenationOperators(valuesCopy.filter(x => x), permutation);
    }
    return {
      valuesConcatenated: valuesCopy.filter(x => x).map(Number),
      newPermutation: permutation,
    }
  }

  test(): void {
    const permutations = this.getAllPermutations(2, 3);
    for (const p of permutations) {
      const concatenated = this.applyConcatenationOperators(['24', '835', '91'], p);
      console.log(p, concatenated);
    }
  }
}
