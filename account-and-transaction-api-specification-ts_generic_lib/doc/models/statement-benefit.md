
# Statement Benefit

Set of elements used to provide details of a benefit or reward amount for the statement resource.

## Structure

`StatementBenefit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount42`](../../doc/models/amount-42.md) | Required | - |
| `type` | [`Type4Enum`](../../doc/models/type-4-enum.md) | Required | Benefit type, in a coded form. |

## Example (as JSON)

```json
{
  "Amount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  },
  "Type": "Cashback"
}
```

