/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  GetAccountStatementResponse,
  getAccountStatementResponseSchema,
} from '../models/getAccountStatementResponse';
import {
  GetAccountStatementsResponse,
  getAccountStatementsResponseSchema,
} from '../models/getAccountStatementsResponse';
import {
  GetAccountStatementTransactionsResponse,
  getAccountStatementTransactionsResponseSchema,
} from '../models/getAccountStatementTransactionsResponse';
import {
  GetStatementsResponse,
  getStatementsResponseSchema,
} from '../models/getStatementsResponse';
import { optional, string, unknown } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { AccountsStatements400Error } from '../errors/accountsStatements400Error';
import { AccountsStatements403Error } from '../errors/accountsStatements403Error';
import { AccountsStatements500Error } from '../errors/accountsStatements500Error';
import { AccountsStatements503Error } from '../errors/accountsStatements503Error';
import { AccountsStatementsTransactions400Error } from '../errors/accountsStatementsTransactions400Error';
import { AccountsStatementsTransactions403Error } from '../errors/accountsStatementsTransactions403Error';
import { AccountsStatementsTransactions500Error } from '../errors/accountsStatementsTransactions500Error';
import { AccountsStatementsTransactions503Error } from '../errors/accountsStatementsTransactions503Error';
import { Statements400Error } from '../errors/statements400Error';
import { Statements403Error } from '../errors/statements403Error';
import { Statements500Error } from '../errors/statements500Error';
import { Statements503Error } from '../errors/statements503Error';

