import { generateData, JsonGenerator } from './generate-data';
import { ECompanies } from './companies/enums/companies.enum';

describe('generate data', () => {
  it('generate data', () => {
    const companies = generateData();
    console.log({ ...ECompanies });
  });

  it('generate tables', () => {
    console.log(new JsonGenerator().generateExcelTables());
  });
});
