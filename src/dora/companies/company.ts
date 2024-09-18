import { ICompanyInfo } from './interfaces/company.interface';
import { TCodeType, TCompanyIdentifiers } from '../types/dora-types';
import { ICompanyIndentification } from './interfaces/company-id.interface';
import { Countries } from './enums/countries.enum';

export class Company implements ICompanyInfo {
  legalName: string;
  tradeMark: string;
  typeOfCode: TCodeType;
  companyIdentification: ICompanyIndentification;

  constructor(
    legalName: string,
    tradeMark: string,
    typeOfCode: TCompanyIdentifiers,
    country: Countries,
    companyIdentification: ICompanyIndentification,
  ) {
    this.legalName = legalName;
    this.tradeMark = tradeMark;
    this.typeOfCode =
      typeOfCode === 'LEI' ? 'LEI' : `${country}_${typeOfCode}`;
    this.companyIdentification = companyIdentification;
  }
}
