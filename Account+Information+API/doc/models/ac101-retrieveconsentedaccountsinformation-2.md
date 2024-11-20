
# AC101 Retrieveconsentedaccountsinformation 2

## Structure

`AC101Retrieveconsentedaccountsinformation2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data74`](../../doc/models/data-74.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links70`](../../doc/models/links-70.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Account": [
      {
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "Identification": "99-1810-5604739-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Servicer": {
          "SchemeName": "BICFI",
          "Identification": "MWNZBNK1"
        }
      },
      {
        "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount",
          "Identification": "99-1810-5604739-01"
        },
        "Servicer": {
          "SchemeName": "BICFI",
          "Identification": "MWNZBNK1"
        }
      },
      {
        "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount",
          "Identification": "99-1810-5604739-02"
        },
        "Servicer": {
          "SchemeName": "BICFI",
          "Identification": "MWNZBNK1"
        }
      },
      {
        "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "Identification": "99-1810-5604739-03",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Servicer": {
          "SchemeName": "BICFI",
          "Identification": "MWNZBNK1"
        }
      },
      {
        "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount",
          "Identification": "99-1810-5604739-04"
        },
        "Servicer": {
          "SchemeName": "BICFI",
          "Identification": "MWNZBNK1"
        }
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts",
    "Payments": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/payments"
  }
}
```

