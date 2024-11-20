
# Data 79

## Structure

`Data79`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `party` | [`Party4`](../../doc/models/party-4.md) | Required | - |

## Example (as JSON)

```json
{
  "Party": {
    "PartyId": "PartyId-9999999-user01",
    "Name": "A. Middleware Customer User01",
    "EmailAddress": "info@middleware.co.nz",
    "Address": [
      {
        "TownName": "Wellington",
        "PostCode": "6011",
        "Country": "NZ",
        "CountrySubDivision": "Wellington",
        "StreetName": "Queens Wharf",
        "AddressLine": [
          "Residential Test Address 1"
        ],
        "BuildingNumber": "8",
        "AddressType": "Residential"
      },
      {
        "TownName": "Wellington",
        "PostCode": "6140",
        "Country": "NZ",
        "AddressType": "POBox",
        "AddressLine": [
          "POBox 1293"
        ]
      }
    ]
  }
}
```

