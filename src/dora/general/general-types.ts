import { Countries } from './countries.enum';

export type TCompanyIdentifiers = 'LEI' | 'CRN' | 'VAT' | 'PNR' | 'NIN';
export type TCodeType =
  | 'LEI'
  | `${Countries}_${Exclude<TCompanyIdentifiers, 'LEI'>}`;
/**
 * 2024-08-23
 */
export type TDate = `${string}-${string}-${string}`;
export type TObjectKey = string | number | symbol;
export type TObject = { [P in TObjectKey]: TAny } ;
export type TAny =
  TObjectKey
  | TObject
  | null
  | TAny[];
