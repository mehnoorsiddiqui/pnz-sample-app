/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  AccountSchemeModelEnum,
  accountSchemeModelEnumSchema,
} from './accountSchemeModelEnum';

export interface CreditorAccount5 {
  schemeName: AccountSchemeModelEnum;
  /** Identification assigned by an institution to identify an account. This identification is known by the account owner. */
  identification: string;
  /**
   * Name of the account, as assigned by the account servicing institution, in agreement with the account owner in order to provide an additional means of identification of the account.
   * Usage: The account name is different from the account owner name. The account name is used in certain user communities to provide a means of identifying the account, in addition to the account owner's identity and the account number.
   */
  name?: string;
  /** This is secondary identification of the account, as assigned by the account servicing institution. */
  secondaryIdentification?: string;
}

export const creditorAccount5Schema: Schema<CreditorAccount5> = object({
  schemeName: ['SchemeName', accountSchemeModelEnumSchema],
  identification: ['Identification', string()],
  name: ['Name', optional(string())],
  secondaryIdentification: ['SecondaryIdentification', optional(string())],
});