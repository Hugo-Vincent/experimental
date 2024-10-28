import { EntryTable4_1 } from '../entry-template/table-4-1-entry';
import { ECompanies } from '../../common/companies.enum';
import { MAIN_DB } from '../../data-getters/main-db';

export function generateTable4_1(): EntryTable4_1[] {
  return MAIN_DB.contract.getCriticalContractsArray().map((x) => {
    return [
      new EntryTable4_1(x.id, x.financialEntityLei, '(2) The entity is not a branch'),
      new EntryTable4_1(x.id, MAIN_DB.company.getCompany(ECompanies.STICHTING_BLOCKRISE).companyIdentification.code, '(2) The entity is not a branch'),
    ];
  }).flat();
}
