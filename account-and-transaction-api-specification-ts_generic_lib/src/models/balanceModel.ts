/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Amount10, amount10Schema } from './amount10';
import {
  CreditDebitIndicatorEnum,
  creditDebitIndicatorEnumSchema,
} from './creditDebitIndicatorEnum';
import { CreditLine, creditLineSchema } from './creditLine';
import { TypeEnum, typeEnumSchema } from './typeEnum';

/** Balance object schema */
export interface BalanceModel {
  /** A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. */
  accountId: string;
  amount: Amount10;
  /** Indicates whether the balance is a credit or a debit balance. Usage: A zero balance is considered to be a credit balance. */
  creditDebitIndicator: CreditDebitIndicatorEnum;
  /** Balance type, in a coded form. */
  type: TypeEnum;
  /**
   * Indicates the date (and time) of the balance.
   * All dates in the JSON payloads are represented in ISO 8601 date-time format.
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  dateTime: string;
  creditLine?: CreditLine[];
}

export const balanceModelSchema: Schema<BalanceModel> = object({
  accountId: ['AccountId', string()],
  amount: ['Amount', lazy(() => amount10Schema)],
  creditDebitIndicator: [
    'CreditDebitIndicator',
    creditDebitIndicatorEnumSchema,
  ],
  type: ['Type', typeEnumSchema],
  dateTime: ['DateTime', string()],
  creditLine: ['CreditLine', optional(array(lazy(() => creditLineSchema)))],
});
