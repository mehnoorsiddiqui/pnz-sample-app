
# Example A9 Retrievebulkscheduledpayments

## Structure

`ExampleA9Retrievebulkscheduledpayments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data152`](../../doc/models/data-152.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "ScheduledPaymentDateTime": "2019-07-02T05:54:39.948Z",
        "ScheduledType": "Execution",
        "InstructedAmount": {
          "Currency": "NZD",
          "Amount": "10.00"
        }
      },
      {
        "AccountId": "48a15fe2-ee87-5273-9ace-10ef2d6e7b80",
        "ScheduledPaymentDateTime": "2019-06-27T05:54:39.948Z",
        "ScheduledType": "Arrival",
        "InstructedAmount": {
          "Currency": "NZD",
          "Amount": "10.00"
        }
      },
      {
        "AccountId": "0382dda4-81e4-5ecc-929d-600f04830678",
        "ScheduledPaymentDateTime": "2019-06-19T05:54:39.948Z",
        "ScheduledType": "Arrival",
        "InstructedAmount": {
          "Currency": "NZD",
          "Amount": "10.00"
        }
      },
      {
        "AccountId": "31f73ab6-e4e7-5afa-8d4d-dfaeac76aaa2",
        "ScheduledPaymentDateTime": "2019-07-01T05:54:39.948Z",
        "ScheduledType": "Arrival",
        "InstructedAmount": {
          "Amount": "10.00",
          "Currency": "NZD"
        }
      },
      {
        "AccountId": "662e77f5-a72c-547f-9a1b-be2f9e69137e",
        "ScheduledPaymentDateTime": "2019-06-15T05:54:39.948Z",
        "ScheduledType": "Arrival",
        "InstructedAmount": {
          "Currency": "NZD",
          "Amount": "10.00"
        }
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "/scheduled-payments"
  }
}
```

