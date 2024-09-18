import { ECompanies } from './companies/enums/companies.enum';
import { Company } from './companies/company';
import { COMPANY_LEGAL_NAMES } from './companies/constants/company-data/legal-names.constants';
import { COMPANY_TRADEMARKS } from './companies/constants/company-data/trade-mark-names.constants';
import { COMPANY_LEI_CODES } from './companies/constants/company-data/lei-codes.constants';
import { TCompanyIdentifiers } from './types/dora-types';
import { COMPANY_CRN_CODES } from './companies/constants/company-data/crn-codes.constants';
import { CODETYPE_TO_CODEMAP } from './constants/mappings.constants';
import { COMPANY_COUNTRY_CODES } from './constants/country-codes.constants';
import { TJson } from './types/json.type';
import { TABLE_SPECS } from './tables/table-specs.constants';

export function generateData(): Company[] {
  const companyKeysArray = Object.keys(ECompanies).map(
    (x) => ECompanies[x],
  ) as ECompanies[];
  return companyKeysArray.map((x) => createCompany(x));
}

function createCompany(company: ECompanies) {
  const legalName = COMPANY_LEGAL_NAMES[company];
  const tradeMarkName = COMPANY_TRADEMARKS[company];
  const companyIdType = getIdType(company);
  const country = COMPANY_COUNTRY_CODES[company];
  const companyIdentification = CODETYPE_TO_CODEMAP[companyIdType][company];
  return new Company(
    legalName,
    tradeMarkName,
    companyIdType,
    country,
    companyIdentification,
  );
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
    return companyKeysArray.map((x) => this.createCompany(x));
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

  private createCompany(company: ECompanies) {
    const legalName = COMPANY_LEGAL_NAMES[company];
    const tradeMarkName = COMPANY_TRADEMARKS[company];
    const companyIdType = getIdType(company);
    const country = COMPANY_COUNTRY_CODES[company];
    const companyIdentification = CODETYPE_TO_CODEMAP[companyIdType][company];
    return new Company(
      legalName,
      tradeMarkName,
      companyIdType,
      country,
      companyIdentification,
    );
  }

  private stringifyNumbers(nr: number): string {
    return nr < 10 ? '0' + nr : nr.toString();
  }
}
