/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  CreditorReference,
  creditorReferenceSchema,
} from './creditorReference';
import { DebtorReference, debtorReferenceSchema } from './debtorReference';

export interface TransactionReference6 {
  creditorName: string;
  creditorReference: CreditorReference;
  debtorName?: string;
  debtorReference?: DebtorReference;
}

export const transactionReference6Schema: Schema<TransactionReference6> = object(
  {
    creditorName: ['CreditorName', string()],
    creditorReference: [
      'CreditorReference',
      lazy(() => creditorReferenceSchema),
    ],
    debtorName: ['DebtorName', optional(string())],
    debtorReference: [
      'DebtorReference',
      optional(lazy(() => debtorReferenceSchema)),
    ],
  }
);
