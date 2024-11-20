
# Data 10

## Structure

`Data10`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statement` | [`Statement[]`](../../doc/models/statement.md) | Required | - |

## Example (as JSON)

```json
{
  "Statement": [
    {
      "AccountId": "OBA-99-7046-5813780-00",
      "StartDateTime": "2018-11-30T11:00:00.000Z",
      "EndDateTime": "2018-12-31T10:59:59.999Z",
      "CreationDateTime": "2019-01-01T02:00:00.000Z",
      "Type": "RegularPeriodic",
      "StatementId": "2b3ccbff-c249-5a42-8658-070f8f1618e7",
      "StatementDescription": [],
      "StatementBenefit": [],
      "StatementFee": [],
      "StatementInterest": [],
      "StatementDateTime": [],
      "StatementRate": [],
      "StatementValue": [],
      "StatementAmount": [
        {
          "CreditDebitIndicator": "Credit",
          "Type": "CurrentPayment",
          "Amount": {
            "Amount": "12.34",
            "Currency": "NZD"
          }
        },
        {
          "CreditDebitIndicator": "Debit",
          "Type": "CurrentPayment",
          "Amount": {
            "Amount": "24.00",
            "Currency": "NZD"
          }
        }
      ]
    },
    {
      "AccountId": "OBA-99-7046-5813780-00",
      "StartDateTime": "2018-10-31T11:00:00.000Z",
      "EndDateTime": "2018-11-30T10:59:59.999Z",
      "CreationDateTime": "2019-01-01T02:00:00.000Z",
      "Type": "AccountOpening",
      "StatementId": "9fedc3e1-6668-506e-bd9f-70ae54d82fed",
      "StatementDescription": [],
      "StatementBenefit": [],
      "StatementFee": [],
      "StatementInterest": [],
      "StatementDateTime": [],
      "StatementRate": [],
      "StatementValue": [],
      "StatementAmount": [
        {
          "CreditDebitIndicator": "Credit",
          "Type": "CurrentPayment",
          "Amount": {
            "Amount": "12.34",
            "Currency": "NZD"
          }
        },
        {
          "CreditDebitIndicator": "Debit",
          "Type": "CurrentPayment",
          "Amount": {
            "Amount": "24.00",
            "Currency": "NZD"
          }
        }
      ]
    },
    {
      "AccountId": "OBA-99-7046-5813780-00",
      "StartDateTime": "2018-09-30T11:00:00.000Z",
      "EndDateTime": "2018-10-31T10:59:59.999Z",
      "CreationDateTime": "2019-01-01T02:00:00.000Z",
      "Type": "AccountClosure",
      "StatementId": "13829b73-8480-528c-bfe8-590d556ca6d8",
      "StatementDescription": [],
      "StatementBenefit": [],
      "StatementFee": [],
      "StatementInterest": [],
      "StatementDateTime": [],
      "StatementRate": [],
      "StatementValue": [],
      "StatementAmount": [
        {
          "CreditDebitIndicator": "Credit",
          "Type": "CurrentPayment",
          "Amount": {
            "Amount": "12.34",
            "Currency": "NZD"
          }
        },
        {
          "CreditDebitIndicator": "Debit",
          "Type": "CurrentPayment",
          "Amount": {
            "Amount": "24.00",
            "Currency": "NZD"
          }
        }
      ]
    }
  ]
}
```

