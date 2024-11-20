
# Statement Amount

## Structure

`StatementAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditDebitIndicator` | `string` | Required | - |
| `type` | `string` | Required | - |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | - |

## Example (as JSON)

```json
{
  "CreditDebitIndicator": "Credit",
  "Type": "CurrentPayment",
  "Amount": {
    "Amount": "12.34",
    "Currency": "NZD"
  }
}
```

