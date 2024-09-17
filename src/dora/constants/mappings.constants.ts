import { ECompanies } from '../companies/enums/companies.enum';
import { TCompanyIdentifiers } from '../types/dora-types';
import { COMPANY_LEI_CODES } from '../companies/constants/lei-codes.constants';
import { ICompanyIndentification } from '../companies/interfaces/company-id.interface';
import { COMPANY_CRN_CODES } from '../companies/constants/crn-codes.constants';

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
