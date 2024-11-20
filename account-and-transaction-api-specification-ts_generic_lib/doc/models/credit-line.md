
# Credit Line

## Structure

`CreditLine`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `included` | `boolean` | Required | Indicates whether or not the credit line is included in the balance of the account. Usage: If not present, credit line is not included in the balance amount of the account. |
| `amount` | [`Amount10 \| undefined`](../../doc/models/amount-10.md) | Optional | - |
| `type` | [`Type1Enum \| undefined`](../../doc/models/type-1-enum.md) | Optional | Limit type, in a coded form. |

## Example (as JSON)

```json
{
  "Included": false,
  "Amount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  },
  "Type": "Temporary"
}
```

