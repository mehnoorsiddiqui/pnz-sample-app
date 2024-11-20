/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Fee {
  amount: string;
  currency: string;
}

export const feeSchema: Schema<Fee> = object({
  amount: ['Amount', string()],
  currency: ['Currency', string()],
});
