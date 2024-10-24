import { CRITICAL_FUNCTION_INSTANCES, FUNCTION_INSTANCES } from './function-instances';
import { CRITICAL_TPSP_INSTANCES_ARRAY } from './company-instances';
import { COMPANY_FUNCTIONS } from '../company-data/company-functions.constants';



(() => {
  // Set Functions on Companies
  CRITICAL_TPSP_INSTANCES_ARRAY.forEach((x) => {
    x.functions = COMPANY_FUNCTIONS[x.id].map((x) => FUNCTION_INSTANCES[x]);
  });

  // Set Companies on Functions
  CRITICAL_FUNCTION_INSTANCES
})();
