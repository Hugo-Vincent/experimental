import { TABLE_SPECS } from '../tables/constants/table-specs.constants';

export type TTableIds = {
  [K1 in keyof typeof TABLE_SPECS]:
  K1 extends number ?
    keyof typeof TABLE_SPECS[K1] extends number ?
      `${K1}-${keyof typeof TABLE_SPECS[K1]}`
      : never
    : never
}[keyof typeof TABLE_SPECS];
