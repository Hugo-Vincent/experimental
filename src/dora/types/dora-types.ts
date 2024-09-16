import { Countries } from '../enums/countries.enum';

export type TCompanyIdentifiers = 'LEI' | 'CRN' | 'VAT' | 'PNR' | 'NIN';
export type TCodeType =
  | 'LEI'
  | `${Countries}_${Exclude<TCompanyIdentifiers, 'LEI'>}`;
