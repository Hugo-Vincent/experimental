import { ECompanies } from './companies/enums/companies.enum';
import { Company } from './companies/company';
import { COMPANY_LEI_CODES } from './companies/constants/company-data/lei-codes.constants';
import { TCompanyIdentifiers, TJson } from './types/general-types';
import { COMPANY_CRN_CODES } from './companies/constants/company-data/crn-codes.constants';
import { TABLE_SPECS } from './tables/constants/table-specs.constants';

export function generateData(): Company[] {
  const companyKeysArray = Object.keys(ECompanies).map(
    (x) => ECompanies[x],
  ) as ECompanies[];
  return companyKeysArray.map((x) => new Company(x));
}

function getIdType(company: ECompanies): TCompanyIdentifiers {
  let companyIdType = COMPANY_LEI_CODES[company];
  if (companyIdType) {
    return 'LEI';
  }
  companyIdType = COMPANY_CRN_CODES[company];
  if (companyIdType) {
    return 'CRN';
  }
  throw new Error('No valid identification code type');
}

export class JsonGenerator {
  private tables: { [K in string]: TJson };

  constructor() {
    this.tables = {};
  }

  generateBaseData(): Company[] {
    const companyKeysArray = Object.keys(ECompanies).map(
      (x) => ECompanies[x],
    ) as ECompanies[];
    return companyKeysArray.map((x) => new Company(x));
  }

  generateExcelTables(): { [K in string]: TJson } {
    const allTables = {};
    for (const mainTableStr in TABLE_SPECS) {
      const mainTableIndex = Number(mainTableStr);
      allTables[mainTableIndex] = {};
      for (const subTableStr in TABLE_SPECS[mainTableIndex]) {
        const subTableIndex = Number(subTableStr);
        const cols = TABLE_SPECS[mainTableIndex][subTableIndex];
        allTables[mainTableIndex][subTableIndex] =
          this.generateExcelTableAsJson(mainTableIndex, subTableIndex, cols);
      }
    }
    return allTables;
  }

  generateExcelTableAsJson(
    tableNr: number,
    subTableNumber: number,
    cols: number,
  ): TJson {
    const table = {};
    for (let i = 0; i < cols; i++) {
      const key = `RT.${this.stringifyNumbers(tableNr)}.${this.stringifyNumbers(
        subTableNumber,
      )}.0${this.stringifyNumbers(i)}0`;
      table[key] = null;
    }
    return table;
  }

  private stringifyNumbers(nr: number): string {
    return nr < 10 ? '0' + nr : nr.toString();
  }
}
