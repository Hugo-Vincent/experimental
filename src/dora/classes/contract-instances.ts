import { TCriticalTPSP } from './company-instances';
import { Contract } from './contract';
import { ECompanies } from '../common/companies.enum';

const bunq = new Contract(
  ECompanies.BUNQ,
  19,
  'No',
  null,
  null,
);
const complyAdvantage = new Contract(
  ECompanies.COMPLYADVANTAGE,
  19,
  'No',
  null,
  null,
);
const elliptic = new Contract(
  ECompanies.ELLIPTIC,
  19,
  'No',
  null,
  null
);
const googleIreland = new Contract(
  ECompanies.GOOGLE_IRELAND,
  17,
  'No',
  null,
  null
);
const microsoft = new Contract(
  ECompanies.MICROSOFT,
  19,
  'No',
  null,
  null
);
const securosys = new Contract(
  ECompanies.SECUROSYS,
  19,
  'No',
  null,
  null
);
const vercel = new Contract(
  ECompanies.VERCEL,
  18,
  'No',
  null,
  null
);

export const CRITICAL_CONTRACTS: {
  [K in TCriticalTPSP]: Contract<K>
} = {
  [ECompanies.BUNQ]: bunq,
  [ECompanies.COMPLYADVANTAGE]: complyAdvantage,
  [ECompanies.ELLIPTIC]: elliptic,
  [ECompanies.GOOGLE_IRELAND]: googleIreland,
  [ECompanies.MICROSOFT]: microsoft,
  [ECompanies.SECUROSYS]: securosys,
  [ECompanies.VERCEL]: vercel,
};
export const CRITICAL_CONTRACTS_ARRAY = Object.values(CRITICAL_CONTRACTS);
