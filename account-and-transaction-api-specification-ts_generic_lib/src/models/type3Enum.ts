/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type3Enum
 */
export enum Type3Enum {
  AccountClosure = 'AccountClosure',
  AccountOpening = 'AccountOpening',
  Annual = 'Annual',
  Interim = 'Interim',
  RegularPeriodic = 'RegularPeriodic',
}

/**
 * Schema for Type3Enum
 */
export const type3EnumSchema: Schema<Type3Enum> = stringEnum(Type3Enum);