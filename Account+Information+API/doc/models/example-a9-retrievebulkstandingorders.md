
# Example A9 Retrievebulkstandingorders

## Structure

`ExampleA9Retrievebulkstandingorders`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data153`](../../doc/models/data-153.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "StandingOrderId": "9158057758-99-5414-9158057758-00",
        "Frequency": "EvryDay",
        "NextPaymentDateTime": "2019-05-27T05:54:39.948Z",
        "NextPaymentAmount": {
          "Currency": "NZD",
          "Amount": "5.00"
        }
      },
      {
        "AccountId": "48a15fe2-ee87-5273-9ace-10ef2d6e7b80",
        "StandingOrderId": "9158057758-99-5414-9158057758-01",
        "Frequency": "EvryDay",
        "NextPaymentDateTime": "2019-05-27T05:54:39.948Z",
        "NextPaymentAmount": {
          "Currency": "NZD",
          "Amount": "5.00"
        }
      },
      {
        "AccountId": "0382dda4-81e4-5ecc-929d-600f04830678",
        "StandingOrderId": "9158057758-99-5414-9158057758-02",
        "Frequency": "EvryDay",
        "NextPaymentDateTime": "2019-05-27T05:54:39.948Z",
        "NextPaymentAmount": {
          "Currency": "NZD",
          "Amount": "5.00"
        }
      },
      {
        "AccountId": "31f73ab6-e4e7-5afa-8d4d-dfaeac76aaa2",
        "StandingOrderId": "9158057758-99-5414-9158057758-03",
        "Frequency": "EvryDay",
        "NextPaymentDateTime": "2019-05-27T05:54:39.948Z",
        "NextPaymentAmount": {
          "Currency": "NZD",
          "Amount": "5.00"
        }
      },
      {
        "AccountId": "662e77f5-a72c-547f-9a1b-be2f9e69137e",
        "StandingOrderId": "9158057758-99-5414-9158057758-04",
        "Frequency": "EvryDay",
        "NextPaymentDateTime": "2019-05-27T05:54:39.948Z",
        "NextPaymentAmount": {
          "Currency": "NZD",
          "Amount": "5.00"
        }
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "/standing-orders"
  }
}
```

