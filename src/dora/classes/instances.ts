import { Contract } from './contract';
import { Currencies } from '../common/currencies.enum';
import { DELETION_DATE_PLACEHOLDER } from '../common/data-constants';
import { Countries } from '../common/countries.enum';
import { EFunctions } from '../common/functions.enum';
import { CriticalFunction } from './function';
import { ECompanies } from '../common/companies.enum';
import {
  CRITICAL_TPSP_KEYS,
  NON_CRITICAL_TPSPS_KEYS,
  TCriticalTPSP,
  TNonCriticalTPSP,
} from './tpsp-instances';
import { Company } from './company';

/**
 * CRITICAL TPSPs
 */
export const CRITICAL_TPSP_INSTANCES = CRITICAL_TPSP_KEYS.reduce((map, x) => {
  map[x] = new Company(x);
  return map;
}, {} as Record<TCriticalTPSP, Company>);
export const CRITICAL_TPSP_INSTANCES_ARRAY = Object.values(CRITICAL_TPSP_INSTANCES);

/**
 * NON-CRITICAL TPSPs
 */
export const NON_CRITICAL_TPSP_INSTANCES = NON_CRITICAL_TPSPS_KEYS.reduce((map, x) => {
  map[x] = new Company(x);
  return map;
}, {} as Record<TNonCriticalTPSP, Company>);
export const NON_CRITICAL_TPSP_INSTANCES_ARRAY = Object.values(NON_CRITICAL_TPSP_INSTANCES);

/**
 * REST TPSPs
 */
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
export const ALL_COMPANY_INSTANCES: Record<ECompanies, Company> = {
  ...CRITICAL_TPSP_INSTANCES,
  ...NON_CRITICAL_TPSP_INSTANCES,
  ..._OTHER_COMPANIES,
};


/**
 * CONTRACTS
 */
export const CONTRACT_INSTANCES = CRITICAL_TPSP_INSTANCES_ARRAY.map((x, i) => {
  const contract = new Contract(
    x,
    `CONTRACT_${i + 1}`,
    1,
    Currencies.EUR,
    0,
    `FUNCTION_${i + 1}`,
    18,
    '2022-01-01',
    DELETION_DATE_PLACEHOLDER,
    30,
    90,
    Countries.US,
    Countries.US,
    'No',
    'High',
    4,
  );
  x.contract = contract;
  return contract;
});

/**
 * FUNCTIONS
 */
export const FUNCTION_INSTANCES = Object.values(EFunctions)
  .reduce((map: Record<EFunctions, CriticalFunction>, functionId, i: number) => {
    map[functionId] = new CriticalFunction(functionId, 6, 3, 'Fill in reasons for Criticality.', '2000-12-31', 4, 4, 3);
    return map;
  }, {} as Record<EFunctions, CriticalFunction>);

