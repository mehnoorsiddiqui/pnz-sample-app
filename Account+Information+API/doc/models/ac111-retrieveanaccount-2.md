
# AC111 Retrieveanaccount 2

## Structure

`AC111Retrieveanaccount2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data84`](../../doc/models/data-84.md) | Required | - |
| `links` | [`Links70`](../../doc/models/links-70.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Account": {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "Currency": "NZD",
      "Nickname": "Cheque Account",
      "Account": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "CurrentAccount",
        "Identification": "99-1810-5604739-00"
      },
      "Servicer": {
        "SchemeName": "BICFI",
        "Identification": "MWNZBNK1"
      }
    }
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts/39b0736f-e4ec-5bd3-8588-112abe8eb247",
    "Payments": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/payments"
  },
  "Meta": {}
}
```

