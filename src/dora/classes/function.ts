import { TEntityActivity, TEntityActivityKey } from '../data-classes/closed-options/entity-activities.constants';
import {
  CRITICALITY_ASSESSMENT_TYPES,
  TCriticalityAssessment,
  TCriticalityAssessmentKey,
} from '../data-classes/closed-options/criticality-assessment-types';
import { TDate } from '../common/general-types';
import {
  DISCONTINUATION_IMPACT_TYPES,
  TDiscontinuationImpact,
  TDiscontinuationImpactKey,
} from '../data-classes/closed-options/discontinue-impact-types';
import { ECompanies } from '../common/companies.enum';
import { EFunctions } from '../common/functions.enum';
import { FUNCTION_DESCRIPTIONS } from '../data-classes/function-data/function-descriptions.constants';
import { ALL_COMPANY_INSTANCES } from '../data-classes/instance-data/company-instances';
import { Nullable } from '../../types/types';
import { Company } from './company';
import { FUNCTION_LICENSED_ACTIVITIES } from '../data-classes/function-data/function-licensed-acitivities.constants';

export class FunctionDescriptor {
  // ID and references
  id: EFunctions;
  tpspInstances: Company[];

  // Data
  licensedActivity: Nullable <TEntityActivity>;
  name: string;
  leiFinancialEntity: string;
  criticalityAssessment: TCriticalityAssessment;
  reasonsForCriticality: string;
  dateOfLastAssessment: TDate;
  recoveryTime: number;
  recoveryPoint: number;
  discontinuationImpact: TDiscontinuationImpact;

  constructor(
    id: EFunctions,
    criticalityAssessmentKey: TCriticalityAssessmentKey,
    reasonsForCriticality: string,
    dateOfLastAssessment: TDate,
    recoveryTime: number,
    recoveryPoint: number,
    discontinuationImpactKey: TDiscontinuationImpactKey,
  ) {
    this.id = id;
    this.name = FUNCTION_DESCRIPTIONS[id];
    this.licensedActivity = FUNCTION_LICENSED_ACTIVITIES[id];
    this.leiFinancialEntity = ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE].companyIdentification.code;
    this.criticalityAssessment = CRITICALITY_ASSESSMENT_TYPES[criticalityAssessmentKey];
    this.reasonsForCriticality = reasonsForCriticality;
    this.dateOfLastAssessment = dateOfLastAssessment;
    this.recoveryTime = recoveryTime;
    this.recoveryPoint = recoveryPoint;
    this.discontinuationImpact = DISCONTINUATION_IMPACT_TYPES[discontinuationImpactKey];
    this.tpspInstances = [];
  }
}
