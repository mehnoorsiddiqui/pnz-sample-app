/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema } from '../schema';
import { Amount10, amount10Schema } from './amount10';
import { Type1Enum, type1EnumSchema } from './type1Enum';

export interface CreditLine {
  /** Indicates whether or not the credit line is included in the balance of the account. Usage: If not present, credit line is not included in the balance amount of the account. */
  included: boolean;
  amount?: Amount10;
  /** Limit type, in a coded form. */
  type?: Type1Enum;
}

export const creditLineSchema: Schema<CreditLine> = object({
  included: ['Included', boolean()],
  amount: ['Amount', optional(lazy(() => amount10Schema))],
  type: ['Type', optional(type1EnumSchema)],
});