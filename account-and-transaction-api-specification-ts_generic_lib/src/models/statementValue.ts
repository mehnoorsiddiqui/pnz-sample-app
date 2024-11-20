/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';
import { Type9Enum, type9EnumSchema } from './type9Enum';

/** Set of elements used to provide details of a generic number value related to the statement resource. */
export interface StatementValue {
  /** Value associated with the statement value type. */
  value: number;
  /** Statement value type, in a coded form. */
  type: Type9Enum;
}

export const statementValueSchema: Schema<StatementValue> = object({
  value: ['Value', number()],
  type: ['Type', type9EnumSchema],
});