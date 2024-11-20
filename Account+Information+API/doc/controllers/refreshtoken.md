# Refreshtoken

```ts
const refreshtokenController = new RefreshtokenController(client);
```

## Class Name

`RefreshtokenController`


# Refresh Access Token

```ts
async refreshAccessToken(
  grantType: string,
  refreshToken: string,
  scope: string,
  clientAssertionType: string,
  clientAssertion: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<HFAC8Exchangeauthorizationcodeforaccesstoken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantType` | `string` | Form, Required | - |
| `refreshToken` | `string` | Form, Required | - |
| `scope` | `string` | Form, Required | - |
| `clientAssertionType` | `string` | Form, Required | - |
| `clientAssertion` | `string` | Form, Required | A JWT that contains information for client authentication. It must be digitally signed using a private key. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`HFAC8Exchangeauthorizationcodeforaccesstoken`](../../doc/models/hfac8-exchangeauthorizationcodeforaccesstoken.md)

## Example Usage

```ts
const contentType = null;
const grantType = 'refresh_token';
const refreshToken = 'REFRESH_TOKEN';
const scope = 'openid accounts';
const clientAssertionType = 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer';
const clientAssertion = 'CLIENT_ASSERTION_JWT';
try {
  const { result, ...httpResponse } = await refreshTokenController.refreshAccessToken(grantType, refreshToken, scope, clientAssertionType, clientAssertion);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

