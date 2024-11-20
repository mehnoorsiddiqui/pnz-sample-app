
# HFEP8 Exchangeauthorization Codeforaccesstoken

## Structure

`HFEP8ExchangeauthorizationCodeforaccesstoken`

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
  "refresh_token": "b851b7d6ba2645d3b7fc5e68b4d91a60a81057c1ad334f2db373c21a6afd1ae2",
  "access_token": "ef81e1644a274101a0c4b0166eb9ce5a1d512bfd82f4487ea2f4101a2ba7bd90"
}
```

