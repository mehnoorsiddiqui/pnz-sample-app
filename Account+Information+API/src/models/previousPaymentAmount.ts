/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PreviousPaymentAmount {
  amount: string;
  currency: string;
}

export const previousPaymentAmountSchema: Schema<PreviousPaymentAmount> = object(
  { amount: ['Amount', string()], currency: ['Currency', string()] }
);
