
# AC109 Retrievebulkstatements 2

## Structure

`AC109Retrievebulkstatements2`

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
        "StatementId": "661147b6-5b19-585c-bb01-c1737a9dcbac",
        "StartDateTime": "2018-11-01T00:00:00.000Z",
        "EndDateTime": "2018-11-30T23:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "StatementAmount": [
          {
            "Amount": {
              "Currency": "NZD",
              "Amount": "12.34"
            },
            "CreditDebitIndicator": "Credit",
            "Type": "CurrentPayment"
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
              "Amount": "12.34",
              "Currency": "NZD"
            },
            "CreditDebitIndicator": "Credit"
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
        "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
        "StatementId": "f8a2022c-4aa3-514c-8918-95d0b0524f57",
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
        "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
        "StatementId": "b106ae6a-3717-5d10-9364-e7c1924e1bec",
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
        "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
        "StatementId": "b8c78f88-ba41-5f34-99b2-95d1739c553b",
        "StartDateTime": "2018-10-01T00:00:00.000Z",
        "EndDateTime": "2018-10-31T23:59:59.999Z",
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
        "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
        "StatementId": "b30a52ce-4437-52dd-8822-8a213b253241",
        "StartDateTime": "2018-12-01T00:00:00.000Z",
        "EndDateTime": "2018-12-31T23:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "StatementAmount": [
          {
            "Amount": {
              "Currency": "NZD",
              "Amount": "12.34"
            },
            "CreditDebitIndicator": "Credit",
            "Type": "CurrentPayment"
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
      },
      {
        "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
        "StatementId": "5f1b054c-8c97-562d-9853-b181ad9207b4",
        "StartDateTime": "2018-11-01T00:00:00.000Z",
        "EndDateTime": "2018-11-30T23:59:59.999Z",
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
      },
      {
        "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
        "StatementId": "f18c217a-9317-5700-bf7d-9b6a6bfa3721",
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
        "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
        "StatementId": "3af5a4ec-0bc7-5469-8ba9-ab18f324363a",
        "StartDateTime": "2018-12-01T00:00:00.000Z",
        "EndDateTime": "2018-12-31T23:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "StatementAmount": [
          {
            "Amount": {
              "Currency": "NZD",
              "Amount": "12.34"
            },
            "CreditDebitIndicator": "Credit",
            "Type": "CurrentPayment"
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
        "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
        "StatementId": "0c2a6b2b-6de2-5bf5-bb28-e068b9531a47",
        "StartDateTime": "2018-11-01T00:00:00.000Z",
        "EndDateTime": "2018-11-30T23:59:59.999Z",
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
            "Amount": {
              "Currency": "NZD",
              "Amount": "24.00"
            },
            "CreditDebitIndicator": "Debit",
            "Type": "CurrentPayment"
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
        "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
        "StatementId": "57559fd7-9a40-55a2-8e73-4c9906b2e659",
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
        "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
        "StatementId": "71fe4ce9-0e88-573f-9fc1-c14cdb4a5e52",
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
        "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
        "StatementId": "bd76bfb7-3baa-506e-8fa0-30290f624a2c",
        "StartDateTime": "2018-11-01T00:00:00.000Z",
        "EndDateTime": "2018-11-30T23:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "StatementAmount": [
          {
            "Amount": {
              "Currency": "NZD",
              "Amount": "12.34"
            },
            "CreditDebitIndicator": "Credit",
            "Type": "CurrentPayment"
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
      },
      {
        "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
        "StatementId": "66054e99-2464-518c-a756-7a1ddf291d38",
        "StartDateTime": "2018-10-01T00:00:00.000Z",
        "EndDateTime": "2018-10-31T23:59:59.999Z",
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
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/statements"
  }
}
```

