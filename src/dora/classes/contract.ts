import {
  CONTRACTUAL_ARRANGEMENT_TYPES,
  TContractualArrangement,
  TContractualArrangementKey,
} from '../closed-options/contractual-arrangement-types.constants';
import { Currencies } from '../common/currencies.enum';
import { TDate } from '../common/general-types';
import { CONTRACT_TERMINATION_REASONS, TTerminationReason } from '../closed-options/termination-reasons';
import { Countries } from '../common/countries.enum';
import { CONTRACT_RELIANCE_LEVELS, TRelianceLevel, TRelianceLevelKey } from '../closed-options/reliance-levels';
import { ICT_SERVICE_TYPES, TICTService, TICTServiceKey } from '../closed-options/ict-service-types';
import { ECompanies } from '../common/companies.enum';
import { ALL_COMPANY_INSTANCES } from './company-instances';
import { EContracts } from '../common/contracts.enum';
import { CONTRACT_COSTS } from '../contract-data/contract-costs.constants';
import { Company } from './company';
import { FunctionDescriptor } from './function';
import { EFunctions } from '../common/functions.enum';

export class Contract<T extends ECompanies = ECompanies> {
  tpspEnum: T;
  tpspInstance: Company;
  functionDescriptorInstances: FunctionDescriptor[];
  financialEntityLei: string;

  // Table 02.01
  referenceNumber: EContracts;
  contractType: TContractualArrangement;
  overarchingContractualArrangementReferenceNumber: string;
  annualCostcurrency: Currencies;
  annualExpense: number;

  // Table 02.02
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
    tpspEnum: T,
    ictServicesTypeKey: TICTServiceKey,
    storageOfData: 'Yes' | 'No',
    dataSensitivity: 'Low or Medium' | 'High',
    relianceLevelKey: TRelianceLevelKey,
    noticePeriodFinEntity = 9999,
    noticePeriodTpsp = 9999,
    contractGoverningLawCountry = Countries.UNKNOWN,
    provisionCountry = Countries.UNKNOWN,
    end: TDate = '9999-12-31',
    contractTypeKey: TContractualArrangementKey = 1,
    overArchingRefNumber?: string,
    terminationReasonNumber?: TICTServiceKey,
    dataLocation = Countries.UNKNOWN,
    processingLocation = Countries.UNKNOWN,
  ) {
    this.tpspEnum = tpspEnum;
    this.financialEntityLei = ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE].companyIdentification.code;
    this.referenceNumber = EContracts[tpspEnum as ECompanies];
    this.contractType = CONTRACTUAL_ARRANGEMENT_TYPES[contractTypeKey];
    this.annualCostcurrency = CONTRACT_COSTS[this.referenceNumber].annualCostCurrency;
    this.annualExpense = CONTRACT_COSTS[this.referenceNumber].annualCost;
    this.start = CONTRACT_COSTS[this.referenceNumber].start;
    this.ictServicesType = ICT_SERVICE_TYPES[ictServicesTypeKey];
    this.end = end;
    this.noticePeriodFinEntity = noticePeriodFinEntity;
    this.noticePeriodTpsp = noticePeriodTpsp;
    this.contractGoverningLawCountry = contractGoverningLawCountry;
    this.provisionCountry = provisionCountry;
    this.storageOfData = storageOfData;
    this.dataSensitivity = dataSensitivity;
    this.relianceLevel = CONTRACT_RELIANCE_LEVELS[relianceLevelKey];

    // References
    this.tpspInstance = ALL_COMPANY_INSTANCES[tpspEnum];
    this.tpspInstance.contract = this;

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

  get functionIdentifiers(): EFunctions[] {
    return this.functionDescriptorInstances.map(x => x.id);
  }
}
