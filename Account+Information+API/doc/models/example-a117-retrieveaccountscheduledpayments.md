
# Example A117 Retrieveaccountscheduledpayments

## Structure

`ExampleA117Retrieveaccountscheduledpayments`

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
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "/accounts/766e7658-0b56-5fd3-bc7f-58a7653d7bdb/scheduled-payments"
  }
}
```

