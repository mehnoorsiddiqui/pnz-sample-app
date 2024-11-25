/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { PostalAddress, postalAddressSchema } from './postalAddress';

export interface CreditorAgent {
  schemeName: string;
  identification: string;
  name: string;
  postalAddress: PostalAddress;
}

export const creditorAgentSchema: Schema<CreditorAgent> = object({
  schemeName: ['SchemeName', string()],
  identification: ['Identification', string()],
  name: ['Name', string()],
  postalAddress: ['PostalAddress', lazy(() => postalAddressSchema)],
});
