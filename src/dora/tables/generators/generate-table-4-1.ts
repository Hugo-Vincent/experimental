import { EntryTable4_1 } from '../entry-template/table-4-1-entry';
import { ECompanies } from '../../common/companies.enum';
import { CRITICAL_CONTRACTS_ARRAY } from '../../classes/contract-instances';
import { ALL_COMPANY_INSTANCES } from '../../classes/company-instances';

export function generateTable4_1(): EntryTable4_1[] {
  return CRITICAL_CONTRACTS_ARRAY.map((x) => {
    return [
      new EntryTable4_1(x.referenceNumber, x.financialEntityLei, '(2) The entity is not a branch'),
      new EntryTable4_1(x.referenceNumber, ALL_COMPANY_INSTANCES[ECompanies.STICHTING_BLOCKRISE].companyIdentification.code, '(2) The entity is not a branch'),
    ];
  }).flat();
}
