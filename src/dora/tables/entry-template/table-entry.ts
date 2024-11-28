import { TAny } from '../../../util/types/generic-types';

export abstract class TableEntry {
  tableNr: number;
  subTableNr: number;
  protected superClassPropertyNames: string[];

  constructor(tableNr: number, subTableNr: number) {
    this.tableNr = tableNr;
    this.subTableNr = subTableNr;
    // We don't want these properties.
    this.superClassPropertyNames = ['superClassPropertyNames', ...Object.getOwnPropertyNames(this)];
  }

  toJSONFormat(): TAny {
    const values = this.getValuesForJson();
    console.log(values);
    const table = {};
    // const cols = TABLE_SPECS[this.tableNr][this.subTableNr];
    for (let i = 1; i <= values.length; i++) {
      const key = `RT.${this.stringifyNumbers(this.tableNr)}.${this.stringifyNumbers(
        this.subTableNr,
      )}.0${this.stringifyNumbers(i)}0`;
      table[key] = values[i - 1];
    }
    return table;
  }

  private getValuesForJson(): unknown[] {
    return Object.getOwnPropertyNames(this)
      .filter((x) => !this.superClassPropertyNames.includes(x))
      .map((x) => this[x]);
  }

  private stringifyNumbers(nr: number): string {
    return nr < 10 ? '0' + nr : nr.toString();
  }
}
