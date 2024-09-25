import { CRITICAL_TPSP_INSTANCES } from '../companies/company-instances.constants';
import { TCriticalTPSP } from '../companies/constants/third-party-service-providers.constants';
import { Contract } from './contract';
import { Currencies } from '../constant-data/enums/currencies.enum';
import { DELETION_DATE_PLACEHOLDER } from '../constant-data/data-constants';
import { Countries } from '../constant-data/enums/countries.enum';

export const CONTRACT_INSTANCES = (Object.keys(CRITICAL_TPSP_INSTANCES) as TCriticalTPSP[]).map((x, i) => {
  const tpsp = CRITICAL_TPSP_INSTANCES[x];
  const contract = new Contract(
    tpsp,
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
    4
  );
  CRITICAL_TPSP_INSTANCES[x].contract = contract;
  return contract;
});
