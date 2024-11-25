/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { AccountModel, accountModelSchema } from './accountModel';

/** Data */
export interface Data1 {
  account?: AccountModel;
}

export const data1Schema: Schema<Data1> = object({
  account: ['Account', optional(lazy(() => accountModelSchema))],
});
