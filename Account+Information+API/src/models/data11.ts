/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Transaction, transactionSchema } from './transaction';

export interface Data11 {
  transaction: Transaction[];
}

export const data11Schema: Schema<Data11> = object({
  transaction: ['Transaction', array(lazy(() => transactionSchema))],
});
