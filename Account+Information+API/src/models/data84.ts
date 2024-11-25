/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Account8, account8Schema } from './account8';

export interface Data84 {
  account: Account8;
}

export const data84Schema: Schema<Data84> = object({
  account: ['Account', lazy(() => account8Schema)],
});
