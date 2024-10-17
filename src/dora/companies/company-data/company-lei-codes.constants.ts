import { ECompanies } from '../../common/companies.enum';
import { Nullable } from '../../../types/types';
import { ICompanyIndentification } from '../interfaces/company-id.interface';
import { Countries } from '../../common/countries.enum';

export const COMPANY_LEI_CODES: Record<
  ECompanies,
  Nullable<ICompanyIndentification>
> = {
  [ECompanies.AFAS]: null,
  [ECompanies.ALPHABET]: {
    country: Countries.US,
    code: '5493006MHB84DD0ZWV18',
    link: 'https://leiworldwide.com/lei_record/5493006MHB84DD0ZWV18',
  },
  [ECompanies.BITVAVO]: {
    country: Countries.NL,
    code: '724500MX2WBKDJP9HE56',
    link: 'https://lei-nederland.nl/gedetailleerde-informatie/46438246/724500MX2WBKDJP9HE56/bitvavo-b-v/',
  },
  [ECompanies.BITWARDEN]: null,
  [ECompanies.BLOCKRISE]: {
    country: Countries.NL,
    code: '724500J6RZI9SE1AAP41',
    link: 'https://lei-nederland.nl/gedetailleerde-informatie/37238014/724500J6RZI9SE1AAP41/blockrise-capital-b-v/',
  },
  [ECompanies.STICHTING_BLOCKRISE]: null,
  [ECompanies.BLOCKRISE_GROUP]: null,
  [ECompanies.BUNQ]: {
    country: Countries.NL,
    code: '7245002ZUXNOEJ0QPZ44',
    link: 'https://lei-nederland.nl/gedetailleerde-informatie/1040476/7245002ZUXNOEJ0QPZ44/bunq-b-v/',
  },
  [ECompanies.CHAINSTACK]: null,
  // [ECompanies.CLOUDFLARE]: {
  //   country: Countries.US,
  //   code: '5493007DY18BGNLDWU14',
  //   link: 'https://leiworldwide.com/lei_record/5493007DY18BGNLDWU14',
  // },
  [ECompanies.COLT]: {
    country: Countries.GB,
    code: '2138004U3BWMFNR4ZW05',
    link: 'https://leiworldwide.com/lei_record/2138004U3BWMFNR4ZW05',
  },
  [ECompanies.COINGECKO]: null,
  [ECompanies.COMPLYADVANTAGE]: null,
  [ECompanies.ELLIPTIC]: null,
  [ECompanies.GITHUB]: null,
  [ECompanies.GOOGLE]: {
    country: Countries.US,
    code: '7ZW8QJWVPR4P1J1KQY45',
    link: 'https://leiworldwide.com/lei_record/7ZW8QJWVPR4P1J1KQY45',
  },
  [ECompanies.GOOGLE_IRELAND]: {
    country: Countries.IE,
    code: 'YYPPRNO5HB304LHFVG31',
    link: 'https://leiworldwide.com/lei_record/YYPPRNO5HB304LHFVG31',
  },
  [ECompanies.IDIN]: null,
  [ECompanies.ING]: {
    country: Countries.NL,
    code: '3TK20IVIUJ8J3ZU0QE75',
    link: 'https://lei-nederland.nl/gedetailleerde-informatie/417638/3TK20IVIUJ8J3ZU0QE75/ing-bank-n-v/',
  },
  [ECompanies.KRAKEN]: null,
  [ECompanies.LINEAR]: null,
  [ECompanies.MICROSOFT]: {
    country: Countries.US,
    code: 'INR2EJN1ERAN0W5ZP974',
    link: 'https://lei.info/fullsearch?for=Microsoft',
  },
  [ECompanies.NEXTNOVATE]: null,
  [ECompanies.NOTION]: null,
  [ECompanies.POSTCODEAPI]: null,
  [ECompanies.PAY_DOT]: {
    country: Countries.NL,
    code: '724500NG2W3S69V8WP89',
    link: 'https://lei-nederland.nl/gedetailleerde-informatie/1098440/724500NG2W3S69V8WP89/tintel-b-v/',
  },
  [ECompanies.QUICKNODE]: null,
  [ECompanies.SANITY]: null,
  [ECompanies.SCRIVE]: null,
  [ECompanies.SECUROSYS]: null,
  [ECompanies.SENDGRID]: null, // 549300PAZSY4OW33YX23 but it is lapsed..
  [ECompanies.SENTRY]: null,
  [ECompanies.SLACK]: null, // 5493001KJTIIGC8Y1R12 but it is lapsed..
  [ECompanies.SONARCLOUD]: null,
  [ECompanies.SUREPAY]: {
    country: Countries.NL,
    code: '7245002VP75ES3R96S70',
    link: 'https://lei-nederland.nl/gedetailleerde-informatie/37590705/7245002VP75ES3R96S70/surepay-b-v/',
  },
  [ECompanies.TWILIO]: {
    country: Countries.US,
    code: '5493004W8TRGD63APX93',
    link: 'https://leiworldwide.com/lei_record/5493004W8TRGD63APX93',
  },
  [ECompanies.UBIQUITI]: null,
  [ECompanies.UNISCAPE]: null,
  [ECompanies.VERCEL]: null,
  [ECompanies.VERIFF]: null,

  [ECompanies.BLOCKCHAINDOTCOM]: null,
  [ECompanies.GLASSNODE]: null,
  [ECompanies.GRAFANA]: null,
  [ECompanies.HEXNODE]: null,
  [ECompanies.KWINZO]: null,
  [ECompanies.MEMPOOL]: null,
  [ECompanies.SHIFTBASE]: null,
  [ECompanies.ZENDESK]: null,
} as const;
