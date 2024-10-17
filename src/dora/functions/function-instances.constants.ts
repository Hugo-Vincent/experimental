import { CriticalFunction } from './function';
import { EFunctions } from './constants/functions.enum';

export const FUNCTION_INSTANCES = Object.values(EFunctions)
  .reduce((map: Record<EFunctions, CriticalFunction>, functionId, i: number) => {
    map[functionId] = new CriticalFunction(functionId, 6, 3, 'Fill in reasons for Criticality.', '2000-12-31', 4, 4, 3);
    return map;
  }, {} as Record<EFunctions, CriticalFunction>);
