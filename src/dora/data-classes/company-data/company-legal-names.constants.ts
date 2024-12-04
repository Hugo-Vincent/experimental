import { ECompanies } from '../../common/companies.enum';

const _COMPANY_LEGAL_NAMES = {
  [ECompanies.ALPHABET]: 'Alphabet Inc.',
  [ECompanies.BITVAVO]: 'Bitvavo B.V.',
  [ECompanies.BITWARDEN]: 'Bitwarden Inc.',
  [ECompanies.BLOCKCHAINDOTCOM]: 'Blockchain Ltd.',
  [ECompanies.BLOCKRISE]: 'Blockrise Capital B.V.',
  [ECompanies.BLOCKRISE_GROUP]: 'Blockrise Group B.V.',
  [ECompanies.STICHTING_BLOCKRISE]: 'Stichting Blockrise',
  [ECompanies.BLUEM]: 'Bluem B.V.',
  [ECompanies.BUNQ]: 'Bunq B.V.',
  [ECompanies.CHAINSTACK]: 'Chainstack Pte. Ltd.',
  [ECompanies.COLT]: 'Colt Technology Services B.V.',
  [ECompanies.COINGECKO]: 'Gecko Labs Pte. Ltd.',
  [ECompanies.COMPLYADVANTAGE]: 'Compliance Advantage Ltd.',
  [ECompanies.ELLIPTIC]: 'Elliptic Enterprises Ltd.',
  [ECompanies.EXPO]: '650 Industries, Inc.',
  [ECompanies.FLANTUA]: 'Flantua Accountants en Adviseurs B.V.',
  [ECompanies.GITHUB]: 'Github Inc.',
  [ECompanies.GLASSNODE]: 'Glassnode Services AG',
  [ECompanies.GOOGLE_IRELAND]: 'Google Ireland Ltd.',
  [ECompanies.GRAFANA]: 'Grafana Labs Ltd.',
  [ECompanies.HEXNODE]: 'Mitsogo Technologies Pte. Ltd.',
  [ECompanies.ING]: 'ING Bank N.V.',
  [ECompanies.KRAKEN]: 'Payward Continental Services Limited',
  [ECompanies.KWINZO]: 'Kwinzo B.V.',
  [ECompanies.LINEAR]: 'Linear Orbit Inc.',
  [ECompanies.MEMPOOL]: 'Mempool Space Co. Ltd.', // Or Mempool Space K.K. (K.K. = Kabushiki Kaisha = Co. Ltd.)
  [ECompanies.MICROSOFT]: 'Microsoft Corporation',
  [ECompanies.MICROSOFT_IRELAND]: 'Microsoft Ireland Operations Ltd.',
  [ECompanies.NEXTNOVATE]: 'NextNovate B.V.',
  [ECompanies.NOTION]: 'Notion Labs Inc.',
  [ECompanies.POSTCODEDOTNL]: 'Postcode.nl B.V.',
  [ECompanies.PAY_DOT]: 'Tintel B.V.',
  [ECompanies.QUICKNODE]: '',
  [ECompanies.SANITY]: 'Sanity US, Inc.',
  [ECompanies.SCRIVE]: 'Scrive AB', // (AB = Aktiebolag = Ltd.)
  [ECompanies.SECUROSYS]: 'Securosys SA', // (SA = Société Anonyme = Public Limited Company = PLC)
  [ECompanies.SENDGRID]: 'Sendgrid Inc.',
  [ECompanies.SENTRY]: 'Functional Software Inc.',
  [ECompanies.SHIFTBASE]: 'Shiftbase B.V.',
  [ECompanies.SLACK]: 'Slack Technologies Inc.',
  [ECompanies.SONARCLOUD]: 'SonarSource SA',
  [ECompanies.TWILIO]: 'Twilio Inc.',
  [ECompanies.UBIQUITI]: 'Ubiquiti Inc.',
  [ECompanies.UNISCAPE]: 'Uniscape B.V.',
  [ECompanies.VERCEL]: 'Vercel Inc.',
  [ECompanies.VERIFF]: 'Veriff OÜ', // (OÜ = osaühing = Ltd.)
  [ECompanies.ZENDESK]: 'Zendesk Inc.',
} as const;
export type TLegalName = typeof _COMPANY_LEGAL_NAMES[ECompanies];
export const COMPANY_LEGAL_NAMES: Record<ECompanies, TLegalName> = _COMPANY_LEGAL_NAMES;
