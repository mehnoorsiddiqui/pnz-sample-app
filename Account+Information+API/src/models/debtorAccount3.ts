/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface DebtorAccount3 {
  identification: string;
  schemeName: string;
  name: string;
  secondaryIdentification: string;
}

export const debtorAccount3Schema: Schema<DebtorAccount3> = object({
  identification: ['Identification', string()],
  schemeName: ['SchemeName', string()],
  name: ['Name', string()],
  secondaryIdentification: ['SecondaryIdentification', string()],
});
