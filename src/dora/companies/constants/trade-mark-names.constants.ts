import { ECompanies } from '../enums/companies.enum';
import { ECompanyTradeMarks } from '../enums/company-trade-marks.enum';

export const COMPANY_TO_TRADEMARKS: Record<ECompanies, ECompanyTradeMarks> =
  Object.keys(ECompanies).reduce(
    (acc: Record<ECompanies, ECompanyTradeMarks>, x) => {
      acc[x] = ECompanyTradeMarks[x];
      return acc;
    },
    {} as Record<ECompanies, ECompanyTradeMarks>,
  );
