import { TDate } from 'src/util/types/generic-types';
import { EContracts } from '../common/contracts.enum';
import { Currencies } from '../common/currencies.enum';

export const CONTRACT_COSTS: Record<EContracts, { annualCost: number, annualCostCurrency: Currencies, start: TDate }> = {
  [EContracts.BUNQ]: { // Jos Slack
    annualCost: 60000,
    annualCostCurrency: Currencies.EUR,
    start: '2022-12-28',
  },
  [EContracts.COMPLYADVANTAGE]: { // Jos Slack
    annualCost: 1200,
    annualCostCurrency: Currencies.USD,
    start: '2021-12-15'
  },
  [EContracts.ELLIPTIC]: { // Contract
    annualCost: 10000,
    annualCostCurrency: Currencies.USD,
    start: '2021-05-11'
  },
  [EContracts.GOOGLE_IRELAND]: { // Jasper Slack
    annualCost: 7200,
    annualCostCurrency: Currencies.EUR,
    start: '2020-12-01'
  },
  [EContracts.MICROSOFT]: { // Jos Slack
    annualCost: 3250,
    annualCostCurrency: Currencies.EUR,
    start: '2022-05-13'
  },
  [EContracts.SECUROSYS]: { // Contract
    annualCost: 9488,
    annualCostCurrency: Currencies.EUR,
    start: '2020-09-01'
  },
  [EContracts.VERCEL]: { // Martijn Slack
    annualCost: 720,
    annualCostCurrency: Currencies.USD,
    start: '2023-11-01'
  },

  [EContracts.AFAS]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.BITVAVO]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.BITWARDEN]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.CHAINSTACK]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.HEXNODE]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.KRAKEN]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.KWINZO]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.NOTION]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.SANITY]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.SENDGRID]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.TWILIO]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.UBIQUITI]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.ZENDESK]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.GLASSNODE]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.GRAFANA]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.BLOCKCHAINDOTCOM]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.COINGECKO]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.COLT]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.GITHUB]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.GOOGLE]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.IDIN]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.ING]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.LINEAR]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.MEMPOOL]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.NEXTNOVATE]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.PAY_DOT]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.POSTCODEAPI]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.QUICKNODE]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.SCRIVE]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.SENTRY]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.SHIFTBASE]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.SLACK]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.SONARCLOUD]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.SUREPAY]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.UNISCAPE]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
  [EContracts.VERIFF]: { annualCost: undefined, annualCostCurrency: undefined, start: undefined },
};
