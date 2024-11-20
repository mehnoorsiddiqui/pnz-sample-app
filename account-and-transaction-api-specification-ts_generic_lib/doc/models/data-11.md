
# Data 11

## Structure

`Data11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statement` | [`Statement \| undefined`](../../doc/models/statement.md) | Optional | - |

## Example (as JSON)

```json
{
  "Statement": {
    "AccountId": "AccountId6",
    "StatementId": "StatementId2",
    "StatementReference": "StatementReference0",
    "Type": "AccountOpening",
    "StartDateTime": "2016-03-13T12:52:32.123Z",
    "EndDateTime": "2016-03-13T12:52:32.123Z",
    "CreationDateTime": "2016-03-13T12:52:32.123Z",
    "StatementDescription": [
      "StatementDescription8",
      "StatementDescription9",
      "StatementDescription0"
    ],
    "StatementBenefit": [
      {
        "Amount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "Type": "Cashback"
      },
      {
        "Amount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "Type": "Cashback"
      }
    ],
    "StatementFee": [
      {
        "Amount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ForeignTransaction"
      },
      {
        "Amount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ForeignTransaction"
      }
    ]
  }
}
```

