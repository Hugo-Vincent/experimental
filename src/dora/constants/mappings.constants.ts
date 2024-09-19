import { ECompanies } from '../companies/enums/companies.enum';
import { TCompanyIdentifiers } from '../types/general-types';
import { COMPANY_LEI_CODES } from '../companies/constants/company-data/lei-codes.constants';
import { ICompanyIndentification } from '../companies/interfaces/company-id.interface';
import { COMPANY_CRN_CODES } from '../companies/constants/company-data/crn-codes.constants';

export const CODETYPE_TO_CODEMAP: Record<
  TCompanyIdentifiers,
  Record<ECompanies, ICompanyIndentification>
> = {
  ['LEI']: COMPANY_LEI_CODES,
  ['CRN']: COMPANY_CRN_CODES,
  ['VAT']: null,
  ['PNR']: null,
  ['NIN']: null,
};
