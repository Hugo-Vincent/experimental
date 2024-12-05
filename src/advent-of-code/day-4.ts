import { Day } from './day';

export class Day4 extends Day {
  private regexpXmas = /XMAS/g;
  private regexpSamx = /SAMX/g;

  private regexpMas = /MAS/g;

  constructor() {
    super(4);
  }

  run(): number {
    const objects = this.parse();
    return this.solve(objects);
  }

  runTwo() {
    const objects = this.parseTwo();
    return this.solveTwo(objects);
  }

  protected parseTwo(): string[][] {
    const horizontalLines = this.rawFile.split('\n');
    const matrix = [];
    for (let i = 0; i < horizontalLines.length; i++) {
      for (let j = 0; j < horizontalLines[0].length; j++) {
        if (!matrix[i]) matrix[i] = [];
        matrix[i][j] = horizontalLines[i][j];
      }
    }
    return matrix;
  }

  protected solveTwo(lines: string[][]): number {
    // Outline: 1 to line.length - 2
    // Outline: 1 to array.length - 2
    let masCount = 0;
    for (let i = 1; i <= lines.length - 2; i++) {
      for (let j = 1; j <= lines[i].length - 2; j++) {
        const tlbrDiagonals = [
          // diagonals \
          lines[i - 1][j - 1] + lines[i][j] + lines[i + 1][j + 1],
          lines[i + 1][j + 1] + lines[i][j] + lines[i - 1][j - 1],
        ];
        const bltrDiagonals = [
          // diagonals /
          lines[i - 1][j + 1] + lines[i][j] + lines[i + 1][j - 1],
          lines[i + 1][j - 1] + lines[i][j] + lines[i - 1][j + 1],
        ];
        if (i === lines.length - 2) {
          console.log(tlbrDiagonals);
          console.log(bltrDiagonals);
        }
        const ltbrCount = tlbrDiagonals
          .map(x => x.match(this.regexpMas)).filter(x => x).length;
        const bltrCount = bltrDiagonals
          .map(x => x.match(this.regexpMas)).filter(x => x).length;
        if (ltbrCount && bltrCount) {
          masCount++;
        }
        // const symbolCombinations = [
          // // horizontals --
          // lines[i][j - 1] + lines[i][j] + lines[i][j + 1],
          // lines[i][j + 1] + lines[i][j] + lines[i][j - 1],
          //
          // // verticals |
          // lines[i - 1][j] + lines[i][j] + lines[i + 1][j],
          // lines[i + 1][j] + lines[i][j] + lines[i - 1][j],
        // ];
      }
    }
    return masCount;
  }

  protected parse(): {
    horizontalLines: string[],
    verticalLines: string[],
    diagonalLines: string[]
  } {
    // length 140
    const horizontalLines = this.rawFile.split('\n');
    const verticalLines: string[] = horizontalLines.map(_ => '');
    for (let i = 0; i < horizontalLines[0].length; i++) {
      for (let j = 0; j < horizontalLines.length; j++) {
        verticalLines[i] += horizontalLines[j][i];
      }
    }

    const matrix = [];
    for (let i = 0; i < horizontalLines.length; i++) {
      for (let j = 0; j < horizontalLines[0].length; j++) {
        if (!matrix[i]) matrix[i] = [];
        matrix[i][j] = horizontalLines[i][j];
      }
    }

    const diagonalIncreasingLengths: number[] = [];
    const diagonalDecreasingLength: number[] = [];
    for (let i = 1; i <= horizontalLines.length; i++) {
      diagonalIncreasingLengths.push(i);
    }
    for (let i =  horizontalLines.length - 1; i > 0; i--) {
      diagonalDecreasingLength.push(i);
    }

    const diagonalLines: string[] = [];
    // top-left
    for (let i = 0; i < diagonalIncreasingLengths.length; i++) {
      let diagonalLine = '';
      const maxLength = diagonalIncreasingLengths[i];
      let x = 0;
      let y = maxLength - 1;
      for (let j = 0; j < maxLength; j++) {
        diagonalLine += matrix[x][y];
        x++;
        y--;
      }
      diagonalLines.push(diagonalLine);
    }
    // bottom-right
    // [139][139]
    // [139][138] [138][139]
    // [139][137] [138][138] [137][139]
    for (let i = 0; i < diagonalDecreasingLength.length; i++) {
      let diagonalLine = '';
      const maxLength = diagonalDecreasingLength[i];
      let x = 139;
      let y = 139 - i;
      for (let j = 0; j < 1 + i; j++) {
        diagonalLine += matrix[x][y];
        x--;
        y++;
      }
      diagonalLines.push(diagonalLine);
    }

    // top-right
    // [0][139]
    // [0][138] [1][139]
    // [0][137] [1][138] [2][139]
    for (let i = 0; i < horizontalLines.length; i++) {
      let diagonalLine = '';
      const maxLength = horizontalLines.length - i - 1;
      let x = 0;
      let y = 139 - i;
      for (let j = 0; j < 1 + i; j++) {
        diagonalLine += matrix[x][y];
        x++;
        y++;
      }
      diagonalLines.push(diagonalLine);
    }

    // bottom-left
    // [139][0]
    // [138][0] [139][1]
    // [137][0] [138][1] [139][2]
    for (let i = 0; i < horizontalLines.length - 1; i++) {
      let diagonalLine = '';
      let x = 139 - i;
      let y = 0;
      for (let j = 0; j < 1 + i; j++) {
        diagonalLine += matrix[x][y];
        x++;
        y++;
      }
      diagonalLines.push(diagonalLine);
    }
    return { horizontalLines, verticalLines, diagonalLines };
  }

  solve(lineObjects: {
    horizontalLines: string[],
    verticalLines: string[],
    diagonalLines: string[]
  }) {
    return Object.values(lineObjects).map(x =>
      x.map(y => (y.match(this.regexpXmas)?.length ?? 0) + (y.match(this.regexpSamx)?.length ?? 0))
        .reduce((sum, x) => sum + x, 0))
      .reduce((sum, x) => sum + x, 0);
  }
}
