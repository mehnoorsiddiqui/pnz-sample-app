
# AC102 Retrievebulkbalances 2

## Structure

`AC102Retrievebulkbalances2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data3`](../../doc/models/data-3.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "Amount": {
          "Amount": "19375.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingBooked",
        "DateTime": "2017-07-28T00:00:00.000Z",
        "CreditLine": []
      },
      {
        "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "PreviouslyClosedBooked",
        "DateTime": "2017-07-28T00:00:00.000Z",
        "CreditLine": []
      },
      {
        "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
        "Amount": {
          "Amount": "20000.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "InterimBooked",
        "DateTime": "2017-07-28T00:00:00.000Z",
        "CreditLine": []
      },
      {
        "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "InterimAvailable",
        "DateTime": "2017-07-28T00:00:00.000Z",
        "CreditLine": []
      },
      {
        "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
        "Amount": {
          "Amount": "20000.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "Expected",
        "DateTime": "2017-07-28T00:00:00.000Z",
        "CreditLine": []
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/balances"
  }
}
```

