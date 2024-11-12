import { createJsonFiles, createTxtFiles } from './generate-dora-files';
import { COMPANY_COUNTRY_CODES } from './data-classes/company-data/company-country-codes.constants';
import { COMPANY_LEI_CODES } from './data-classes/company-data/company-lei-codes.constants';
import { ECompanies } from './common/companies.enum';
import { COMPANY_CRN_CODES } from './data-classes/company-data/company-registration-numbers.constants';
import { DownTimeIncidents } from './data-classes/company-data/downtime/down-time-incident';

describe('Create Files', () => {
  it('Create JSON files', () => {
    createJsonFiles();
  });

  it('Create TXT files', () => {
    createTxtFiles();
  });

  it('check data consistency', () => {
    Object.entries(COMPANY_COUNTRY_CODES).forEach(([key, country]) => {
      const company = key as ECompanies;
      const companyCountry = COMPANY_COUNTRY_CODES[company];
      const leiCountry = COMPANY_LEI_CODES[company]?.country;
      if (leiCountry) {
        console.log(leiCountry, companyCountry);
      }
      const crnCountry = COMPANY_CRN_CODES[company]?.country;
      if (crnCountry) {
        console.log(crnCountry, companyCountry);
      }
      if ((leiCountry && leiCountry !== companyCountry) || (crnCountry &&  crnCountry !== companyCountry)) {
        throw new Error('Mismatching countries: ' + company + ' ' + companyCountry + ' ' + leiCountry + ' ' + crnCountry);
      }
    });
  });
});

describe('getDownTimes', () => {
  it('gets downtimes', () => {
    const downTimeYear = new DownTimeIncidents();
    downTimeYear.addIncident(0, 15, 1);
    const meanDownTime = downTimeYear.calculateMeanDownTime();
    console.log(meanDownTime);
  });
});

  // it('generate data', () => {
  //   const companies = generateData();
  //   console.log(companies);
  // });
  //
  // it('generate tables', () => {
  //   console.log(new EntryTable1_1('2024-09-19').toJSON());
  //   console.log(new EntryTable1_1('2024-09-19').toJSON());
  //   console.log(new EntryTable1_1('2024-09-19').toJSON());
  // });
  //
  // it('generate Tables 1', async () => {
  //
  // });

// [{
//   "RT.01.01.0010": "724500J6RZI9SE1AAP41",
//   "RT.01.01.0020":"Blockrise Capital B.V.",
//   "RT.01.01.0030":"NL",
//   "RT.01.01.0040":"credit institutions",
//   "RT.01.01.0050":"?",
//   "RT.01.01.0060":"02-02-2024"
// }]
