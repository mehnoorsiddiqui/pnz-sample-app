
# A9 Retrievebulkoffers

## Structure

`A9Retrievebulkoffers`

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
        "OfferId": "77d35f5c-2ebe-5510-826b-cce85ac23252",
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb"
      },
      {
        "OfferId": "80e9d043-4e62-5fad-81cf-d14cca027f3c",
        "AccountId": "48a15fe2-ee87-5273-9ace-10ef2d6e7b80"
      },
      {
        "OfferId": "657946d5-7542-53c4-b22c-13c2450781eb",
        "AccountId": "0382dda4-81e4-5ecc-929d-600f04830678"
      },
      {
        "OfferId": "b53a315b-eacc-5395-979c-a1e2639c1c7e",
        "AccountId": "31f73ab6-e4e7-5afa-8d4d-dfaeac76aaa2"
      },
      {
        "OfferId": "f34f8f6a-136d-54d0-aab3-779369733d11",
        "AccountId": "662e77f5-a72c-547f-9a1b-be2f9e69137e"
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "/offers"
  }
}
```

