import {
  CONTRACTUAL_ARRANGEMENT_TYPES,
  TContractualArrangement,
  TContractualArrangementKey,
} from '../data-classes/closed-options/contractual-arrangement-types.constants';
import { Currencies } from '../common/currencies.enum';
import { TDate } from '../common/general-types';
import { CONTRACT_TERMINATION_REASONS, TTerminationReason } from '../data-classes/closed-options/termination-reasons';
import { Countries } from '../common/countries.enum';
import {
  CONTRACT_RELIANCE_LEVELS,
  TRelianceLevel,
  TRelianceLevelKey,
} from '../data-classes/closed-options/reliance-levels';
import { TICTService, TICTServiceKey } from '../data-classes/closed-options/ict-service-types';
import { ECompanies } from '../common/companies.enum';
import { EContracts } from '../common/contracts.enum';
import { CONTRACT_COSTS } from '../data-classes/contract-data/contract-costs.constants';
import { Company } from './company';
import { CONTRACT_ICT_SERVICE_TYPES } from '../data-classes/contract-data/contract-ict-service-type.constants';
import { ALL_COMPANY_INSTANCES } from '../data-classes/instance-data/company-instances';
import { TSubstitutability } from '../data-classes/closed-options/substitutability.types';
import {
  CONTRACT_SUBSTITUTABILITY,
  CONTRACT_SUBSTITUTABILITY_COMPLEX_REASONS,
} from '../data-classes/contract-data/contract-substitutability.constants';
import { ICompanyIndentification } from '../common/interfaces/company-id.interface';
import {
  SUBSTITUTABILITY_REASONS,
  TSubstitutabilityReason, TSubstitutabilityReasonKey,
} from '../data-classes/closed-options/substitutability-reasons.types';

export class Contract {
  // ID and references
  id: EContracts;
  tpspInstance: Company;

  // Data
  financialEntityLei: string;
  contractType: TContractualArrangement;
  overarchingContractualArrangementReferenceNumber: string;
  annualCostcurrency: Currencies;
  annualExpense: number;

  // 02.02
  ictServicesType: TICTService;
  start: TDate;
  end: TDate;
  reasonForTermination: TTerminationReason | '';

  // 03.01
  contractUser: ICompanyIndentification['code'];
  contractSigner: ICompanyIndentification['code'];


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


  // 07.01
  substitutability: TSubstitutability;
  reasonSubstitutability: TSubstitutabilityReason;
  lastAuditDate: TDate;
  exitPlanExists: 'Yes' | 'No';


  constructor(
    id: EContracts,
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
    // References
    this.id = id;

    // Contract data
    this.financialEntityLei = ALL_COMPANY_INSTANCES[
      id === EContracts.BUNQ_BLOCKRISE_STICHTING
        ? ECompanies.STICHTING_BLOCKRISE
        : ECompanies.BLOCKRISE
      ].companyIdentification.code;
    this.contractType = CONTRACTUAL_ARRANGEMENT_TYPES[contractTypeKey];
    this.annualCostcurrency = CONTRACT_COSTS[this.id].annualCostCurrency;
    this.annualExpense = CONTRACT_COSTS[this.id].annualCost;
    this.start = CONTRACT_COSTS[this.id].start;
    this.ictServicesType = CONTRACT_ICT_SERVICE_TYPES[this.id]
    this.end = end;
    this.noticePeriodFinEntity = noticePeriodFinEntity;
    this.noticePeriodTpsp = noticePeriodTpsp;
    this.contractGoverningLawCountry = contractGoverningLawCountry;
    this.provisionCountry = provisionCountry;
    this.storageOfData = storageOfData;
    this.dataSensitivity = dataSensitivity;
    this.relianceLevel = CONTRACT_RELIANCE_LEVELS[relianceLevelKey];

    this.contractUser = ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE].companyIdentification.code;
    this.contractSigner = ALL_COMPANY_INSTANCES[id === EContracts.SECUROSYS ? ECompanies.STICHTING_BLOCKRISE : ECompanies.BLOCKRISE].companyIdentification.code;

    this.substitutability = CONTRACT_SUBSTITUTABILITY[this.id];
    this.reasonSubstitutability = id in CONTRACT_SUBSTITUTABILITY_COMPLEX_REASONS ? CONTRACT_SUBSTITUTABILITY_COMPLEX_REASONS[id] : '';
    this.lastAuditDate = '9999-12-31';
    this.exitPlanExists = 'Yes';

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

  get functionIdentifiers(): string {
    let functionIdentifierPattern = '';
    const functionIds = this.tpspInstance.functions.map(x => x.id);
    for (let i = 0; i < functionIds.length; i++) {
      functionIdentifierPattern += functionIds[i];
      if (i !== functionIds.length - 1) {
        functionIdentifierPattern += ', ';
      }
    }
    return functionIdentifierPattern;
  }
}
