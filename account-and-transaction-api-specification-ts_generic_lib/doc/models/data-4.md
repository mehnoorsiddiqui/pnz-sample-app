
# Data 4

Data

## Structure

`Data4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balance` | [`BalanceModel[]`](../../doc/models/balance-model.md) | Required | Balance |

## Example (as JSON)

```json
{
  "Balance": [
    {
      "AccountId": "AccountId0",
      "Amount": {
        "Amount": "Amount0",
        "Currency": "Currency6"
      },
      "CreditDebitIndicator": "Credit",
      "Type": "ClosingAvailable",
      "DateTime": "2016-03-13T12:52:32.123Z",
      "CreditLine": [
        {
          "Included": false,
          "Amount": {
            "Amount": "Amount0",
            "Currency": "Currency6"
          },
          "Type": "Temporary"
        }
      ]
    }
  ]
}
```

