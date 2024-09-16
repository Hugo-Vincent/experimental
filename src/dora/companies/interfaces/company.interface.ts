import { ECompanyLegalNames } from '../../enums/company-legal-names.enum';
import { ECompanyTradeMarks } from '../../enums/company-trade-marks.enum';
import { TCodeType } from '../../types/dora-types';
import { ICompanyIndentification } from './company-id.interface';

export interface ICompanyInfo {
  legalName: ECompanyLegalNames;
  tradeMark: ECompanyTradeMarks;
  typeOfCode: TCodeType;
  companyIdentification: ICompanyIndentification;
}
