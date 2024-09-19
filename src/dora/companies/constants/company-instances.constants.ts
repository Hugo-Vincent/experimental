import { ECompanies } from '../enums/companies.enum';
import { Company } from '../company';

export const COMPANY_INSTANCES: Record<ECompanies, Company> = Object.fromEntries(
  (Object.keys(ECompanies) as ECompanies[])
    .map(x => [x, new Company(x)] as [ECompanies, Company])) as Record<ECompanies, Company>;
