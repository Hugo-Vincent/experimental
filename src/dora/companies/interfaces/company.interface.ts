import { TCodeType } from '../../types/general-types';
import { ICompanyIndentification } from './company-id.interface';

export interface ICompanyInfo {
  legalName: string;
  tradeMark: string;
  typeOfCode: TCodeType;
  companyIdentification: ICompanyIndentification;
}
