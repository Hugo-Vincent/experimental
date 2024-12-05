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
    code: '46-3857843',
    link: '',
  },
  ALPHABET: undefined,
  BITVAVO: undefined,
  BITWARDEN: undefined,
  BLOCKCHAINDOTCOM: undefined,

  BLOCKRISE: undefined,
  BLOCKRISE_GROUP: undefined,
  STICHTING_BLOCKRISE: undefined,

  BLUEM: undefined,
  BUNQ: undefined,
  CHAINSTACK: undefined,
  COINGECKO: undefined,
  COMPLYADVANTAGE: undefined,
  ELLIPTIC: undefined,
  FLANTUA: undefined,
  GITHUB: undefined,
  GLASSNODE: undefined,
  GOOGLE_IRELAND: undefined,
  GRAFANA: undefined,
  HEXNODE: undefined,
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
  SECUROSYS: undefined,
  SENTRY: {
    code: 'EU372050121',
    country: 'EU' as Countries, // This company has a weird VAT given to foreign companies to do business in the EU
    link: '', // Jasper invoice
  },
  SHIFTBASE: undefined,
  SLACK: {
    code: 'IE3336483DH',
    country: Countries.IE,
    link: '', // Jasper invoice
  },
  SONARCLOUD: undefined,

  TWILIO: {
    code: 'IE3335493BH',
    country: Countries.IE,
    link: '', // Jasper invoice
  },
  UBIQUITI: undefined,
  UNISCAPE: undefined,
  VERCEL: undefined,
  VERIFF: {
    code: 'EE101828178',
    country: Countries.EE,
    link: '',
  },
  ZENDESK: undefined,
};
