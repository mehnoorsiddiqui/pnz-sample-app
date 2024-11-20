
# Party 4

## Structure

`Party4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partyId` | `string` | Required | - |
| `name` | `string` | Required | - |
| `emailAddress` | `string` | Required | - |
| `address` | [`Address[]`](../../doc/models/address.md) | Required | - |

## Example (as JSON)

```json
{
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
```

