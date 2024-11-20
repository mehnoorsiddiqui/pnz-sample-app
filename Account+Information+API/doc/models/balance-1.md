
# Balance 1

## Structure

`Balance1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | - |
| `creditDebitIndicator` | `string` | Required | - |
| `type` | `string` | Required | - |

## Example (as JSON)

```json
{
  "Amount": {
    "Amount": "230.00",
    "Currency": "NZD"
  },
  "CreditDebitIndicator": "Credit",
  "Type": "InterimBooked"
}
```

