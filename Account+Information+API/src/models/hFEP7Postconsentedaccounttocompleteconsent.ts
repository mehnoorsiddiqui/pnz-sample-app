/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface HFEP7Postconsentedaccounttocompleteconsent {
  redirect: string;
}

export const hFEP7PostconsentedaccounttocompleteconsentSchema: Schema<HFEP7Postconsentedaccounttocompleteconsent> = object(
  { redirect: ['redirect', string()] }
);
