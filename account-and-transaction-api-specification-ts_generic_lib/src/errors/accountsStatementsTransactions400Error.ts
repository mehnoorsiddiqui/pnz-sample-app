/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Error } from '../models/error';

/**
 * Creates an instance of AccountsStatementsTransactions400
 */
interface AccountsStatementsTransactions400 {
  /** High level textual error code to help categorise the errors. */
  Code: string;
  /** A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors. */
  Id?: string;
  /** Brief Error message. E.g., 'There is something wrong with the request parameters provided' */
  Message: string;
  Errors: Error[];
}

export class AccountsStatementsTransactions400Error extends ApiError<
  AccountsStatementsTransactions400
> {}
