import { ECompanies } from '../../enums/companies.enum';
import { ECompanyLegalNames } from '../../enums/company-legal-names.enum';

export const COMPANY_TO_LEGALNAMES: Record<ECompanies, ECompanyLegalNames> =
  Object.keys(ECompanies).reduce((acc, x) => {
    acc[x] = ECompanyLegalNames[x];
    return acc;
  }, {} as Record<ECompanies, ECompanyLegalNames>);
