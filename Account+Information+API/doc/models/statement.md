
# Statement

## Structure

`Statement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `startDateTime` | `string` | Required | - |
| `endDateTime` | `string` | Required | - |
| `creationDateTime` | `string` | Required | - |
| `type` | `string` | Required | - |
| `statementId` | `string` | Required | - |
| `statementDescription` | `string[]` | Required | - |
| `statementBenefit` | `string[]` | Required | - |
| `statementFee` | `string[]` | Required | - |
| `statementInterest` | `string[]` | Required | - |
| `statementDateTime` | `string[]` | Required | - |
| `statementRate` | `string[]` | Required | - |
| `statementValue` | `string[]` | Required | - |
| `statementAmount` | [`StatementAmount[]`](../../doc/models/statement-amount.md) | Required | - |

## Example (as JSON)

```json
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
}
```

