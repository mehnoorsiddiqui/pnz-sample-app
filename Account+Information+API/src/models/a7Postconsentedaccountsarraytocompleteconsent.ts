/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface A7Postconsentedaccountsarraytocompleteconsent {
  redirect: string;
}

export const a7PostconsentedaccountsarraytocompleteconsentSchema: Schema<A7Postconsentedaccountsarraytocompleteconsent> = object(
  { redirect: ['redirect', string()] }
);
