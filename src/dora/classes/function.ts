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
import { EFunctions } from '../common/functions.enum';
import { FUNCTION_DESCRIPTIONS } from '../function-data/function-descriptions.constants';
import { ALL_COMPANY_INSTANCES } from './company-instances';
import { Nullable } from '../../types/types';
import { Company } from './company';

export class FunctionDescriptor {
  id: EFunctions;
  licensedActivity: Nullable <TEntityActivity>;
  name: string;
  leiFinancialEntity: string;
  criticalityAssessment: TCriticalityAssessment;
  reasonsForCriticality: string;
  dateOfLastAssessment: TDate;
  recoveryTime: number;
  recoveryPoint: number;
  discontinuationImpact: TDiscontinuationImpact;
  companies: Company[];

  constructor(
    id: EFunctions,
    licensedActivityKey: Nullable<TEntityActivityKey>,
    criticalityAssessmentKey: TCriticalityAssessmentKey,
    reasonsForCriticality: string,
    dateOfLastAssessment: TDate,
    recoveryTime: number,
    recoveryPoint: number,
    discontinuationImpactKey: TDiscontinuationImpactKey,
  ) {
    this.id = id;
    this.licensedActivity = licensedActivityKey ? ENTITY_ACTIVITIES[licensedActivityKey] : null;
    this.name = FUNCTION_DESCRIPTIONS[id];
    this.leiFinancialEntity = ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE].companyIdentification.code;
    this.criticalityAssessment = CRITICALITY_ASSESSMENT_TYPES[criticalityAssessmentKey];
    this.reasonsForCriticality = reasonsForCriticality;
    this.dateOfLastAssessment = dateOfLastAssessment;
    this.recoveryTime = recoveryTime;
    this.recoveryPoint = recoveryPoint;
    this.discontinuationImpact = DISCONTINUATION_IMPACT_TYPES[discontinuationImpactKey];
    this.companies = [];
  }
}
