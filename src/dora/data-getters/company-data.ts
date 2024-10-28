import { ECompanies } from '../common/companies.enum';
import { Company } from '../classes/company';
import {
  _OTHER_COMPANIES,
  ALL_COMPANY_INSTANCES, ALL_TPSP_INSTANCES, ALL_TPSP_INSTANCES_ARRAY,
  CRITICAL_TPSP_INSTANCES,
  CRITICAL_TPSP_INSTANCES_ARRAY, NON_CRITICAL_TPSP_INSTANCES, NON_CRITICAL_TPSP_INSTANCES_ARRAY,
  TCriticalTPSP, TNonCriticalTPSP,
} from '../data-classes/instance-data/company-instances';


export class CompanyData {
  getAllCompanies(): Record<ECompanies, Company> {
    return ALL_COMPANY_INSTANCES;
  }

  getCriticalTPSPs(): Record<TCriticalTPSP, Company> {
    return CRITICAL_TPSP_INSTANCES;
  }
  getCriticalTPSArray(): Company[] {
    return CRITICAL_TPSP_INSTANCES_ARRAY;
  }

  getNonCriticalTPSPs(): Record<TNonCriticalTPSP, Company> {
    return NON_CRITICAL_TPSP_INSTANCES;
  }
  getNonCriticalTPSArray(): Company[] {
    return NON_CRITICAL_TPSP_INSTANCES_ARRAY;
  }

  getAllTPSPs(): Record<TNonCriticalTPSP | TCriticalTPSP, Company> {
    return ALL_TPSP_INSTANCES;
  }
  getAllTPSPsArray(): Company[] {
    return ALL_TPSP_INSTANCES_ARRAY;
  }

  getCompany(companyKey: ECompanies): Company {
    return ALL_COMPANY_INSTANCES[companyKey];
  }

  getCriticalTPSP(tpspKey: TCriticalTPSP): Company {
    return CRITICAL_TPSP_INSTANCES[tpspKey];
  }
  getNonCriticalTPSP(tpspKey: TNonCriticalTPSP): Company {
    return NON_CRITICAL_TPSP_INSTANCES[tpspKey];
  }

  getOtherCompany(companyKey: Exclude<ECompanies, TNonCriticalTPSP | TCriticalTPSP>): Company {
    return _OTHER_COMPANIES[companyKey];
  }
  getOtherCompanies(): Record<Exclude<ECompanies, TNonCriticalTPSP | TCriticalTPSP>, Company> {
    return _OTHER_COMPANIES;
  }
}
