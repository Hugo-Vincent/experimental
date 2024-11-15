import { ECompanies } from '../../common/companies.enum';
import { TCriticalTPSP } from '../instance-data/company-instances';

/**
 * These notice periods are for NORMAL circumstances, and not when we violate the terms of service, in which case the
 * other party may instantly terminate the contract.
 */
export const NOTICE_PERIODS: Record<TCriticalTPSP, { theyBreakContract: number, weBreakContract: number }> = {
  [ECompanies.BUNQ]: {
    // https://www.bunq.com/nl-nl/documents/business-account
    theyBreakContract: 60, // For when a certain bankaccount type is discontinued, or other normal reasons.
    weBreakContract: 0,
  },
  [ECompanies.COMPLYADVANTAGE]: {
    // See Contract in Corporate/Legal.
    theyBreakContract: 90, // They give a 3 month "Exit Period" during which they assist us in phasing out.
    weBreakContract: 0,
  },
  [ECompanies.ELLIPTIC]: {
    // See Contract in Corporate/Legal.
    theyBreakContract: 90,  // They must tell us 90 days beforehand. If they change the Agreement, we have 30 days to instantly terminate the contract if we want.
    weBreakContract: 90,    // We must tell them 90 days beforehand.
  },
  [ECompanies.GOOGLE_IRELAND]: {
    // See Contract in Corporate/Legal
    theyBreakContract: 30,
    weBreakContract: 30
  },
  [ECompanies.MICROSOFT]: {
    // https://www.microsoft.com/en-us/servicesagreement
    theyBreakContract: 0,
    weBreakContract: 0 // No problem we can cancel any time.
  },
  [ECompanies.SECUROSYS]: {
    // https://docs.securosys.com/cloudhsm/terms-and-conditions/Terms_and_Conditions_for_Securosys_CloudHSM
    theyBreakContract: 180,
    weBreakContract: 90,
  },
}