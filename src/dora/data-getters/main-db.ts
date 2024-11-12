import { CompanyData } from './company-data';
import { CRITICAL_TPSP_TO_FUNCTIONS_MAPPING } from '../common/mapping/company-to-functions.mapping';
import { EFunctions } from '../common/functions.enum';
import { FUNCTION_INSTANCES } from '../data-classes/instance-data/function-instances';
import { ContractData } from './contract-data';
import { CONTRACT_TO_COMPANY_MAPPING } from '../common/mapping/contract-to-company.mapping';

class MainDB {
  company: CompanyData;
  contract: ContractData;

  constructor() {
    this.company = new CompanyData();
    this.contract = new ContractData();
    this.setup();
  }

  // Initialization
  private setup(): void {
    // Connect Functions and Companies
    this.company.getCriticalTPSArray().forEach((tpsp) => {
      // Set functions on Company
      tpsp.functions = CRITICAL_TPSP_TO_FUNCTIONS_MAPPING[tpsp.id].map((y: EFunctions) => FUNCTION_INSTANCES[y]);

      // Set Companies on Function
      tpsp.functions.forEach((func) => func.tpspInstances.push(tpsp));
    });

    // Connect Contracts and Companies
    this.contract.getAllContractsArray().forEach((contract) => {
      const companyId = CONTRACT_TO_COMPANY_MAPPING[contract.id];
      const tpsp = this.company.getCompany(companyId);
      // Set TPSP on Contract
      contract.tpspInstance = tpsp;
      // Set Contract on TPSP
      tpsp.contract = contract;
    });
  }
}
export const MAIN_DB = new MainDB();
