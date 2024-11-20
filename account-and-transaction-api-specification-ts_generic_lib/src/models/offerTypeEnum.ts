/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OfferTypeEnum
 */
export enum OfferTypeEnum {
  BalanceTransfer = 'BalanceTransfer',
  LimitIncrease = 'LimitIncrease',
  MoneyTransfer = 'MoneyTransfer',
  Other = 'Other',
  PromotionalRate = 'PromotionalRate',
}

/**
 * Schema for OfferTypeEnum
 */
export const offerTypeEnumSchema: Schema<OfferTypeEnum> = stringEnum(
  OfferTypeEnum
);