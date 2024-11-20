# Transactions

A resource that describes a posting to an account that results in an increase or decrease to a balance

```ts
const transactionsController = new TransactionsController(client);
```

## Class Name

`TransactionsController`

## Methods

* [Get Account Transactions](../../doc/controllers/transactions.md#get-account-transactions)
* [Get Transactions](../../doc/controllers/transactions.md#get-transactions)


# Get Account Transactions

Get transactions related to an account

```ts
async getAccountTransactions(  accountId: string,
  fromBookingDateTime?: string,
  toBookingDateTime?: string,
  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<TransactionsGETresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | A unique identifier used to identify the account resource. |
| `fromBookingDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `toBookingDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `xFapiAuthDate` | `string \| undefined` | Header, Optional | The time when the Customer last logged in with the Third Party.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC<br>**Constraints**: *Pattern*: `^(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun), \d{2} (Jan\|Feb\|Mar\|Apr\|May\|Jun\|Jul\|Aug\|Sep\|Oct\|Nov\|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT\|UTC)$` |
| `xFapiCustomerIpAddress` | `string \| undefined` | Header, Optional | The Customer's IP address if the Customer is currently logged in with the Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xFapiInteractionId` | `string \| undefined` | Header, Optional | An RFC4122 UID used as a correlation id. |
| `xMerchantIpAddress` | `string \| undefined` | Header, Optional | The IP address of the merchant when making account information requests through a Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xCustomerUserAgent` | `string \| undefined` | Header, Optional | The User-Agent of the application on the customer device that is used to make the account information request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionsGETresponse`](../../doc/models/transactions-ge-tresponse.md)

## Example Usage

```ts
const accountId = 'AccountId0';

try {
  const { result, ...httpResponse } = await transactionsController.getAccountTransactions(accountId);
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
| 400 | Bad Request | [`AccountsTransactions400Error`](../../doc/models/accounts-transactions-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`AccountsTransactions403Error`](../../doc/models/accounts-transactions-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`AccountsTransactions500Error`](../../doc/models/accounts-transactions-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`AccountsTransactions503Error`](../../doc/models/accounts-transactions-503-error.md) |


# Get Transactions

Get Transactions

```ts
async getTransactions(  fromBookingDateTime?: string,
  toBookingDateTime?: string,
  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<TransactionsGETresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromBookingDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `toBookingDateTime` | `string \| undefined` | Query, Optional | The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the API Provider must ignore the timezone component. |
| `xFapiAuthDate` | `string \| undefined` | Header, Optional | The time when the Customer last logged in with the Third Party.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC<br>**Constraints**: *Pattern*: `^(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun), \d{2} (Jan\|Feb\|Mar\|Apr\|May\|Jun\|Jul\|Aug\|Sep\|Oct\|Nov\|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT\|UTC)$` |
| `xFapiCustomerIpAddress` | `string \| undefined` | Header, Optional | The Customer's IP address if the Customer is currently logged in with the Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xFapiInteractionId` | `string \| undefined` | Header, Optional | An RFC4122 UID used as a correlation id. |
| `xMerchantIpAddress` | `string \| undefined` | Header, Optional | The IP address of the merchant when making account information requests through a Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xCustomerUserAgent` | `string \| undefined` | Header, Optional | The User-Agent of the application on the customer device that is used to make the account information request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionsGETresponse`](../../doc/models/transactions-ge-tresponse.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await transactionsController.getTransactions();
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
| 400 | Bad Request | [`Transactions400Error`](../../doc/models/transactions-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`Transactions403Error`](../../doc/models/transactions-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`Transactions500Error`](../../doc/models/transactions-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`Transactions503Error`](../../doc/models/transactions-503-error.md) |

