import { Countries } from '../../common/countries.enum';

export interface ICompanyIndentification {
  country: Countries;
  code: string;
  link: string;
}
