
# Balance 20

## Structure

`Balance20`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | - |
| `creditDebitIndicator` | `string` | Required | - |
| `type` | `string` | Required | - |
| `dateTime` | `string` | Required | - |

## Example (as JSON)

```json
{
  "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
  "Amount": {
    "Currency": "NZD",
    "Amount": "19985.00"
  },
  "CreditDebitIndicator": "Credit",
  "Type": "OpeningBooked",
  "DateTime": "2017-07-28T00:00:00.000Z"
}
```

