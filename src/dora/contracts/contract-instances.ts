import { CRITICAL_TPSP_INSTANCES } from '../companies/company-instances.constants';
import { Contract } from './contract';
import { Currencies } from '../general/currencies.enum';
import { DELETION_DATE_PLACEHOLDER } from '../general/data-constants';
import { Countries } from '../general/countries.enum';

export const CONTRACT_INSTANCES = Object.values(CRITICAL_TPSP_INSTANCES).map((x, i) => {
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
