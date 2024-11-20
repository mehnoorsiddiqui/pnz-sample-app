/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { AccountModel, accountModelSchema } from './accountModel';

export interface Data42 {
  account?: AccountModel;
}

export const data42Schema: Schema<Data42> = object({
  account: ['Account', optional(lazy(() => accountModelSchema))],
});
