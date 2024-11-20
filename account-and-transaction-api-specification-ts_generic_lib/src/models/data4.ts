/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { BalanceModel, balanceModelSchema } from './balanceModel';

/** Data */
export interface Data4 {
  /** Balance */
  balance: BalanceModel[];
}

export const data4Schema: Schema<Data4> = object({
  balance: ['Balance', array(lazy(() => balanceModelSchema))],
});