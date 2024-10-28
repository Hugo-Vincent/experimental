import { ECompanies } from '../companies.enum';
import { TCompanyIdentifiers } from '../general-types';
import { COMPANY_LEI_CODES } from '../../data-classes/company-data/company-lei-codes.constants';
import { ICompanyIndentification } from '../interfaces/company-id.interface';
import { COMPANY_CRN_CODES } from '../../data-classes/company-data/company-registration-numbers.constants';

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
