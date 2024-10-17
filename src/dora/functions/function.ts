import { ENTITY_ACTIVITIES, TEntityActivity, TEntityActivityKey } from './constants/entity-activities.constants';
import {
  CRITICALITY_ASSESSMENT_TYPES,
  TCriticalityAssessment,
  TCriticalityAssessmentKey,
} from './constants/criticality-assessment-types';
import { TDate } from '../common/general-types';
import {
  DISCONTINUATION_IMPACT_TYPES,
  TDiscontinuationImpact,
  TDiscontinuationImpactKey,
} from './constants/discontinue-impact-types';
import { ALL_COMPANY_INSTANCES } from '../companies/company-instances.constants';
import { ECompanies } from '../common/companies.enum';
import { FUNCTION_DESCRIPTIONS } from './function-data/function-descriptions.constants';
import { EFunctions } from './constants/functions.enum';

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
