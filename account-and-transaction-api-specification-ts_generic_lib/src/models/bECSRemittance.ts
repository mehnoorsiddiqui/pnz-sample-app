/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  CreditorReference,
  creditorReferenceSchema,
} from './creditorReference';

/**
 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
 * NZ - Remittance information for use with BECS Electronic Credit payment scheme. The Particulars, Code and Reference fields are currently constrained by providers.  The design choice has been made not to constrain through schema restrictions, to allow for future changes that remove the constraint. Note that not all banks will accept all valid characters, in which case a descriptive 400 Bad Request will be returned. Constraining to a-z, A-Z, - (dash) and 0-9 is advised. One example is abc-XYZ-123
 */
export interface BECSRemittance {
  creditorName: string;
  creditorReference?: CreditorReference;
  debtorName?: string;
  debtorReference?: CreditorReference;
}

export const bECSRemittanceSchema: Schema<BECSRemittance> = object({
  creditorName: ['CreditorName', string()],
  creditorReference: [
    'CreditorReference',
    optional(lazy(() => creditorReferenceSchema)),
  ],
  debtorName: ['DebtorName', optional(string())],
  debtorReference: [
    'DebtorReference',
    optional(lazy(() => creditorReferenceSchema)),
  ],
});