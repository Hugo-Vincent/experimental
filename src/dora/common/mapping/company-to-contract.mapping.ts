import { EContracts } from '../contracts.enum';
import { ECompanies } from '../companies.enum';
import { CRITICAL_CONTRACTS_ARRAY, NON_CRITICAL_CONTRACTS_ARRAY } from '../../data-classes/instance-data/contract-instances';


// export const CONTRACT_TO_COMPANY_MAPPING: Record<EContracts, ECompanies> = {
//   [EContracts.BUNQ_BLOCKRISE_BV]: ECompanies.BUNQ,
//   [EContracts.BUNQ_BLOCKRISE_STICHTING]: ECompanies.BUNQ,
//   ...CRITICAL_CONTRACTS_ARRAY.filter(x => x.id !== EContracts.BUNQ_BLOCKRISE_BV && EContracts.BUNQ_BLOCKRISE_STICHTING).reduce((acc, x) => {
//     acc[x.id] = ECompanies[x.id];
//     return acc;
//   }, {} as Record<TCriticalContract, any>),
//   ...NON_CRITICAL_CONTRACTS_ARRAY.reduce((acc, x) => {
//     acc[x.id] = ECompanies[x.id];
//     return acc;
//   }, {}),
// };
