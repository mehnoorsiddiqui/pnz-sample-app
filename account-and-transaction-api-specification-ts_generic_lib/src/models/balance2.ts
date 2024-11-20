/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Amount10, amount10Schema } from './amount10';
import {
  CreditDebitIndicatorEnum,
  creditDebitIndicatorEnumSchema,
} from './creditDebitIndicatorEnum';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface Balance2 {
  amount: Amount10;
  /** Indicates whether the balance is a credit or a debit balance. Usage: A zero balance is considered to be a credit balance. */
  creditDebitIndicator: CreditDebitIndicatorEnum;
  /** Balance type, in a coded form. */
  type: TypeEnum;
}

export const balance2Schema: Schema<Balance2> = object({
  amount: ['Amount', lazy(() => amount10Schema)],
  creditDebitIndicator: [
    'CreditDebitIndicator',
    creditDebitIndicatorEnumSchema,
  ],
  type: ['Type', typeEnumSchema],
});
