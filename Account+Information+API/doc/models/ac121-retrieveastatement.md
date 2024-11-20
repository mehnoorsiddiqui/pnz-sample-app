
# AC121 Retrieveastatement

## Structure

`AC121Retrieveastatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data22`](../../doc/models/data-22.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Statement": {
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
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/accounts/OBA-99-7046-5813780-00/statements/2b3ccbff-c249-5a42-8658-070f8f1618e7"
  },
  "Meta": {}
}
```

