import { TableEntry } from './table-entry';
import { CriticalFunction } from '../../functions/function';

export class EntryTable6_1 extends TableEntry {
  functionIdenfifier: CriticalFunction['id'];
  licensedActivity: CriticalFunction['licensedActivity'];
  functionName: CriticalFunction['name'];
  leiFinancialEntity: CriticalFunction['leiFinancialEntity'];
  criticalityAssessment: CriticalFunction['criticalityAssessment'];
  reasonsForCriticality: CriticalFunction['reasonsForCriticality'];
  dateLastAssessment: CriticalFunction['dateOfLastAssessment'];
  recoveryTime: CriticalFunction['recoveryTime'];
  recoveryPoint: CriticalFunction['recoveryPoint'];
  discontinuationImpact: CriticalFunction['discontinuationImpact'];

  constructor(func: CriticalFunction) {
    super(6, 1);
    this.functionIdenfifier = func.id;
    this.licensedActivity = func.licensedActivity;
    this.functionName = func.name;
    this.leiFinancialEntity = func.leiFinancialEntity;
    this.criticalityAssessment = func.criticalityAssessment;
    this.reasonsForCriticality = func.reasonsForCriticality;
    this.dateLastAssessment = func.dateOfLastAssessment;
    this.recoveryTime = func.recoveryTime;
    this.recoveryPoint = func.recoveryPoint;
    this.discontinuationImpact = func.discontinuationImpact;
  }
}
