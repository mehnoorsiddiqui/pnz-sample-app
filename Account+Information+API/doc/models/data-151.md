
# Data 151

## Structure

`Data151`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `party` | [`Party8`](../../doc/models/party-8.md) | Required | - |

## Example (as JSON)

```json
{
  "Party": {
    "PartyId": "PartyId-999999-user01",
    "Name": "A. Middleware Customer User01",
    "EmailAddress": "info@middleware.co.nz",
    "Address": [
      {
        "PostCode": "6011",
        "BuildingNumber": "8",
        "CountrySubDivision": "Wellington",
        "AddressLine": "Residential",
        "Country": "NZ",
        "StreetName": "Queens Wharf",
        "AddressType": "Residential",
        "TownName": "Wellington"
      },
      {
        "AddressType": "POBox",
        "TownName": "Wellington",
        "AddressLine": "POBox 1293",
        "Country": "NZ",
        "PostCode": "6140"
      }
    ]
  }
}
```

