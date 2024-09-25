import { Countries } from '../../constant-data/enums/countries.enum';

export interface ICompanyIndentification {
  country: Countries;
  code: string;
  link: string;
}
