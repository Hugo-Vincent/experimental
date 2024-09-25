import { Countries } from '../../general/countries.enum';

export interface ICompanyIndentification {
  country: Countries;
  code: string;
  link: string;
}
