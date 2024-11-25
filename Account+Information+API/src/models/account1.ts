/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Account1 {
  schemeName: string;
  identification: string;
  name: string;
  secondaryIdentification: string;
}

export const account1Schema: Schema<Account1> = object({
  schemeName: ['SchemeName', string()],
  identification: ['Identification', string()],
  name: ['Name', string()],
  secondaryIdentification: ['SecondaryIdentification', string()],
});
