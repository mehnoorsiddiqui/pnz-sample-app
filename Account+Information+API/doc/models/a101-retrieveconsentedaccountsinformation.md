
# A101 Retrieveconsentedaccountsinformation

## Structure

`A101Retrieveconsentedaccountsinformation`

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
        "AccountId": "c2555fa5-ac68-5e70-9045-7b870b8b71eb",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount",
          "Identification": "99-5414-7343592-00"
        },
        "Servicer": {
          "SchemeName": "BICFI",
          "Identification": "MWNZBNK1"
        }
      },
      {
        "AccountId": "e777cc86-ac34-5fec-b787-2ea929a86da6",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount",
          "Identification": "99-5414-7343592-01"
        },
        "Servicer": {
          "SchemeName": "BICFI",
          "Identification": "MWNZBNK1"
        }
      },
      {
        "AccountId": "b6a8a818-a0b8-5dc8-9e11-918134112946",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount",
          "Identification": "99-5414-7343592-02"
        },
        "Servicer": {
          "SchemeName": "BICFI",
          "Identification": "MWNZBNK1"
        }
      },
      {
        "AccountId": "b91cecee-8985-514d-816b-941eea82bdf6",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount",
          "Identification": "99-5414-7343592-03"
        },
        "Servicer": {
          "SchemeName": "BICFI",
          "Identification": "MWNZBNK1"
        }
      },
      {
        "AccountId": "7aa49349-51e6-5d30-bb00-22b23cd3e82a",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Account": {
          "Identification": "99-5414-7343592-04",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Servicer": {
          "Identification": "MWNZBNK1",
          "SchemeName": "BICFI"
        }
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v1.0/accounts",
    "Payments": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v1.0/payments"
  }
}
```

