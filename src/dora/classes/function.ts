import { ENTITY_ACTIVITIES, TEntityActivity, TEntityActivityKey } from '../closed-options/entity-activities.constants';
import {
  CRITICALITY_ASSESSMENT_TYPES,
  TCriticalityAssessment,
  TCriticalityAssessmentKey,
} from '../closed-options/criticality-assessment-types';
import { TDate } from '../common/general-types';
import {
  DISCONTINUATION_IMPACT_TYPES,
  TDiscontinuationImpact,
  TDiscontinuationImpactKey,
} from '../closed-options/discontinue-impact-types';
import { ECompanies } from '../common/companies.enum';
import { FUNCTION_DESCRIPTIONS } from '../function-data/function-descriptions.constants';
import { EFunctions } from '../common/functions.enum';
import { ALL_COMPANY_INSTANCES } from './instances';

export class CriticalFunction {
  id: EFunctions;
  licensedActivity: TEntityActivity;
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
    licensedActivityKey: TEntityActivityKey,
    criticalityAssessmentKey: TCriticalityAssessmentKey,
    reasonsForCriticality: string,
    dateOfLastAssessment: TDate,
    recoveryTime: number,
    recoveryPoint: number,
    discontinuationImpactKey: TDiscontinuationImpactKey,
  ) {
    this.id = id;
    this.licensedActivity = ENTITY_ACTIVITIES[licensedActivityKey];
    this.name = FUNCTION_DESCRIPTIONS[id];
    this.leiFinancialEntity = ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE].companyIdentification.code;
    this.criticalityAssessment = CRITICALITY_ASSESSMENT_TYPES[criticalityAssessmentKey];
    this.reasonsForCriticality = reasonsForCriticality;
    this.dateOfLastAssessment = dateOfLastAssessment;
    this.recoveryTime = recoveryTime;
    this.recoveryPoint = recoveryPoint;
    this.discontinuationImpact = DISCONTINUATION_IMPACT_TYPES[discontinuationImpactKey];
  }
}