export class StatementsController extends BaseController {
  /**
   * Get Statement related to an account
   *
   * @param accountId                  A unique identifier used to identify the account resource.
   * @param statementId                A unique identifier used to identify the statement resource.
   * @param fromStatementDateTime      The UTC ISO 8601 Date Time to filter statements FROM NB Time
   *                                             component is optional - set to 00:00:00 for just Date. If the Date
   *                                             Time contains a timezone, the API Provider must ignore the timezone
   *                                             component.
   * @param toStatementDateTime        The UTC ISO 8601 Date Time to filter statements TO NB Time component
   *                                             is optional - set to 00:00:00 for just Date. If the Date Time contains
   *                                             a timezone, the API Provider must ignore the timezone component.
   * @param xFapiAuthDate              The time when the Customer last logged in with the Third Party. All
   *                                             dates in the HTTP headers are represented as RFC 7231 Full Dates. An
   *                                             example is below: Sun, 10 Sep 2017 19:43:31 UTC
   * @param xFapiCustomerIpAddress     The Customer's IP address if the Customer is currently logged in with
   *                                             the Third Party.
   * @param xFapiInteractionId         An RFC4122 UID used as a correlation id.
   * @param xMerchantIpAddress         The IP address of the merchant when making account information
   *                                             requests through a Third Party.
   * @param xCustomerUserAgent         The User-Agent of the application on the customer device that is used
   *                                             to make the account information request
   * @return Response from the API call
   */
  async getAccountStatement(
    accountId: string,
    statementId: string,
    fromStatementDateTime?: string,
    toStatementDateTime?: string,
    xFapiAuthDate?: string,
    xFapiCustomerIpAddress?: string,
    xFapiInteractionId?: string,
    xMerchantIpAddress?: string,
    xCustomerUserAgent?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAccountStatementResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      statementId: [statementId, string()],
      fromStatementDateTime: [fromStatementDateTime, optional(string())],
      toStatementDateTime: [toStatementDateTime, optional(string())],
      xFapiAuthDate: [xFapiAuthDate, optional(string())],
      xFapiCustomerIpAddress: [xFapiCustomerIpAddress, optional(string())],
      xFapiInteractionId: [xFapiInteractionId, optional(string())],
      xMerchantIpAddress: [xMerchantIpAddress, optional(string())],
      xCustomerUserAgent: [xCustomerUserAgent, optional(string())],
    });
    req.header('x-fapi-auth-date', mapped.xFapiAuthDate);
    req.header('x-fapi-customer-ip-address', mapped.xFapiCustomerIpAddress);
    req.header('x-fapi-interaction-id', mapped.xFapiInteractionId);
    req.header('x-merchant-ip-address', mapped.xMerchantIpAddress);
    req.header('x-customer-user-agent', mapped.xCustomerUserAgent);
    req.query('fromStatementDateTime', mapped.fromStatementDateTime);
    req.query('toStatementDateTime', mapped.toStatementDateTime);
    req.appendTemplatePath`/accounts/${mapped.accountId}/statements/${mapped.statementId}`;
    req.throwOn(400, AccountsStatements400Error, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, AccountsStatements403Error, 'Forbidden');
    req.throwOn(405, ApiError, 'Method Not Allowed');
    req.throwOn(406, ApiError, 'Not Acceptable');
    req.throwOn(429, ApiError, 'Too Many Requests');
    req.throwOn(500, AccountsStatements500Error, 'Internal Server Error');
    req.throwOn(501, ApiError, 'Not Implemented');
    req.throwOn(503, AccountsStatements503Error, 'Service Unavailable');
    req.authenticate([{ httpBearer: true }]);
    return req.callAsJson(getAccountStatementResponseSchema, requestOptions);
  }

  /**
   * Get Statement related to an account
   *
   * @param accountId                  A unique identifier used to identify the account resource.
   * @param statementId                A unique identifier used to identify the statement resource.
   * @param xFapiAuthDate              The time when the Customer last logged in with the Third Party. All
   *                                             dates in the HTTP headers are represented as RFC 7231 Full Dates. An
   *                                             example is below: Sun, 10 Sep 2017 19:43:31 UTC
   * @param xFapiCustomerIpAddress     The Customer's IP address if the Customer is currently logged in with
   *                                             the Third Party.
   * @param xFapiInteractionId         An RFC4122 UID used as a correlation id.
   * @param xMerchantIpAddress         The IP address of the merchant when making account information
   *                                             requests through a Third Party.
   * @param xCustomerUserAgent         The User-Agent of the application on the customer device that is used
   *                                             to make the account information request
   * @return Response from the API call
   */
  async getAccountStatementFile(
    accountId: string,
    statementId: string,
    xFapiAuthDate?: string,
    xFapiCustomerIpAddress?: string,
    xFapiInteractionId?: string,
    xMerchantIpAddress?: string,
    xCustomerUserAgent?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown | undefined>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      statementId: [statementId, string()],
      xFapiAuthDate: [xFapiAuthDate, optional(string())],
      xFapiCustomerIpAddress: [xFapiCustomerIpAddress, optional(string())],
      xFapiInteractionId: [xFapiInteractionId, optional(string())],
      xMerchantIpAddress: [xMerchantIpAddress, optional(string())],
      xCustomerUserAgent: [xCustomerUserAgent, optional(string())],
    });
    req.header('x-fapi-auth-date', mapped.xFapiAuthDate);
    req.header('x-fapi-customer-ip-address', mapped.xFapiCustomerIpAddress);
    req.header('x-fapi-interaction-id', mapped.xFapiInteractionId);
    req.header('x-merchant-ip-address', mapped.xMerchantIpAddress);
    req.header('x-customer-user-agent', mapped.xCustomerUserAgent);
    req.appendTemplatePath`/accounts/${mapped.accountId}/statements/${mapped.statementId}/file`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Forbidden');
    req.throwOn(405, ApiError, 'Method Not Allowed');
    req.throwOn(406, ApiError, 'Not Acceptable');
    req.throwOn(429, ApiError, 'Too Many Requests');
    req.throwOn(500, ApiError, 'Internal Server Error');
    req.throwOn(501, ApiError, 'Not Implemented');
    req.throwOn(503, ApiError, 'Service Unavailable');
    req.authenticate([{ httpBearer: true }]);
    return req.callAsJson(optional(unknown()), requestOptions);
  }

  /**
   * Get Statement Transactions related to an account
   *
   * @param accountId                  A unique identifier used to identify the account resource.
   * @param statementId                A unique identifier used to identify the statement resource.
   * @param fromBookingDateTime        The UTC ISO 8601 Date Time to filter transactions FROM NB Time
   *                                             component is optional - set to 00:00:00 for just Date. If the Date
   *                                             Time contains a timezone, the API Provider must ignore the timezone
   *                                             component.
   * @param toBookingDateTime          The UTC ISO 8601 Date Time to filter transactions TO NB Time
   *                                             component is optional - set to 00:00:00 for just Date. If the Date
   *                                             Time contains a timezone, the API Provider must ignore the timezone
   *                                             component.
   * @param xFapiAuthDate              The time when the Customer last logged in with the Third Party. All
   *                                             dates in the HTTP headers are represented as RFC 7231 Full Dates. An
   *                                             example is below: Sun, 10 Sep 2017 19:43:31 UTC
   * @param xFapiCustomerIpAddress     The Customer's IP address if the Customer is currently logged in with
   *                                             the Third Party.
   * @param xFapiInteractionId         An RFC4122 UID used as a correlation id.
   * @param xMerchantIpAddress         The IP address of the merchant when making account information
   *                                             requests through a Third Party.
   * @param xCustomerUserAgent         The User-Agent of the application on the customer device that is used
   *                                             to make the account information request
   * @return Response from the API call
   */
  async getAccountStatementTransactions(
    accountId: string,
    statementId: string,
    fromBookingDateTime?: string,
    toBookingDateTime?: string,
    xFapiAuthDate?: string,
    xFapiCustomerIpAddress?: string,
    xFapiInteractionId?: string,
    xMerchantIpAddress?: string,
    xCustomerUserAgent?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAccountStatementTransactionsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      statementId: [statementId, string()],
      fromBookingDateTime: [fromBookingDateTime, optional(string())],
      toBookingDateTime: [toBookingDateTime, optional(string())],
      xFapiAuthDate: [xFapiAuthDate, optional(string())],
      xFapiCustomerIpAddress: [xFapiCustomerIpAddress, optional(string())],
      xFapiInteractionId: [xFapiInteractionId, optional(string())],
      xMerchantIpAddress: [xMerchantIpAddress, optional(string())],
      xCustomerUserAgent: [xCustomerUserAgent, optional(string())],
    });
    req.header('x-fapi-auth-date', mapped.xFapiAuthDate);
    req.header('x-fapi-customer-ip-address', mapped.xFapiCustomerIpAddress);
    req.header('x-fapi-interaction-id', mapped.xFapiInteractionId);
    req.header('x-merchant-ip-address', mapped.xMerchantIpAddress);
    req.header('x-customer-user-agent', mapped.xCustomerUserAgent);
    req.query('fromBookingDateTime', mapped.fromBookingDateTime);
    req.query('toBookingDateTime', mapped.toBookingDateTime);
    req.appendTemplatePath`/accounts/${mapped.accountId}/statements/${mapped.statementId}/transactions`;
    req.throwOn(400, AccountsStatementsTransactions400Error, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, AccountsStatementsTransactions403Error, 'Forbidden');
    req.throwOn(405, ApiError, 'Method Not Allowed');
    req.throwOn(406, ApiError, 'Not Acceptable');
    req.throwOn(429, ApiError, 'Too Many Requests');
    req.throwOn(
      500,
      AccountsStatementsTransactions500Error,
      'Internal Server Error'
    );
    req.throwOn(501, ApiError, 'Not Implemented');
    req.throwOn(
      503,
      AccountsStatementsTransactions503Error,
      'Service Unavailable'
    );
    req.authenticate([{ httpBearer: true }]);
    return req.callAsJson(
      getAccountStatementTransactionsResponseSchema,
      requestOptions
    );
  }

  /**
   * Get Statements related to an account
   *
   * @param accountId                  A unique identifier used to identify the account resource.
   * @param fromStatementDateTime      The UTC ISO 8601 Date Time to filter statements FROM NB Time
   *                                             component is optional - set to 00:00:00 for just Date. If the Date
   *                                             Time contains a timezone, the API Provider must ignore the timezone
   *                                             component.
   * @param toStatementDateTime        The UTC ISO 8601 Date Time to filter statements TO NB Time component
   *                                             is optional - set to 00:00:00 for just Date. If the Date Time contains
   *                                             a timezone, the API Provider must ignore the timezone component.
   * @param xFapiAuthDate              The time when the Customer last logged in with the Third Party. All
   *                                             dates in the HTTP headers are represented as RFC 7231 Full Dates. An
   *                                             example is below: Sun, 10 Sep 2017 19:43:31 UTC
   * @param xFapiCustomerIpAddress     The Customer's IP address if the Customer is currently logged in with
   *                                             the Third Party.
   * @param xFapiInteractionId         An RFC4122 UID used as a correlation id.
   * @param xMerchantIpAddress         The IP address of the merchant when making account information
   *                                             requests through a Third Party.
   * @param xCustomerUserAgent         The User-Agent of the application on the customer device that is used
   *                                             to make the account information request
   * @return Response from the API call
   */
  async getAccountStatements(
    accountId: string,
    fromStatementDateTime?: string,
    toStatementDateTime?: string,
    xFapiAuthDate?: string,
    xFapiCustomerIpAddress?: string,
    xFapiInteractionId?: string,
    xMerchantIpAddress?: string,
    xCustomerUserAgent?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAccountStatementsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      fromStatementDateTime: [fromStatementDateTime, optional(string())],
      toStatementDateTime: [toStatementDateTime, optional(string())],
      xFapiAuthDate: [xFapiAuthDate, optional(string())],
      xFapiCustomerIpAddress: [xFapiCustomerIpAddress, optional(string())],
      xFapiInteractionId: [xFapiInteractionId, optional(string())],
      xMerchantIpAddress: [xMerchantIpAddress, optional(string())],
      xCustomerUserAgent: [xCustomerUserAgent, optional(string())],
    });
    req.header('x-fapi-auth-date', mapped.xFapiAuthDate);
    req.header('x-fapi-customer-ip-address', mapped.xFapiCustomerIpAddress);
    req.header('x-fapi-interaction-id', mapped.xFapiInteractionId);
    req.header('x-merchant-ip-address', mapped.xMerchantIpAddress);
    req.header('x-customer-user-agent', mapped.xCustomerUserAgent);
    req.query('fromStatementDateTime', mapped.fromStatementDateTime);
    req.query('toStatementDateTime', mapped.toStatementDateTime);
    req.appendTemplatePath`/accounts/${mapped.accountId}/statements`;
    req.throwOn(400, AccountsStatements400Error, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, AccountsStatements403Error, 'Forbidden');
    req.throwOn(405, ApiError, 'Method Not Allowed');
    req.throwOn(406, ApiError, 'Not Acceptable');
    req.throwOn(429, ApiError, 'Too Many Requests');
    req.throwOn(500, AccountsStatements500Error, 'Internal Server Error');
    req.throwOn(501, ApiError, 'Not Implemented');
    req.throwOn(503, AccountsStatements503Error, 'Service Unavailable');
    req.authenticate([{ httpBearer: true }]);
    return req.callAsJson(getAccountStatementsResponseSchema, requestOptions);
  }

  /**
   * Get Statements
   *
   * @param fromStatementDateTime      The UTC ISO 8601 Date Time to filter statements FROM NB Time
   *                                             component is optional - set to 00:00:00 for just Date. If the Date
   *                                             Time contains a timezone, the API Provider must ignore the timezone
   *                                             component.
   * @param toStatementDateTime        The UTC ISO 8601 Date Time to filter statements TO NB Time component
   *                                             is optional - set to 00:00:00 for just Date. If the Date Time contains
   *                                             a timezone, the API Provider must ignore the timezone component.
   * @param xFapiAuthDate              The time when the Customer last logged in with the Third Party. All
   *                                             dates in the HTTP headers are represented as RFC 7231 Full Dates. An
   *                                             example is below: Sun, 10 Sep 2017 19:43:31 UTC
   * @param xFapiCustomerIpAddress     The Customer's IP address if the Customer is currently logged in with
   *                                             the Third Party.
   * @param xFapiInteractionId         An RFC4122 UID used as a correlation id.
   * @param xMerchantIpAddress         The IP address of the merchant when making account information
   *                                             requests through a Third Party.
   * @param xCustomerUserAgent         The User-Agent of the application on the customer device that is used
   *                                             to make the account information request
   * @return Response from the API call
   */
  async getStatements(
    fromStatementDateTime?: string,
    toStatementDateTime?: string,
    xFapiAuthDate?: string,
    xFapiCustomerIpAddress?: string,
    xFapiInteractionId?: string,
    xMerchantIpAddress?: string,
    xCustomerUserAgent?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetStatementsResponse>> {
    const req = this.createRequest('GET', '/statements');
    const mapped = req.prepareArgs({
      fromStatementDateTime: [fromStatementDateTime, optional(string())],
      toStatementDateTime: [toStatementDateTime, optional(string())],
      xFapiAuthDate: [xFapiAuthDate, optional(string())],
      xFapiCustomerIpAddress: [xFapiCustomerIpAddress, optional(string())],
      xFapiInteractionId: [xFapiInteractionId, optional(string())],
      xMerchantIpAddress: [xMerchantIpAddress, optional(string())],
      xCustomerUserAgent: [xCustomerUserAgent, optional(string())],
    });
    req.header('x-fapi-auth-date', mapped.xFapiAuthDate);
    req.header('x-fapi-customer-ip-address', mapped.xFapiCustomerIpAddress);
    req.header('x-fapi-interaction-id', mapped.xFapiInteractionId);
    req.header('x-merchant-ip-address', mapped.xMerchantIpAddress);
    req.header('x-customer-user-agent', mapped.xCustomerUserAgent);
    req.query('fromStatementDateTime', mapped.fromStatementDateTime);
    req.query('toStatementDateTime', mapped.toStatementDateTime);
    req.throwOn(400, Statements400Error, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, Statements403Error, 'Forbidden');
    req.throwOn(405, ApiError, 'Method Not Allowed');
    req.throwOn(406, ApiError, 'Not Acceptable');
    req.throwOn(429, ApiError, 'Too Many Requests');
    req.throwOn(500, Statements500Error, 'Internal Server Error');
    req.throwOn(501, ApiError, 'Not Implemented');
    req.throwOn(503, Statements503Error, 'Service Unavailable');
    req.authenticate([{ httpBearer: true }]);
    return req.callAsJson(getStatementsResponseSchema, requestOptions);
  }
}