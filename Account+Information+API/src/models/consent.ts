/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface Consent {
  transactionToDateTime: string;
  expirationDateTime: string;
  permissions: string[];
  transactionFromDateTime: string;
}

export const consentSchema: Schema<Consent> = object({
  transactionToDateTime: ['TransactionToDateTime', string()],
  expirationDateTime: ['ExpirationDateTime', string()],
  permissions: ['Permissions', array(string())],
  transactionFromDateTime: ['TransactionFromDateTime', string()],
});
