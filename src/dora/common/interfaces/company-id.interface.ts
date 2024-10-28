import { Countries } from '../countries.enum';

export interface ICompanyIndentification {
  country: Countries;
  code: string;
  link: string;
}
