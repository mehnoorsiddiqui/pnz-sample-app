# Standing Orders

```ts
const standingOrdersController = new StandingOrdersController(client);
```

## Class Name

`StandingOrdersController`

## Methods

* [Get Account Standing Orders](../../doc/controllers/standing-orders.md#get-account-standing-orders)
* [Get Standing Orders](../../doc/controllers/standing-orders.md#get-standing-orders)


# Get Account Standing Orders

Get Standing Orders related to an account

```ts
async getAccountStandingOrders(  accountId: string,
  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<StandingOrdersGETresponse>>
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

[`StandingOrdersGETresponse`](../../doc/models/standing-orders-ge-tresponse.md)

## Example Usage

```ts
const accountId = 'AccountId0';

try {
  const { result, ...httpResponse } = await standingOrdersController.getAccountStandingOrders(accountId);
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
| 400 | Bad Request | [`AccountsStandingOrders400Error`](../../doc/models/accounts-standing-orders-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`AccountsStandingOrders403Error`](../../doc/models/accounts-standing-orders-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`AccountsStandingOrders500Error`](../../doc/models/accounts-standing-orders-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`AccountsStandingOrders503Error`](../../doc/models/accounts-standing-orders-503-error.md) |


# Get Standing Orders

Get Standing Orders

```ts
async getStandingOrders(  xFapiAuthDate?: string,
  xFapiCustomerIpAddress?: string,
  xFapiInteractionId?: string,
  xMerchantIpAddress?: string,
  xCustomerUserAgent?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<StandingOrdersGETresponse>>
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

[`StandingOrdersGETresponse`](../../doc/models/standing-orders-ge-tresponse.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await standingOrdersController.getStandingOrders();
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
| 400 | Bad Request | [`StandingOrders400Error`](../../doc/models/standing-orders-400-error.md) |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | [`StandingOrders403Error`](../../doc/models/standing-orders-403-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too Many Requests | `ApiError` |
| 500 | Internal Server Error | [`StandingOrders500Error`](../../doc/models/standing-orders-500-error.md) |
| 501 | Not Implemented | `ApiError` |
| 503 | Service Unavailable | [`StandingOrders503Error`](../../doc/models/standing-orders-503-error.md) |

