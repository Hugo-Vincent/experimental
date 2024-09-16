import { ECompanies } from '../../enums/companies.enum';
import { Nullable } from '../../../types/types';
import { ICompanyIndentification } from '../interfaces/company-id.interface';

export const COMPANY_CRN_CODES: Record<
  ECompanies,
  Nullable<ICompanyIndentification>
> = {
  // Netherlands
  [ECompanies.AFAS]: {
    code: '31046821', // Netherlands KVK
    link: 'https://www.kvk.nl/bestellen/#/31046821/',
  },
  [ECompanies.BITVAVO]: {
    code: '68743424', // Netherlands KVK
    link: 'https://www.kvk.nl/bestellen/#/68743424/',
  },
  [ECompanies.BLOCKRISE]: {
    code: '74879782', // Netherlands KVK
    link: 'https://www.kvk.nl/bestellen/#/74879782/',
  },
  [ECompanies.BUNQ]: {
    code: '54992060', // Netherlands KVK
    link: 'https://www.kvk.nl/bestellen/#/54992060/',
  },
  [ECompanies.IDIN]: {
    code: '67439594', // Netherlands KVK
    link: 'https://www.kvk.nl/bestellen/#/67439594/',
  },
  [ECompanies.PAY_DOT]: {
    code: '24283498', // Netherlands KVK
    link: 'https://www.kvk.nl/bestellen/#/24283498/',
  },
  [ECompanies.POSTCODEAPI]: {
    code: '68503326', // Netherlands KVK
    link: 'https://www.kvk.nl/bestellen/#/68503326/',
  },
  [ECompanies.SUREPAY]: {
    code: '77251733', // Netherlands KVK
    link: 'https://www.kvk.nl/bestellen/#/77251733/',
  },

  // Singapore
  [ECompanies.CHAINSTACK]: {
    code: '201813548K', // Singapore UEN
    link: 'https://www.sgpbusiness.com/company/Chainstack-Pte-Ltd',
  },
  [ECompanies.COINGECKO]: {
    code: '201510008G', // Singapore UEN
    link: 'https://www.coingecko.com/en/terms',
  },

  // UK
  [ECompanies.COMPLYADVANTAGE]: {
    code: '11654191', // UK CRN
    link: 'https://find-and-update.company-information.service.gov.uk/company/11654191',
  },
  [ECompanies.COLT]: {
    code: '03218510', // UK CRN
    link: 'https://find-and-update.company-information.service.gov.uk/company/03218510',
  },
  [ECompanies.ELLIPTIC]: {
    code: '08458210', // UK CRN
    link: 'https://find-and-update.company-information.service.gov.uk/company/08458210',
  },

  // Ireland
  [ECompanies.KRAKEN]: {
    code: '701536', // Ireland CRO
    link: 'https://core.cro.ie/search',
  },

  // Sweden
  [ECompanies.SCRIVE]: {
    code: '556816-6804', // Sweden Registration Number
    link: 'https://foretagsinfo.bolagsverket.se/sok-foretagsinformation-web/foretag/5568166804/foretagsform/AB',
  },

  // Switzerland
  [ECompanies.SONARCLOUD]: {
    code: 'CHE114587664', // Switzerland UID
    link: 'https://www.zefix.ch/en/search/entity/list/firm/926929',
  },
  [ECompanies.SECUROSYS]: {
    code: 'CHE464234583', // Switzerland UID
    link: 'https://www.zefix.ch/en/search/entity/list/firm/926929',
  },

  // Estonia
  [ECompanies.VERIFF]: {
    code: '12932944', // Estonia Registration Code
    link: 'https://ariregister.rik.ee/eng/company/12932944/Veriff-O%C3%9C?search_id=e5b6efe&pos=1',
  },

  // USA
  // California
  [ECompanies.BITWARDEN]: {
    code: '1146312', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.CLOUDFLARE]: {
    code: '0460442', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.GITHUB]: {
    code: '0456831', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.LINEAR]: {
    code: '1100568', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.NOTION]: {
    code: '0480836', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.SANITY]: {
    code: '1128541', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.SENTRY]: {
    code: '1016210', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.SLACK]: {
    code: '0453681', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.TWILIO]: {
    code: '0447370', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.VERCEL]: {
    code: '1073781', // California Business Account Number
    link: 'https://data.sfgov.org/widgets/g8m3-pdis',
  },
  [ECompanies.GOOGLE]: null, // Registered in multiple states with multiple codes it seems

  // New York
  [ECompanies.UNIFI]: {
    code: '4803376', // New York DOS ID
    link: 'https://apps.dos.ny.gov/publicInquiry/',
  },

  // Washington
  [ECompanies.MICROSOFT]: {
    code: '600413485', // Washington UBI Number
    link: 'https://ccfs.sos.wa.gov/#/BusinessSearch',
  },

  // Colorado
  [ECompanies.SENDGRID]: {
    code: '20091597249', // Colorado ID Number
    link: 'https://www.sos.state.co.us/biz/BusinessEntityDetail.do?quitButtonDestination=BusinessEntityResults&nameTyp=ENT&masterFileId=20091597249&entityId2=20091597249&fileId=20091597249&srchTyp=ENTITY',
  },
};
