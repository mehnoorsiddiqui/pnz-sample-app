
# AC112 Retrieveaccountbalance

## Structure

`AC112Retrieveaccountbalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data3`](../../doc/models/data-3.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Type": "PreviouslyClosedBooked",
        "Amount": {
          "Amount": "20000.00",
          "Currency": "NZD"
        },
        "CreditLine": [],
        "DateTime": "2022-06-26T06:57:53.228Z",
        "CreditDebitIndicator": "Credit"
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/accounts/OBA-99-7046-5813780-00/balances"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```

