import { Countries } from './countries.enum';

export type TCompanyIdentifiers = 'LEI' | 'CRN' | 'VAT' | 'PNR' | 'NIN';
export type TCodeType =
  | 'LEI'
  | `${Countries}_${Exclude<TCompanyIdentifiers, 'LEI'>}`;
/**
 * 2024-08-23
 */
export type TDate = `${string}-${string}-${string}`;
export type TJson =
  | string
  | number
  | boolean
  | null
  | TJson[]
  | { [key: string]: TJson };
