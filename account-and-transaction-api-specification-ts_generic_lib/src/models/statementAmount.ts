/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Amount42, amount42Schema } from './amount42';
import {
  CreditDebitIndicator3Enum,
  creditDebitIndicator3EnumSchema,
} from './creditDebitIndicator3Enum';
import { Type10Enum, type10EnumSchema } from './type10Enum';

/** Set of elements used to provide details of a generic amount for the statement resource. */
export interface StatementAmount {
  amount: Amount42;
  /** Indicates whether the amount is a credit or a debit. Usage: A zero amount is considered to be a credit amount. */
  creditDebitIndicator: CreditDebitIndicator3Enum;
  /** Amount type, in a coded form. */
  type: Type10Enum;
}

export const statementAmountSchema: Schema<StatementAmount> = object({
  amount: ['Amount', lazy(() => amount42Schema)],
  creditDebitIndicator: [
    'CreditDebitIndicator',
    creditDebitIndicator3EnumSchema,
  ],
  type: ['Type', type10EnumSchema],
});
