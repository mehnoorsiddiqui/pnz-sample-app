
# HFAC8 Exchangeauthorizationcodeforaccesstoken

## Structure

`HFAC8Exchangeauthorizationcodeforaccesstoken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenType` | `string` | Required | - |
| `expiresIn` | `number` | Required | - |
| `refreshToken` | `string` | Required | - |
| `accessToken` | `string` | Required | - |

## Example (as JSON)

```json
{
  "token_type": "Bearer",
  "expires_in": 3599,
  "refresh_token": "be01479c2e1140eeb0d08ae45a74cecaec450708161a4f0c8c52332f917de94c",
  "access_token": "a19d9b30290843a586473ccd257b7bd880e3ada09e044736a5c0ba8158298279"
}
```

