
# Balance

## Structure

`Balance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `type` | `string` | Required | - |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | - |
| `creditLine` | `string[]` | Required | - |
| `dateTime` | `string` | Required | - |
| `creditDebitIndicator` | `string` | Required | - |

## Example (as JSON)

```json
{
  "AccountId": "OBA-99-7046-5813780-00",
  "Type": "PreviouslyClosedBooked",
  "Amount": {
    "Amount": "20000.00",
    "Currency": "NZD"
  },
  "CreditLine": [],
  "DateTime": "2022-06-26T06:57:53.228Z",
  "CreditDebitIndicator": "Credit"
}
```

