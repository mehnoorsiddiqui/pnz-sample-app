
# Account 8

## Structure

`Account8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `nickname` | `string` | Required | - |
| `account` | [`Account9`](../../doc/models/account-9.md) | Required | - |
| `servicer` | [`Servicer`](../../doc/models/servicer.md) | Required | - |

## Example (as JSON)

```json
{
  "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
  "Currency": "NZD",
  "Nickname": "Cheque Account",
  "Account": {
    "Identification": "99-1810-5604739-00",
    "SchemeName": "BECSElectronicCredit",
    "Name": "CurrentAccount"
  },
  "Servicer": {
    "SchemeName": "BICFI",
    "Identification": "MWNZBNK1"
  }
}
```

