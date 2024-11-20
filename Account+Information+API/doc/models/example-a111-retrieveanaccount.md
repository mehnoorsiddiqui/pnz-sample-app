
# Example A111 Retrieveanaccount

## Structure

`ExampleA111Retrieveanaccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data84`](../../doc/models/data-84.md) | Required | - |
| `links` | [`Links148`](../../doc/models/links-148.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Account": {
      "AccountId": "70ecd72b-75f3-508f-978e-b1cdce600271",
      "Currency": "NZD",
      "Nickname": "Cheque Account",
      "Account": {
        "SchemeName": "BECSElectronicCredit",
        "Identification": "99-5414-0999999-96",
        "Name": "CurrentAccount"
      },
      "Servicer": {
        "SchemeName": "BICFI",
        "Identification": "MWNZBNK1"
      }
    }
  },
  "Links": {
    "Self": "https://mwnz-prod.apigee.net/accounts/70ecd72b-75f3-508f-978e-b1cdce600271",
    "Payment": "https://mwnz-prod.apigee.net/payments"
  },
  "Meta": {}
}
```

