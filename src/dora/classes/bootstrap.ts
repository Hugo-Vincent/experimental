import { FUNCTION_INSTANCES } from './function-instances';
import { ALL_COMPANY_INSTANCES, CRITICAL_TPSP_INSTANCES_ARRAY } from './company-instances';
import { COMPANY_FUNCTIONS } from '../company-data/company-functions.constants';
import { ECompanies } from '../common/companies.enum';
import { CRITICAL_CONTRACTS, CRITICAL_CONTRACTS_ARRAY } from './contract-instances';

(() => {
  // Set Functions on Companies
  CRITICAL_TPSP_INSTANCES_ARRAY.forEach((x) => {
    x.functions = COMPANY_FUNCTIONS[x.id].map((x) => FUNCTION_INSTANCES[x]);
  });

  // Set Companies on Functions
  for (const company of Object.keys(COMPANY_FUNCTIONS)) {
    COMPANY_FUNCTIONS[company as ECompanies].forEach((x) => FUNCTION_INSTANCES[x].companies.push(ALL_COMPANY_INSTANCES[company as ECompanies]));
  }

  // Set Contracts on Companies
  CRITICAL_CONTRACTS_ARRAY.forEach((x) => {
    FUNCTION_INSTANCES[x]
  });
})();
