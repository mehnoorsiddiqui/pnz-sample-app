# Scheduled Payments

```ts
const scheduledPaymentsController = new ScheduledPaymentsController(client);
```

## Class Name

`ScheduledPaymentsController`

## Methods

* [Get Account Scheduled Payments](../../doc/controllers/scheduled-payments.md#get-account-scheduled-payments)
* [Get Scheduled Payments](../../doc/controllers/scheduled-payments.md#get-scheduled-payments)


# Get Account Scheduled Payments

Get Scheduled Payments related to an account

```ts
async getAccountScheduledPayments(  accountId: string,
  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<GetAccountScheduledPaymentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | A unique identifier used to identify the account resource. |
| `xFapiAuthDate` | `string \| undefined` | Header, Optional | The time when the Customer last logged in with the Third Party.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC<br>**Constraints**: *Pattern*: `^(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun), \d{2} (Jan\|Feb\|Mar\|Apr\|May\|Jun\|Jul\|Aug\|Sep\|Oct\|Nov\|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT\|UTC)$` |
| `xFapiCustomerIpAddress` | `string \| undefined` | Header, Optional | The Customer's IP address if the Customer is currently logged in with the Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xFapiInteractionId` | `string \| undefined` | Header, Optional | An RFC4122 UID used as a correlation id. |
| `xMerchantIpAddress` | `string \| undefined` | Header, Optional | The IP address of the merchant when making account information requests through a Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xCustomerUserAgent` | `string \| undefined` | Header, Optional | The User-Agent of the application on the customer device that is used to make the account information request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAccountScheduledPaymentsResponse`](../../doc/models/get-account-scheduled-payments-response.md)

## Example Usage

```ts
const accountId = 'AccountId0';

try {
  const { result, ...httpResponse } = await scheduledPaymentsController.getAccountScheduledPayments(accountId);
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
| 400 | Bad Request | [`AccountsScheduledPayments400Error`](../../doc/models/accounts-scheduled-payments-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`AccountsScheduledPayments403Error`](../../doc/models/accounts-scheduled-payments-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`AccountsScheduledPayments500Error`](../../doc/models/accounts-scheduled-payments-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`AccountsScheduledPayments503Error`](../../doc/models/accounts-scheduled-payments-503-error.md) |


# Get Scheduled Payments

Get Scheduled Payments

```ts
async getScheduledPayments(  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<GetScheduledPaymentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFapiAuthDate` | `string \| undefined` | Header, Optional | The time when the Customer last logged in with the Third Party.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC<br>**Constraints**: *Pattern*: `^(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun), \d{2} (Jan\|Feb\|Mar\|Apr\|May\|Jun\|Jul\|Aug\|Sep\|Oct\|Nov\|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT\|UTC)$` |
| `xFapiCustomerIpAddress` | `string \| undefined` | Header, Optional | The Customer's IP address if the Customer is currently logged in with the Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xFapiInteractionId` | `string \| undefined` | Header, Optional | An RFC4122 UID used as a correlation id. |
| `xMerchantIpAddress` | `string \| undefined` | Header, Optional | The IP address of the merchant when making account information requests through a Third Party.<br>**Constraints**: *Pattern*: `^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$` |
| `xCustomerUserAgent` | `string \| undefined` | Header, Optional | The User-Agent of the application on the customer device that is used to make the account information request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetScheduledPaymentsResponse`](../../doc/models/get-scheduled-payments-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await scheduledPaymentsController.getScheduledPayments();
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
| 400 | Bad Request | [`ScheduledPayments400Error`](../../doc/models/scheduled-payments-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`ScheduledPayments403Error`](../../doc/models/scheduled-payments-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`ScheduledPayments500Error`](../../doc/models/scheduled-payments-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`ScheduledPayments503Error`](../../doc/models/scheduled-payments-503-error.md) |

