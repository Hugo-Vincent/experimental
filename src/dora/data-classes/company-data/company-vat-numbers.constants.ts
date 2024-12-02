import { ECompanies } from '../../common/companies.enum';
import { Nullable } from '../../../types/types';
import { ICompanyIndentification } from '../../common/interfaces/company-id.interface';
import { Countries } from '../../common/countries.enum';

export const COMPANY_VAT_NUMBERS: Record<
  ECompanies,
  Nullable<ICompanyIndentification>
> = {
  [ECompanies.EXPO]: {
    country: Countries.US,
    code: '',
    link: '',
  },
  AFAS: undefined,
  ALPHABET: undefined,
  BITVAVO: undefined,
  BITWARDEN: undefined,
  BLOCKCHAINDOTCOM: undefined,
  BLOCKRISE: undefined,
  BLOCKRISE_GROUP: undefined,
  BUNQ: undefined,
  CHAINSTACK: undefined,
  COINGECKO: undefined,
  COLT: undefined,
  COMPLYADVANTAGE: undefined,
  ELLIPTIC: undefined,
  GITHUB: undefined,
  GLASSNODE: undefined,
  GOOGLE: undefined,
  GOOGLE_IRELAND: undefined,
  GRAFANA: undefined,
  HEXNODE: undefined,
  IDIN: undefined,
  ING: undefined,
  KRAKEN: undefined,
  KWINZO: undefined,
  LINEAR: undefined,
  MEMPOOL: undefined,
  MICROSOFT: undefined,
  MICROSOFT_IRELAND: undefined,
  NEXTNOVATE: undefined,
  NOTION: undefined,
  PAY_DOT: undefined,
  POSTCODEDOTNL: undefined,
  QUICKNODE: undefined,
  SANITY: undefined,
  SCRIVE: undefined,
  SECUROSYS: undefined,
  SENDGRID: undefined,
  SENTRY: undefined,
  SHIFTBASE: undefined,
  SLACK: undefined,
  SONARCLOUD: undefined,
  STICHTING_BLOCKRISE: undefined,
  SUREPAY: undefined,
  TWILIO: undefined,
  UBIQUITI: undefined,
  UNISCAPE: undefined,
  VERCEL: undefined,
  VERIFF: undefined,
  ZENDESK: undefined,
};
