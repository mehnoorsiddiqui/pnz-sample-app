/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Servicer {
  schemeName: string;
  identification: string;
}

export const servicerSchema: Schema<Servicer> = object({
  schemeName: ['SchemeName', string()],
  identification: ['Identification', string()],
});
