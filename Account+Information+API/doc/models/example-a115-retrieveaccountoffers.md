
# Example A115 Retrieveaccountoffers

## Structure

`ExampleA115Retrieveaccountoffers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data150`](../../doc/models/data-150.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Offer": [
      {
        "OfferId": "329b3603-69f1-5899-bfd7-24d84f6229d2",
        "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b"
      },
      {
        "OfferId": "1be94062-07f0-5349-b3f2-22fe0c2cbc2b",
        "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b"
      },
      {
        "OfferId": "10901bc9-12ea-5d2a-8c8b-f0c64fbf2fd6",
        "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b"
      },
      {
        "OfferId": "f0601ea8-a8e6-52db-879b-b95bf83c1099",
        "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b"
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://mwnz-prod.apigee.net/accounts/4986e820-b496-5215-b650-2e9fcd65f50b/offers"
  }
}
```

