
# Example A112 Retrieveaccountbalance

## Structure

`ExampleA112Retrieveaccountbalance`

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
    "Self": "https://mwnz-prod.apigee.net/accounts/4986e820-b496-5215-b650-2e9fcd65f50b/balances"
  }
}
```

