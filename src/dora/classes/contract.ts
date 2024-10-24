import {
  CONTRACTUAL_ARRANGEMENT_TYPES,
  TContractualArrangement, TContractualArrangementKey,
} from '../closed-options/contractual-arrangement-types.constants';
import { Currencies } from '../common/currencies.enum';
import { Company } from './company';
import { TDate } from '../common/general-types';
import { CONTRACT_TERMINATION_REASONS, TTerminationReason } from '../closed-options/termination-reasons';
import { Countries } from '../common/countries.enum';
import {
  CONTRACT_RELIANCE_LEVELS,
  TRelianceLevel,
  TRelianceLevelKey,
} from '../closed-options/reliance-levels';
import { ICT_SERVICE_TYPES, TICTService, TICTServiceKey } from '../closed-options/ict-service-types';
import { ECompanies } from '../common/companies.enum';
import { ALL_COMPANY_INSTANCES } from './company-instances';

export class Contract {
  tpsp: Company;
  financialEntityLei: string;

  // Table 02.01
  referenceNumber: string;
  contractType: TContractualArrangement;
  overarchingContractualArrangementReferenceNumber: string;
  annualCostcurrency: Currencies;
  annualExpense: number;

  // Table 02.02
  functionIdentifier: string;
  ictServicesType: TICTService;
  start: TDate;
  end: TDate;
  reasonForTermination: TTerminationReason | '';

  // How many days at least we must give tpsp before we cancel a contract with them.
  noticePeriodFinEntity: number;
  // How many days the tpsp must give us before they cancel their contract with us.
  noticePeriodTpsp: number;
  // Which country's law applies to contract.
  contractGoverningLawCountry: Countries;
  provisionCountry: Countries;
  // Is ICT service related to storage of data?
  storageOfData: 'Yes' | 'No';
  dataLocation: Countries | '';
  processingLocation: Countries | '';
  dataSensitivity: 'Low or Medium' | 'High';
  relianceLevel: TRelianceLevel;

  constructor(
    referenceNumber: string,
    contractTypeKey: TContractualArrangementKey,
    annualCostcurrency: Currencies,
    annualExpense: number,
    functionIdentifier: string,
    ictServicesTypeKey: TICTServiceKey,
    start: TDate,
    end: TDate,
    noticePeriodFinEntity: number,
    noticePeriodTpsp: number,
    contractGoverningLawCountry: Countries,
    provisionCountry: Countries,
    storageOfData: 'Yes' | 'No',
    dataSensitivity: 'Low or Medium' | 'High',
    relianceLevelKey: TRelianceLevelKey,

    overArchingRefNumber?: string,
    terminationReasonNumber?: TICTServiceKey,
    dataLocation?: Countries,
    processingLocation?: Countries,
  ) {
    this.financialEntityLei = ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE].companyIdentification.code;
    this.referenceNumber = referenceNumber;
    this.contractType = CONTRACTUAL_ARRANGEMENT_TYPES[contractTypeKey];
    this.annualCostcurrency = annualCostcurrency;
    this.annualExpense = annualExpense;
    this.functionIdentifier = functionIdentifier;
    this.ictServicesType = ICT_SERVICE_TYPES[ictServicesTypeKey];
    this.start = start;
    this.end = end;
    this.noticePeriodFinEntity = noticePeriodFinEntity;
    this.noticePeriodTpsp = noticePeriodTpsp;
    this.contractGoverningLawCountry = contractGoverningLawCountry;
    this.provisionCountry = provisionCountry;
    this.storageOfData = storageOfData;
    this.dataSensitivity = dataSensitivity;
    this.relianceLevel = CONTRACT_RELIANCE_LEVELS[relianceLevelKey];

    // Optional things
    if (contractTypeKey === 3) {
      if (!overArchingRefNumber) throw new Error('Need OverArching Contract ref number');
      this.overarchingContractualArrangementReferenceNumber = overArchingRefNumber;
    } else {
      this.overarchingContractualArrangementReferenceNumber = '';
    }
    this.reasonForTermination = terminationReasonNumber ? CONTRACT_TERMINATION_REASONS[terminationReasonNumber] : '';
    if (storageOfData === 'Yes') {
      if (!dataLocation) throw new Error('Need data location');
      this.dataLocation = dataLocation;
    } else {
      this.dataLocation = '';
    }
    this.processingLocation = processingLocation ?? '';
  }
}
