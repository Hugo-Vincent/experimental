import { TableEntry } from './table-entry';
import { FunctionDescriptor } from '../../classes/function';

export class EntryTable6_1 extends TableEntry {
  functionIdenfifier: FunctionDescriptor['id'];
  licensedActivity: FunctionDescriptor['licensedActivity'];
  functionName: FunctionDescriptor['name'];
  leiFinancialEntity: FunctionDescriptor['leiFinancialEntity'];
  literallyDoesntExist: 'literally doesnt exist';
  criticalityAssessment: FunctionDescriptor['criticalityAssessment'];
  reasonsForCriticality: FunctionDescriptor['reasonsForCriticality'];
  dateLastAssessment: FunctionDescriptor['dateOfLastAssessment'];
  recoveryTime: FunctionDescriptor['recoveryTime'];
  recoveryPoint: FunctionDescriptor['recoveryPoint'];
  discontinuationImpact: FunctionDescriptor['discontinuationImpact'];

  constructor(func: FunctionDescriptor) {
    super(6, 1);
    this.functionIdenfifier = func.id;
    this.licensedActivity = func.licensedActivity;
    this.functionName = func.name;
    this.leiFinancialEntity = func.leiFinancialEntity;
    this.literallyDoesntExist = 'literally doesnt exist';
    this.criticalityAssessment = func.criticalityAssessment;
    this.reasonsForCriticality = func.reasonsForCriticality;
    this.dateLastAssessment = func.dateOfLastAssessment;
    this.recoveryTime = func.recoveryTime;
    this.recoveryPoint = func.recoveryPoint;
    this.discontinuationImpact = func.discontinuationImpact;
  }
}
