/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface CreditorAgent1 {
  schemeName: string;
  identification: string;
}

export const creditorAgent1Schema: Schema<CreditorAgent1> = object({
  schemeName: ['SchemeName', string()],
  identification: ['Identification', string()],
});
