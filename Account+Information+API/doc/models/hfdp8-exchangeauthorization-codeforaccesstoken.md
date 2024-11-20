
# HFDP8 Exchangeauthorization Codeforaccesstoken

## Structure

`HFDP8ExchangeauthorizationCodeforaccesstoken`

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
  "refresh_token": "eeb478e7aac2424e84188ca1e5cb270234104dd455404f21becf5d656779dc96",
  "access_token": "c864a3cdea784a6eb86f2a4f910dbfbe14fe5a19ca0943d68d9b4ecbda279165"
}
```

