
# Example A118 Retrieveaccountstandingorders

## Structure

`ExampleA118Retrieveaccountstandingorders`

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
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "/accounts/766e7658-0b56-5fd3-bc7f-58a7653d7bdb/standing-orders"
  }
}
```

