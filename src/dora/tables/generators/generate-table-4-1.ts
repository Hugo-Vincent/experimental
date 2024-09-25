import { CONTRACT_INSTANCES } from '../../contracts/contract-instances.constants';
import { EntryTable4_1 } from '../entry-template/table-4-1-entry';
import { ALL_COMPANY_INSTANCES } from '../../companies/company-instances.constants';
import { ECompanies } from '../../companies/constants/companies.enum';

export function generateTable4_1(): EntryTable4_1[] {
  return CONTRACT_INSTANCES.map((x) => {
    return [
      new EntryTable4_1(x.referenceNumber, x.financialEntityLei, '(2) The entity is not a branch'),
      new EntryTable4_1(x.referenceNumber, ALL_COMPANY_INSTANCES[ECompanies.STICHTING_BLOCKRISE].companyIdentification.code, '(2) The entity is not a branch'),
    ];
  }).flat();
}
