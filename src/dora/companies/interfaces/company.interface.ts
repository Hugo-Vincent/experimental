import { TCodeType } from '../../types/general-types';
import { ICompanyIndentification } from './company-id.interface';
import { TLegalName } from '../../company-data/company-legal-names.constants';

export interface ICompanyInfo {
  legalName: TLegalName;
  tradeMark: string;
  typeOfCode: TCodeType;
  companyIdentification: ICompanyIndentification;
}
