/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface CreditorAgent3 {
  /** Name of the identification scheme, in a coded form as published in an external list. */
  schemeName: string;
  /** Unique and unambiguous identification of a financial institution or a branch of a financial institution. */
  identification: string;
}

export const creditorAgent3Schema: Schema<CreditorAgent3> = object({
  schemeName: ['SchemeName', string()],
  identification: ['Identification', string()],
});