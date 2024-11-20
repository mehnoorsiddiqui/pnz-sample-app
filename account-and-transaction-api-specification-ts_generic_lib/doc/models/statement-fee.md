
# Statement Fee

Set of elements used to provide details of a fee for the statement resource.

## Structure

`StatementFee`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount42`](../../doc/models/amount-42.md) | Required | - |
| `creditDebitIndicator` | [`CreditDebitIndicator3Enum`](../../doc/models/credit-debit-indicator-3-enum.md) | Required | Indicates whether the amount is a credit or a debit. Usage: A zero amount is considered to be a credit amount. |
| `type` | [`Type5Enum`](../../doc/models/type-5-enum.md) | Required | Fee type, in a coded form. |

## Example (as JSON)

```json
{
  "Amount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  },
  "CreditDebitIndicator": "Credit",
  "Type": "ForeignTransaction"
}
```

