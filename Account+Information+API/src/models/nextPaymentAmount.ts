/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface NextPaymentAmount {
  amount: string;
  currency: string;
}

export const nextPaymentAmountSchema: Schema<NextPaymentAmount> = object({
  amount: ['Amount', string()],
  currency: ['Currency', string()],
});
