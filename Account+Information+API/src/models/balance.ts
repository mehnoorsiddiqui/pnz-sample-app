/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Amount, amountSchema } from './amount';

export interface Balance {
  accountId: string;
  type: string;
  amount: Amount;
  creditLine: string[];
  dateTime: string;
  creditDebitIndicator: string;
}

export const balanceSchema: Schema<Balance> = object({
  accountId: ['AccountId', string()],
  type: ['Type', string()],
  amount: ['Amount', lazy(() => amountSchema)],
  creditLine: ['CreditLine', array(string())],
  dateTime: ['DateTime', string()],
  creditDebitIndicator: ['CreditDebitIndicator', string()],
});