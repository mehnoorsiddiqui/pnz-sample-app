/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AddressType1Enum
 */
export enum AddressType1Enum {
  Business = 'Business',
  Correspondence = 'Correspondence',
  DeliveryTo = 'DeliveryTo',
  MailTo = 'MailTo',
  POBox = 'POBox',
  Postal = 'Postal',
  Residential = 'Residential',
  Statement = 'Statement',
}

/**
 * Schema for AddressType1Enum
 */
export const addressType1EnumSchema: Schema<AddressType1Enum> = stringEnum(
  AddressType1Enum
);
