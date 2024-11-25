/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';
import { Type8Enum, type8EnumSchema } from './type8Enum';

/** Set of elements used to provide details of a generic rate related to the statement resource. */
export interface StatementRate {
  /** Rate associated with the statement rate type. */
  rate: string;
  /** Statement rate type, in a coded form. */
  type: Type8Enum;
}

export const statementRateSchema: Schema<StatementRate> = object({
  rate: ['Rate', string()],
  type: ['Type', type8EnumSchema],
});
