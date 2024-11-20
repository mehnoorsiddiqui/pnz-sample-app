
# AC1110 Retrieveaccountstatements 2

## Structure

`AC1110Retrieveaccountstatements2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data10`](../../doc/models/data-10.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "StatementId": "50f1de40-39b6-5eb4-8f7d-210b7708cf6f",
        "StartDateTime": "2018-12-01T00:00:00.000Z",
        "EndDateTime": "2018-12-31T23:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "StatementAmount": [
          {
            "Type": "CurrentPayment",
            "Amount": {
              "Amount": "12.34",
              "Currency": "NZD"
            },
            "CreditDebitIndicator": "Credit"
          },
          {
            "CreditDebitIndicator": "Debit",
            "Type": "CurrentPayment",
            "Amount": {
              "Currency": "NZD",
              "Amount": "24.00"
            }
          }
        ],
        "Type": "RegularPeriodic",
        "StatementDescription": [],
        "StatementBenefit": [],
        "StatementFee": [],
        "StatementInterest": [],
        "StatementDateTime": [],
        "StatementRate": [],
        "StatementValue": []
      },
      {
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "StatementId": "661147b6-5b19-585c-bb01-c1737a9dcbac",
        "StartDateTime": "2018-11-01T00:00:00.000Z",
        "EndDateTime": "2018-11-30T23:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "CurrentPayment",
            "Amount": {
              "Currency": "NZD",
              "Amount": "12.34"
            }
          },
          {
            "Type": "CurrentPayment",
            "Amount": {
              "Amount": "24.00",
              "Currency": "NZD"
            },
            "CreditDebitIndicator": "Debit"
          }
        ],
        "Type": "RegularPeriodic",
        "StatementDescription": [],
        "StatementBenefit": [],
        "StatementFee": [],
        "StatementInterest": [],
        "StatementDateTime": [],
        "StatementRate": [],
        "StatementValue": []
      },
      {
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "StatementId": "e5d66f68-e793-5ae2-8ec7-6cea3b8f9d69",
        "StartDateTime": "2018-10-01T00:00:00.000Z",
        "EndDateTime": "2018-10-31T23:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "StatementAmount": [
          {
            "Type": "CurrentPayment",
            "Amount": {
              "Currency": "NZD",
              "Amount": "12.34"
            },
            "CreditDebitIndicator": "Credit"
          },
          {
            "Type": "CurrentPayment",
            "Amount": {
              "Currency": "NZD",
              "Amount": "24.00"
            },
            "CreditDebitIndicator": "Debit"
          }
        ],
        "Type": "RegularPeriodic",
        "StatementDescription": [],
        "StatementBenefit": [],
        "StatementFee": [],
        "StatementInterest": [],
        "StatementDateTime": [],
        "StatementRate": [],
        "StatementValue": []
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts/39b0736f-e4ec-5bd3-8588-112abe8eb247/statements"
  }
}
```

