
# Party 8

## Structure

`Party8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partyId` | `string` | Required | - |
| `name` | `string` | Required | - |
| `emailAddress` | `string` | Required | - |
| `address` | [`Address8[]`](../../doc/models/address-8.md) | Required | - |

## Example (as JSON)

```json
{
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
```

