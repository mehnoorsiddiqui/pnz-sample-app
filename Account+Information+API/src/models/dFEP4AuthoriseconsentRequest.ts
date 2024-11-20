/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface DFEP4AuthoriseconsentRequest {
  accounts: string[];
}

export const dFEP4AuthoriseconsentRequestSchema: Schema<DFEP4AuthoriseconsentRequest> = object(
  { accounts: ['accounts', array(string())] }
);