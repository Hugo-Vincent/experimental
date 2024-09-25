import { EFunctions } from '../contracts/constants/functions.enum';
import { CriticalFunction } from './function';

export const FUNCTION_INSTANCES = Object.entries(EFunctions)
  .reduce((map: Record<EFunctions, CriticalFunction>, [funcKey, funcDesc], i: number) => {
    map[funcKey] = new CriticalFunction(i + 1, 6, funcDesc, 3, 'Fill in reasons for Criticality.', '2000-12-31', 4, 4, 3);
    return map;
    },
    {} as Record<EFunctions, CriticalFunction>,
  );