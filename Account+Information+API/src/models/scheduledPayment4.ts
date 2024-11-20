/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { CreditorAccount1, creditorAccount1Schema } from './creditorAccount1';
import { CreditorAgent1, creditorAgent1Schema } from './creditorAgent1';
import { InstructedAmount, instructedAmountSchema } from './instructedAmount';

export interface ScheduledPayment4 {
  accountId: string;
  scheduledType: string;
  instructedAmount: InstructedAmount;
  scheduledPaymentDateTime: string;
  creditorAgent: CreditorAgent1;
  creditorAccount: CreditorAccount1;
}

export const scheduledPayment4Schema: Schema<ScheduledPayment4> = object({
  accountId: ['AccountId', string()],
  scheduledType: ['ScheduledType', string()],
  instructedAmount: ['InstructedAmount', lazy(() => instructedAmountSchema)],
  scheduledPaymentDateTime: ['ScheduledPaymentDateTime', string()],
  creditorAgent: ['CreditorAgent', lazy(() => creditorAgent1Schema)],
  creditorAccount: ['CreditorAccount', lazy(() => creditorAccount1Schema)],
});