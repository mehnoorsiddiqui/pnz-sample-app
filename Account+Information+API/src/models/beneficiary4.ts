/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { CreditorAccount1, creditorAccount1Schema } from './creditorAccount1';
import { CreditorAgent1, creditorAgent1Schema } from './creditorAgent1';
import { Reference, referenceSchema } from './reference';

export interface Beneficiary4 {
  beneficiaryId: string;
  reference: Reference;
  creditorAccount: CreditorAccount1;
  creditorAgent: CreditorAgent1;
}

export const beneficiary4Schema: Schema<Beneficiary4> = object({
  beneficiaryId: ['BeneficiaryId', string()],
  reference: ['Reference', lazy(() => referenceSchema)],
  creditorAccount: ['CreditorAccount', lazy(() => creditorAccount1Schema)],
  creditorAgent: ['CreditorAgent', lazy(() => creditorAgent1Schema)],
});
