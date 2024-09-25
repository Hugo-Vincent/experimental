import { ECompanies } from './constants/companies.enum';
import { Company } from './company.template';
import {
  CRITICAL_TPSP_KEYS, NON_CRITICAL_TPSPS_KEYS,
  TCriticalTPSP,
  TNonCriticalTPSP,
} from './constants/third-party-service-providers.constants';


const _OTHER_COMPANIES: Record<Exclude<ECompanies, TNonCriticalTPSP | TCriticalTPSP>, Company> = {
  [ECompanies.ALPHABET]: new Company(ECompanies.ALPHABET),
  [ECompanies.BLOCKRISE_GROUP]: new Company(ECompanies.BLOCKRISE_GROUP),
  [ECompanies.BLOCKRISE]: new Company(ECompanies.BLOCKRISE, {
    totalAssetValue: 1e7,
  }),
  [ECompanies.STICHTING_BLOCKRISE]: new Company(ECompanies.STICHTING_BLOCKRISE, {
    totalAssetValue: 0,
  }),
};

export const CRITICAL_TPSP_INSTANCES = CRITICAL_TPSP_KEYS.reduce((map, x) => {
  map[x] = new Company(x);
  return map;
}, {} as Record<TCriticalTPSP, Company>);
export const NON_CRITICAL_TPSP_INSTANCES = NON_CRITICAL_TPSPS_KEYS.reduce((map, x) => {
  map[x] = new Company(x);
  return map;
}, {} as Record<TNonCriticalTPSP, Company>);
export const ALL_COMPANY_INSTANCES: Record<ECompanies, Company> = {
  ...CRITICAL_TPSP_INSTANCES,
  ...NON_CRITICAL_TPSP_INSTANCES,
  ..._OTHER_COMPANIES,
};

