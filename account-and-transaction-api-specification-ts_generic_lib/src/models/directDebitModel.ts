/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  DirectDebitStatusCodeEnum,
  directDebitStatusCodeEnumSchema,
} from './directDebitStatusCodeEnum';
import {
  PreviousPaymentAmount2,
  previousPaymentAmount2Schema,
} from './previousPaymentAmount2';

export interface DirectDebitModel {
  /** A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. */
  accountId: string;
  /** A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner. */
  directDebitId?: string;
  /** Direct Debit reference. */
  mandateIdentification: string;
  /** Specifies the status of the direct debit in code form. */
  directDebitStatusCode?: DirectDebitStatusCodeEnum;
  /** Name of Service User */
  name: string;
  /**
   * Date of most recent direct debit collection.
   * All dates in the JSON payloads are represented in ISO 8601 date-time format.
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  previousPaymentDateTime?: string;
  previousPaymentAmount?: PreviousPaymentAmount2;
}

export const directDebitModelSchema: Schema<DirectDebitModel> = object({
  accountId: ['AccountId', string()],
  directDebitId: ['DirectDebitId', optional(string())],
  mandateIdentification: ['MandateIdentification', string()],
  directDebitStatusCode: [
    'DirectDebitStatusCode',
    optional(directDebitStatusCodeEnumSchema),
  ],
  name: ['Name', string()],
  previousPaymentDateTime: ['PreviousPaymentDateTime', optional(string())],
  previousPaymentAmount: [
    'PreviousPaymentAmount',
    optional(lazy(() => previousPaymentAmount2Schema)),
  ],
});