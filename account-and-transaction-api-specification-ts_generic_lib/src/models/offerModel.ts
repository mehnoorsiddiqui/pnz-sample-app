/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema, string } from '../schema';
import { Amount42, amount42Schema } from './amount42';
import { Fee2, fee2Schema } from './fee2';
import { OfferTypeEnum, offerTypeEnumSchema } from './offerTypeEnum';

export interface OfferModel {
  /** A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. */
  accountId: string;
  /** A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner. */
  offerId?: string;
  /** Offer type, in a coded form. */
  offerType?: OfferTypeEnum;
  /** Further details of the offer. */
  description?: string;
  /**
   * Date and time at which the offer starts.
   * All dates in the JSON payloads are represented in ISO 8601 date-time format.
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  startDateTime?: string;
  /**
   * Date and time at which the offer ends.
   * All dates in the JSON payloads are represented in ISO 8601 date-time format.
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  endDateTime?: string;
  amount?: Amount42;
  fee?: Fee2;
  /** Rate associated with the offer type. */
  rate?: string;
  /** Value associated with the offer type. */
  value?: number;
  /** Further details of the term of the offer. */
  term?: string;
  /** URL (Uniform Resource Locator) where the document can be found */
  uRL?: string;
}

export const offerModelSchema: Schema<OfferModel> = object({
  accountId: ['AccountId', string()],
  offerId: ['OfferId', optional(string())],
  offerType: ['OfferType', optional(offerTypeEnumSchema)],
  description: ['Description', optional(string())],
  startDateTime: ['StartDateTime', optional(string())],
  endDateTime: ['EndDateTime', optional(string())],
  amount: ['Amount', optional(lazy(() => amount42Schema))],
  fee: ['Fee', optional(lazy(() => fee2Schema))],
  rate: ['Rate', optional(string())],
  value: ['Value', optional(number())],
  term: ['Term', optional(string())],
  uRL: ['URL', optional(string())],
});
