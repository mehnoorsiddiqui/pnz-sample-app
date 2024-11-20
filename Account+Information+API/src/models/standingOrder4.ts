/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { CreditorAccount1, creditorAccount1Schema } from './creditorAccount1';
import { CreditorAgent1, creditorAgent1Schema } from './creditorAgent1';
import {
  NextPaymentAmount,
  nextPaymentAmountSchema,
} from './nextPaymentAmount';

export interface StandingOrder4 {
  accountId: string;
  standingOrderId: string;
  frequency: string;
  nextPaymentDateTime: string;
  nextPaymentAmount: NextPaymentAmount;
  creditorAccount: CreditorAccount1;
  creditorAgent: CreditorAgent1;
}

export const standingOrder4Schema: Schema<StandingOrder4> = object({
  accountId: ['AccountId', string()],
  standingOrderId: ['StandingOrderId', string()],
  frequency: ['Frequency', string()],
  nextPaymentDateTime: ['NextPaymentDateTime', string()],
  nextPaymentAmount: ['NextPaymentAmount', lazy(() => nextPaymentAmountSchema)],
  creditorAccount: ['CreditorAccount', lazy(() => creditorAccount1Schema)],
  creditorAgent: ['CreditorAgent', lazy(() => creditorAgent1Schema)],
});