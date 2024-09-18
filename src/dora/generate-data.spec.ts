import { generateData, JsonGenerator } from './generate-data';
import { ECompanies } from './companies/enums/companies.enum';
import { Table1_1 } from './tables/table-1-1';

describe('generate data', () => {
  it('generate data', () => {
    const companies = generateData();
    console.log(companies);
  });

  it('generate tables', () => {
    console.log(new Table1_1().toJSON());
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