
# Get Statements Response

## Structure

`GetStatementsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data21`](../../doc/models/data-21.md) | Required | - |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Statement": [
      {
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
      },
      {
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
      },
      {
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
    ]
  },
  "Links": {
    "Self": "Self2",
    "First": "First0",
    "Prev": "Prev6",
    "Next": "Next0",
    "Last": "Last4"
  },
  "Meta": {
    "TotalPages": 96,
    "FirstAvailableDateTime": "2016-03-13T12:52:32.123Z",
    "LastAvailableDateTime": "2016-03-13T12:52:32.123Z"
  }
}
```

