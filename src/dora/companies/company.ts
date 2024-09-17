import { ICompanyInfo } from './interfaces/company.interface';
import { TCodeType, TCompanyIdentifiers } from '../types/dora-types';
import { ECompanyLegalNames } from './enums/company-legal-names.enum';
import { ECompanyTradeMarks } from './enums/company-trade-marks.enum';
import { ICompanyIndentification } from './interfaces/company-id.interface';
import { Countries } from './enums/countries.enum';

export class Company implements ICompanyInfo {
  legalName: ECompanyLegalNames;
  tradeMark: ECompanyTradeMarks;
  typeOfCode: TCodeType;
  companyIdentification: ICompanyIndentification;

  constructor(
    legalName: ECompanyLegalNames,
    tradeMark: ECompanyTradeMarks,
    typeOfCode: TCompanyIdentifiers,
    country: Countries,
    companyIdentification: ICompanyIndentification,
  ) {
    [].concat()
    this.legalName = legalName;
    this.tradeMark = tradeMark;
    this.typeOfCode =
      typeOfCode === 'LEI' ? typeOfCode : `${country}_${typeOfCode}`;
    this.companyIdentification = companyIdentification;
  }
}
