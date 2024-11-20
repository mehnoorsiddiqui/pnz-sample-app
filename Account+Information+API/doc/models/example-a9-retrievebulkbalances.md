
# Example A9 Retrievebulkbalances

## Structure

`ExampleA9Retrievebulkbalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data147`](../../doc/models/data-147.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
        "Amount": {
          "Currency": "NZD",
          "Amount": "19985.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "OpeningBooked",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "4332b48d-bde6-5ec3-bd6d-f5d62377f528",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "InterimBooked",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "d759723a-8686-5428-9857-ea326c9d5bed",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingAvailable",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "9522c6fe-c8f6-507f-b207-97273995b1d2",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "InterimBooked",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "b978be63-1961-5d34-ab91-7805c91c7199",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "InterimAvailable",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "23e3bf52-287c-5e7a-b272-724b956afc38",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingBooked",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "5b7df663-6020-5cc0-b57a-6d4ef24d26cf",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ForwardAvailable",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "9c5c40c7-a30d-52aa-85db-ba8652a229ad",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ForwardAvailable",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "f31e42a3-ad68-5865-ab02-e0ee5703a8a2",
        "Amount": {
          "Amount": "20000.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingBooked",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "a83674a2-82e7-51c1-b26c-07b3fc3184e7",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "OpeningBooked",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "80bef814-43bc-5be4-b0a7-d6c277b093ce",
        "Amount": {
          "Amount": "20000.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingAvailable",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "f3c53d04-e9f8-5476-ab5e-5b6aed2edd29",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingBooked",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "35777098-2762-5a7d-89c8-cb6d5ddfa04b",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "InterimAvailable",
        "DateTime": "2017-07-28T00:00:00.000Z"
      },
      {
        "AccountId": "70ecd72b-75f3-508f-978e-b1cdce600271",
        "Amount": {
          "Currency": "NZD",
          "Amount": "20000.00"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "Information",
        "DateTime": "2017-07-28T00:00:00.000Z"
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://mwnz-prod.apigee.net/balances"
  }
}
```

