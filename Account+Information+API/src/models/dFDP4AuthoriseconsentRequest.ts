/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface DFDP4AuthoriseconsentRequest {
  accounts: string[];
}

export const dFDP4AuthoriseconsentRequestSchema: Schema<DFDP4AuthoriseconsentRequest> = object(
  { accounts: ['accounts', array(string())] }
);
