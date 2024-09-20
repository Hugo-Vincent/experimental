import { COMPANY_LEI_CODES } from '../../companies/constants/company-data/lei-codes.constants';
import { ECompanies } from '../../companies/enums/companies.enum';
import { DELETION_DATE_PLACEHOLDER, FIRST_REPORTING_DATE } from '../constants/data-constants';
import { EntryTable1_2 } from '../entry-template/table-1-2-entry';
import { COMPANY_INSTANCES } from '../../companies/constants/company-instances.constants';
import { Currencies } from '../../companies/enums/currencies.enum';

export function generateTable1_2(): EntryTable1_2[] {
  return [
    createBlockriseEntry(),
    createBlockriseStichtingEntry(),
  ];
}

function createBlockriseEntry(): EntryTable1_2 {
  const company = ECompanies.BLOCKRISE;
  const hierarchy = '';
  const parentLei = COMPANY_LEI_CODES[ECompanies.BLOCKRISE].code; // is er niet
  const lastUpdate = FIRST_REPORTING_DATE;
  const integrationDate = FIRST_REPORTING_DATE;
  const blockriseTotalAssetValue = '2000';
  return new EntryTable1_2(
    COMPANY_INSTANCES[company],
    hierarchy,
    parentLei,
    lastUpdate,
    integrationDate,
    DELETION_DATE_PLACEHOLDER,
    Currencies.EUR,
    blockriseTotalAssetValue
  );
}

function createBlockriseStichtingEntry(): EntryTable1_2 {
  const company = ECompanies.STICHTING_BLOCKRISE;
  const hierarchy = '';
  const parentLei = COMPANY_LEI_CODES[ECompanies.BLOCKRISE].code; // is er niet
  const lastUpdate = FIRST_REPORTING_DATE;
  const integrationDate = FIRST_REPORTING_DATE;
  const blockriseStichtingTotalAssetValue = '1000';
  return new EntryTable1_2(
    COMPANY_INSTANCES[company],
    hierarchy,
    parentLei,
    lastUpdate,
    integrationDate,
    DELETION_DATE_PLACEHOLDER,
    Currencies.EUR,
    blockriseStichtingTotalAssetValue
  );
}