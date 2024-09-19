import { generateData, JsonGenerator } from './generate-data';
import { ECompanies } from './companies/enums/companies.enum';
import { EntryTable1_1 } from './tables/templates/table-1-1-entry';
import { COMPANY_INSTANCES } from './companies/constants/company-instances.constants';

describe('generate data', () => {
  it('generate data', () => {
    const companies = generateData();
    console.log(companies);
  });

  it('generate tables', () => {
    console.log(new EntryTable1_1('2024-09-19').toJSON());
    console.log(new EntryTable1_1('2024-09-19').toJSON());
    console.log(new EntryTable1_1('2024-09-19').toJSON());
  });

  it('generate Tables 1', async () => {

  });
});
// [{
//   "RT.01.01.0010": "724500J6RZI9SE1AAP41",
//   "RT.01.01.0020":"Blockrise Capital B.V.",
//   "RT.01.01.0030":"NL",
//   "RT.01.01.0040":"credit institutions",
//   "RT.01.01.0050":"?",
//   "RT.01.01.0060":"02-02-2024"
// }]