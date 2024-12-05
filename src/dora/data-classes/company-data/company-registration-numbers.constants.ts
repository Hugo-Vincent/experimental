import { ECompanies } from '../../common/companies.enum';
import { Nullable } from '../../../types/types';
import { ICompanyIndentification } from '../../common/interfaces/company-id.interface';
import { Countries } from '../../common/countries.enum';
import { COMPANY_COUNTRY_CODES } from './company-country-codes.constants';

export const COMPANY_CRN_CODES: Record<
  ECompanies,
  Nullable<ICompanyIndentification>
> = {
  // Netherlands - KVK - KVK Nummer
  [ECompanies.BITVAVO]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.BITVAVO],
    code: '68743424',
    link: 'https://www.kvk.nl/bestellen/#/68743424/',
  },
  [ECompanies.BLOCKRISE]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.BLOCKRISE],
    code: '74879782',
    link: 'https://www.kvk.nl/bestellen/#/74879782/',
  },
  [ECompanies.BLOCKRISE_GROUP]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.BLOCKRISE_GROUP],
    code: '87242311',
    link: 'https://www.kvk.nl/bestellen/#/87242311/',
  },
  [ECompanies.STICHTING_BLOCKRISE]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.STICHTING_BLOCKRISE],
    code: '86823728',
    link: 'https://www.kvk.nl/bestellen/#/86823728/',
  },
  [ECompanies.BUNQ]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.BUNQ],
    code: '54992060',
    link: 'https://www.kvk.nl/bestellen/#/54992060/',
  },
  [ECompanies.BLUEM]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.BLUEM],
    code: '32081330',
    link: 'https://www.kvk.nl/bestellen/#/32081330000012672483',
  },
  [ECompanies.FLANTUA]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.FLANTUA],
    code: '53179455',
    link: 'https://www.kvk.nl/bestellen/#/53179455000023058684',
  },
  [ECompanies.ING]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.ING],
    code: '33031431',
    link: 'https://www.kvk.nl/bestellen/#/33031431000019531656',
  },
  [ECompanies.KWINZO]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.KWINZO],
    code: '92088805',
    link: 'https://www.kvk.nl/bestellen/#/92088805000057733570',
  },
  [ECompanies.NEXTNOVATE]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.NEXTNOVATE],
    code: '67656684',
    link: 'https://www.kvk.nl/bestellen/#/67656684000011865849/'
  },
  [ECompanies.PAY_DOT]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.PAY_DOT],
    code: '24283498',
    link: 'https://www.kvk.nl/bestellen/#/24283498/',
  },
  [ECompanies.POSTCODEDOTNL]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.POSTCODEDOTNL],
    code: '34185878',
    link: 'https://www.kvk.nl/bestellen/#/34185878',
  },
  [ECompanies.SHIFTBASE]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.SHIFTBASE],
    code: '59514701',
    link: 'https://www.kvk.nl/bestellen/#/59514701000021590567',
  },
  [ECompanies.UNISCAPE]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.UNISCAPE],
    code: '59444797',
    link: 'https://www.kvk.nl/bestellen/#/59444797000028742621',
  },

  // Singapore - Accounting and Corporate Regulatory Authority (ARCA) - Unique Entity Number (UEN)
  [ECompanies.CHAINSTACK]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.CHAINSTACK],
    code: '201813548K',
    link: 'https://www.sgpbusiness.com/company/Chainstack-Pte-Ltd',
  },
  [ECompanies.COINGECKO]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.COINGECKO],
    code: '201510008G',
    link: 'https://www.coingecko.com/en/terms',
  },

  // UK - Companies House - Company Registration Number (CRN)
  [ECompanies.BLOCKCHAINDOTCOM]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.BLOCKCHAINDOTCOM],
    code: '08858277',
    link: 'https://find-and-update.company-information.service.gov.uk/company/08858277',
  },
  [ECompanies.COMPLYADVANTAGE]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.COMPLYADVANTAGE],
    code: '11654191',
    link: 'https://find-and-update.company-information.service.gov.uk/company/11654191',
  },
  [ECompanies.ELLIPTIC]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.ELLIPTIC],
    code: '08458210',
    link: 'https://find-and-update.company-information.service.gov.uk/company/08458210',
  },
  [ECompanies.GRAFANA]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.GRAFANA],
    code: '10856224',
    link: 'https://find-and-update.company-information.service.gov.uk/company/10856224',
  },

  // Ireland - Companies Registration Office - Company Number
  [ECompanies.KRAKEN]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.KRAKEN],
    code: '701536', // Ireland CRO
    link: 'https://core.cro.ie/search', // Search for "Payward"
  },
  [ECompanies.MICROSOFT_IRELAND]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.MICROSOFT_IRELAND],
    code: '',
    link: '',
  },

  // Sweden - Swedish Companies Registration Office - Registration Number
  // [ECompanies.SCRIVE]: {
  //   country: Countries.SE,
  //   code: '556816-6804',
  //   link: 'https://foretagsinfo.bolagsverket.se/sok-foretagsinformation-web/foretag/5568166804/foretagsform/AB',
  // },

  // Switzerland - Swiss Commercial Registry - Company Identification Number (UID, for Unternehmens-Identifikationsnummer)
  [ECompanies.GLASSNODE]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.GLASSNODE],
    code: 'CHE297410093',
    link: 'https://www.zefix.ch/en/search/entity/list/firm/1505165',
  },
  [ECompanies.SONARCLOUD]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.SECUROSYS],
    code: 'CHE114587664', // Switzerland UID
    link: 'https://www.zefix.ch/en/search/entity/list/firm/926929',
  },
  [ECompanies.SECUROSYS]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.SECUROSYS],
    code: 'CHE464234583', // Switzerland UID
    link: 'https://www.zefix.ch/en/search/entity/list/firm/926929',
  },

  // Estonia - Commercial Register (Äriregister) of the Estonian Centre of Registers and Information Systems (RIK) - Registration Code
  [ECompanies.VERIFF]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.VERIFF],
    code: '12932944',
    link: 'https://ariregister.rik.ee/eng/company/12932944/Veriff-O%C3%9C?search_id=e5b6efe&pos=1',
  },

  // Japan
  [ECompanies.MEMPOOL]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.MEMPOOL],
    code: '2220001023983',
    link: 'https://asiaverify.com/', // Search "Mempool". Can't use JP CRN website, get Blocked
  },

  // USA
  // California (San Francisco) - Business Account Number
  [ECompanies.BITWARDEN]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.BITWARDEN],
    code: '1146312',
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  // [ECompanies.CLOUDFLARE]: {
  //   country: Countries.US,
  //   code: '0460442',
  //   link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  // },
  [ECompanies.EXPO]: null,
  [ECompanies.GITHUB]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.GITHUB],
    code: '0456831',
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.HEXNODE]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.HEXNODE],
    code: '1101827',
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.LINEAR]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.LINEAR],
    code: '1100568',
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.NOTION]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.NOTION],
    code: '0480836',
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.SANITY]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.SANITY],
    code: '1128541',
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.SENTRY]: null,
  // [ECompanies.SENTRY]: {
  //   country: Countries.US,
  //   code: '1016210',
  //   link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  // },
  // [ECompanies.SLACK]: {
  //   country: Countries.US,
  //   code: '0453681',
  //   link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  // },
  [ECompanies.SLACK]: null,
  // [ECompanies.TWILIO]: {
  //   country: Countries.US,
  //   code: '0447370',
  //   link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  // },
  [ECompanies.TWILIO]: null,
  [ECompanies.VERCEL]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.VERCEL],
    code: '1073781',
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.ZENDESK]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.ZENDESK],
    code: '0444588',
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.ALPHABET]: null, // Google Parent Company
  // [ECompanies.GOOGLE]: null, // Registered in multiple states with multiple codes it seems
  [ECompanies.GOOGLE_IRELAND]: null, // Registered in multiple states with multiple codes it seems

  // Florida - Registration number
  [ECompanies.QUICKNODE]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.QUICKNODE],
    // Quicknode does not show up in the official Florida SoS government website
    // https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResults/EntityName/Quicknode/Page1?searchNameOrder=QUICKNODE
    // They mention literally nothing on their website, and their terms of service document is a joke.
    // Only thing I could find is QuickNode LLC, and a document saying how it converted to QuickNode Inc. in 2021.
    code: '6032866',
    link: 'https://trademarks.justia.com/886/12/quiknode-88612857.html',
  },

  // New York - DOS ID
  [ECompanies.UBIQUITI]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.UBIQUITI],
    code: '4803376',
    link: 'https://apps.dos.ny.gov/publicInquiry/',
  },

  // Washington - UBI Number
  [ECompanies.MICROSOFT]: {
    country: COMPANY_COUNTRY_CODES[ECompanies.MICROSOFT],
    code: '600413485',
    link: 'https://ccfs.sos.wa.gov/#/BusinessSearch',
  },

  // Colorado - ID Number
  // [ECompanies.SENDGRID]: {
  //   country: Countries.US,
  //   code: '20091597249',
  //   link: 'https://www.sos.state.co.us/biz/BusinessEntityDetail.do?quitButtonDestination=BusinessEntityResults&nameTyp=ENT&masterFileId=20091597249&entityId2=20091597249&fileId=20091597249&srchTyp=ENTITY',
  // },
} as const;
