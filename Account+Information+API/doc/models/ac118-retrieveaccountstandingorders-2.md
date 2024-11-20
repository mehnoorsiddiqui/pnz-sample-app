
# AC118 Retrieveaccountstandingorders 2

## Structure

`AC118Retrieveaccountstandingorders2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data81`](../../doc/models/data-81.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "StandingOrderId": "9999999-99-1810-5604739-00",
        "Frequency": "EvryDay",
        "NextPaymentDateTime": "2019-01-15T02:00:00.000Z",
        "NextPaymentAmount": {
          "Amount": "5.00",
          "Currency": "NZD"
        },
        "CreditorAccount": {
          "Identification": "99-1234-1234567-99",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Just A. Creditor"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        }
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts/39b0736f-e4ec-5bd3-8588-112abe8eb247/standing-orders"
  }
}
```

