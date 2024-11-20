# Statements

A resource that describes summary details for an account statement period

```ts
const statementsController = new StatementsController(client);
```

## Class Name

`StatementsController`

## Methods

* [Get Account Statement](../../doc/controllers/statements.md#get-account-statement)
* [Get Account Statement File](../../doc/controllers/statements.md#get-account-statement-file)
* [Get Account Statement Transactions](../../doc/controllers/statements.md#get-account-statement-transactions)
* [Get Account Statements](../../doc/controllers/statements.md#get-account-statements)
* [Get Statements](../../doc/controllers/statements.md#get-statements)


# Get Account Statement

Get Statement related to an account

```ts
async getAccountStatement(  accountId: string,
  statementId: string,
  fromStatementDateTime?: string,
  toStatementDateTime?: string,
  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<GetAccountStatementResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | A unique identifier used to identify the account resource. |
| `statementId` | `string` | Template, Required | A unique identifier used to identify the statement resource. |
| `fromStatementDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `toStatementDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `xFapiAuthDate` | `string \| undefined` | Header, Optional | The time when the Customer last logged in with the Third Party.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC<br>**Constraints**: *Pattern*: `^(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun), \d{2} (Jan\|Feb\|Mar\|Apr\|May\|Jun\|Jul\|Aug\|Sep\|Oct\|Nov\|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT\|UTC)$` |
| `xFapiCustomerIpAddress` | `string \| undefined` | Header, Optional | The Customer's IP address if the Customer is currently logged in with the Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xFapiInteractionId` | `string \| undefined` | Header, Optional | An RFC4122 UID used as a correlation id. |
| `xMerchantIpAddress` | `string \| undefined` | Header, Optional | The IP address of the merchant when making account information requests through a Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xCustomerUserAgent` | `string \| undefined` | Header, Optional | The User-Agent of the application on the customer device that is used to make the account information request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAccountStatementResponse`](../../doc/models/get-account-statement-response.md)

## Example Usage

```ts
const accountId = 'AccountId0';

const statementId = 'StatementId6';

try {
  const { result, ...httpResponse } = await statementsController.getAccountStatement(
  accountId,
  statementId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`AccountsStatements400Error`](../../doc/models/accounts-statements-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`AccountsStatements403Error`](../../doc/models/accounts-statements-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`AccountsStatements500Error`](../../doc/models/accounts-statements-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`AccountsStatements503Error`](../../doc/models/accounts-statements-503-error.md) |


# Get Account Statement File

Get Statement related to an account

```ts
async getAccountStatementFile(  accountId: string,
  statementId: string,
  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | A unique identifier used to identify the account resource. |
| `statementId` | `string` | Template, Required | A unique identifier used to identify the statement resource. |
| `xFapiAuthDate` | `string \| undefined` | Header, Optional | The time when the Customer last logged in with the Third Party.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC<br>**Constraints**: *Pattern*: `^(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun), \d{2} (Jan\|Feb\|Mar\|Apr\|May\|Jun\|Jul\|Aug\|Sep\|Oct\|Nov\|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT\|UTC)$` |
| `xFapiCustomerIpAddress` | `string \| undefined` | Header, Optional | The Customer's IP address if the Customer is currently logged in with the Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xFapiInteractionId` | `string \| undefined` | Header, Optional | An RFC4122 UID used as a correlation id. |
| `xMerchantIpAddress` | `string \| undefined` | Header, Optional | The IP address of the merchant when making account information requests through a Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xCustomerUserAgent` | `string \| undefined` | Header, Optional | The User-Agent of the application on the customer device that is used to make the account information request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accountId = 'AccountId0';

const statementId = 'StatementId6';

try {
  const { result, ...httpResponse } = await statementsController.getAccountStatementFile(
  accountId,
  statementId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | `ApiError` |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | `ApiError` |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | `ApiError` |


# Get Account Statement Transactions

Get Statement Transactions related to an account

```ts
async getAccountStatementTransactions(  accountId: string,
  statementId: string,
  fromBookingDateTime?: string,
  toBookingDateTime?: string,
  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<GetAccountStatementTransactionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | A unique identifier used to identify the account resource. |
| `statementId` | `string` | Template, Required | A unique identifier used to identify the statement resource. |
| `fromBookingDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `toBookingDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `xFapiAuthDate` | `string \| undefined` | Header, Optional | The time when the Customer last logged in with the Third Party.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC<br>**Constraints**: *Pattern*: `^(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun), \d{2} (Jan\|Feb\|Mar\|Apr\|May\|Jun\|Jul\|Aug\|Sep\|Oct\|Nov\|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT\|UTC)$` |
| `xFapiCustomerIpAddress` | `string \| undefined` | Header, Optional | The Customer's IP address if the Customer is currently logged in with the Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xFapiInteractionId` | `string \| undefined` | Header, Optional | An RFC4122 UID used as a correlation id. |
| `xMerchantIpAddress` | `string \| undefined` | Header, Optional | The IP address of the merchant when making account information requests through a Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xCustomerUserAgent` | `string \| undefined` | Header, Optional | The User-Agent of the application on the customer device that is used to make the account information request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAccountStatementTransactionsResponse`](../../doc/models/get-account-statement-transactions-response.md)

## Example Usage

```ts
const accountId = 'AccountId0';

const statementId = 'StatementId6';

try {
  const { result, ...httpResponse } = await statementsController.getAccountStatementTransactions(
  accountId,
  statementId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`AccountsStatementsTransactions400Error`](../../doc/models/accounts-statements-transactions-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`AccountsStatementsTransactions403Error`](../../doc/models/accounts-statements-transactions-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`AccountsStatementsTransactions500Error`](../../doc/models/accounts-statements-transactions-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`AccountsStatementsTransactions503Error`](../../doc/models/accounts-statements-transactions-503-error.md) |


# Get Account Statements

Get Statements related to an account

```ts
async getAccountStatements(  accountId: string,
  fromStatementDateTime?: string,
  toStatementDateTime?: string,
  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<GetAccountStatementsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | A unique identifier used to identify the account resource. |
| `fromStatementDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `toStatementDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `xFapiAuthDate` | `string \| undefined` | Header, Optional | The time when the Customer last logged in with the Third Party.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC<br>**Constraints**: *Pattern*: `^(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun), \d{2} (Jan\|Feb\|Mar\|Apr\|May\|Jun\|Jul\|Aug\|Sep\|Oct\|Nov\|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT\|UTC)$` |
| `xFapiCustomerIpAddress` | `string \| undefined` | Header, Optional | The Customer's IP address if the Customer is currently logged in with the Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xFapiInteractionId` | `string \| undefined` | Header, Optional | An RFC4122 UID used as a correlation id. |
| `xMerchantIpAddress` | `string \| undefined` | Header, Optional | The IP address of the merchant when making account information requests through a Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xCustomerUserAgent` | `string \| undefined` | Header, Optional | The User-Agent of the application on the customer device that is used to make the account information request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAccountStatementsResponse`](../../doc/models/get-account-statements-response.md)

## Example Usage

```ts
const accountId = 'AccountId0';

try {
  const { result, ...httpResponse } = await statementsController.getAccountStatements(accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`AccountsStatements400Error`](../../doc/models/accounts-statements-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`AccountsStatements403Error`](../../doc/models/accounts-statements-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`AccountsStatements500Error`](../../doc/models/accounts-statements-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`AccountsStatements503Error`](../../doc/models/accounts-statements-503-error.md) |


# Get Statements

Get Statements

```ts
async getStatements(  fromStatementDateTime?: string,
  toStatementDateTime?: string,
  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<GetStatementsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromStatementDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `toStatementDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `xFapiAuthDate` | `string \| undefined` | Header, Optional | The time when the Customer last logged in with the Third Party.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC<br>**Constraints**: *Pattern*: `^(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun), \d{2} (Jan\|Feb\|Mar\|Apr\|May\|Jun\|Jul\|Aug\|Sep\|Oct\|Nov\|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT\|UTC)$` |
| `xFapiCustomerIpAddress` | `string \| undefined` | Header, Optional | The Customer's IP address if the Customer is currently logged in with the Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xFapiInteractionId` | `string \| undefined` | Header, Optional | An RFC4122 UID used as a correlation id. |
| `xMerchantIpAddress` | `string \| undefined` | Header, Optional | The IP address of the merchant when making account information requests through a Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xCustomerUserAgent` | `string \| undefined` | Header, Optional | The User-Agent of the application on the customer device that is used to make the account information request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetStatementsResponse`](../../doc/models/get-statements-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await statementsController.getStatements();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Statements400Error`](../../doc/models/statements-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`Statements403Error`](../../doc/models/statements-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`Statements500Error`](../../doc/models/statements-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`Statements503Error`](../../doc/models/statements-503-error.md) |

