import { ICompanyIndentification } from './company-id.interface';
import { TLegalName } from '../company-data/company-legal-names.constants';

export interface ICompanyInfo {
  legalName: TLegalName;
  tradeMark: string;
  companyIdentification: ICompanyIndentification;
}
