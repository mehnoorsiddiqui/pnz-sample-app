/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Meta Data relevant to the payload */
export interface MetaData {
  totalPages?: number;
  /**
   * All dates in the JSON payloads are represented in ISO 8601 date-time format.
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  firstAvailableDateTime?: string;
  /**
   * All dates in the JSON payloads are represented in ISO 8601 date-time format.
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  lastAvailableDateTime?: string;
}

export const metaDataSchema: Schema<MetaData> = object({
  totalPages: ['TotalPages', optional(number())],
  firstAvailableDateTime: ['FirstAvailableDateTime', optional(string())],
  lastAvailableDateTime: ['LastAvailableDateTime', optional(string())],
});
