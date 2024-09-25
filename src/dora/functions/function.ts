import { ENTITY_ACTIVITIES, TEntityActivity, TEntityActivityKey } from './constants/entity-activities.constants';
import {
  CRITICALITY_ASSESSMENT_TYPES,
  TCriticalityAssessment,
  TCriticalityAssessmentKey,
} from './constants/criticality-assessment-types';
import { TDate } from '../general/general-types';
import {
  DISCONTINUATION_IMPACT_TYPES,
  TDiscontinuationImpact,
  TDiscontinuationImpactKey,
} from './constants/discontinue-impact-types';
import { ALL_COMPANY_INSTANCES } from '../companies/company-instances.constants';
import { ECompanies } from '../companies/constants/companies.enum';

export class CriticalFunction {
  id: `FUNCTION_${number}`;
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
    id: number,
    licensedActivityKey: TEntityActivityKey,
    name: string,
    criticalityAssessmentKey: TCriticalityAssessmentKey,
    reasonsForCriticality: string,
    dateOfLastAssessment: TDate,
    recoveryTime: number,
    recoveryPoint: number,
    discontinuationImpactKey: TDiscontinuationImpactKey,
  ) {
    this.id = `FUNCTION_${id}`;
    this.licensedActivity = ENTITY_ACTIVITIES[licensedActivityKey];
    this.name = name;
    this.leiFinancialEntity = ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE].companyIdentification.code;
    this.criticalityAssessment = CRITICALITY_ASSESSMENT_TYPES[criticalityAssessmentKey];
    this.reasonsForCriticality = reasonsForCriticality;
    this.dateOfLastAssessment = dateOfLastAssessment;
    this.recoveryTime = recoveryTime;
    this.recoveryPoint = recoveryPoint;
    this.discontinuationImpact = DISCONTINUATION_IMPACT_TYPES[discontinuationImpactKey];
  }
}
