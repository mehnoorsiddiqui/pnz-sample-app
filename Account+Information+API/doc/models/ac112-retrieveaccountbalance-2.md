
# AC112 Retrieveaccountbalance 2

## Structure

`AC112Retrieveaccountbalance2`

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
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts/39b0736f-e4ec-5bd3-8588-112abe8eb247/balances"
  }
}
```

