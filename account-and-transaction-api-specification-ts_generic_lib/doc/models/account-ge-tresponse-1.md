
# Account GE Tresponse 1

## Structure

`AccountGETresponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data42`](../../doc/models/data-42.md) | Required | - |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Account": {
      "AccountId": "AccountId8",
      "Currency": "Currency6",
      "AccountType": "Business",
      "AccountSubType": "PrePaidCard",
      "Description": "Description8",
      "Nickname": "Nickname0",
      "Account": {
        "SchemeName": "BECSElectronicCredit",
        "Identification": "Identification2",
        "Name": "Name8",
        "SecondaryIdentification": "SecondaryIdentification4"
      },
      "Servicer": {
        "SchemeName": "SchemeName4",
        "Identification": "Identification6"
      }
    }
  },
  "Links": {
    "Self": "Self2",
    "First": "First0",
    "Prev": "Prev6",
    "Next": "Next0",
    "Last": "Last4"
  },
  "Meta": {
    "TotalPages": 96,
    "FirstAvailableDateTime": "2016-03-13T12:52:32.123Z",
    "LastAvailableDateTime": "2016-03-13T12:52:32.123Z"
  }
}
```

