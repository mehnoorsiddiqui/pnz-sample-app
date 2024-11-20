/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** The amount of the first Standing Order */
export interface FirstPaymentAmount {
  amount: string;
  /** A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 'Codes for the representation of currencies and funds' */
  currency: string;
}

export const firstPaymentAmountSchema: Schema<FirstPaymentAmount> = object({
  amount: ['Amount', string()],
  currency: ['Currency', string()],
});
