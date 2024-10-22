import { TableEntry } from './table-entry';
import { TICTService } from '../../closed-options/ict-service-types';
import { TCodeType } from '../../common/general-types';
import { Company } from '../../classes/company';
import { ECompanies } from '../../common/companies.enum';
import { ALL_COMPANY_INSTANCES } from '../../classes/instances';

export class EntryTable5_2 extends TableEntry {
  contractRefNumber: string;
  ictServiceType: TICTService;
  idCodeTPSP: string;
  typeOfCodeTPSP: TCodeType;
  rank: number;
  idCodeServiceUser: string;
  typeOfCodeServiceUser: TCodeType;

  constructor(company: Company) {
    super(5, 2);
    console.log(company);
    this.contractRefNumber = company.contract.referenceNumber;
    this.ictServiceType = company.contract.ictServicesType;
    this.idCodeTPSP = company.companyIdentification.code;
    this.typeOfCodeTPSP = company.companyIdentification.typeOfCode;
    this.rank = !company.parent ? 1 : 2;
    if (this.rank !== 1) {
      this.idCodeServiceUser = ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE].companyIdentification.code;
      this.typeOfCodeServiceUser = ALL_COMPANY_INSTANCES[ECompanies.BLOCKRISE].companyIdentification.typeOfCode;
    } else {
      this.idCodeServiceUser = undefined;
      this.typeOfCodeServiceUser = undefined;
    }
  }
}
