
# Example A116 Retrieveaccountparty

## Structure

`ExampleA116Retrieveaccountparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data151`](../../doc/models/data-151.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Party": {
      "PartyId": "PartyId-999999-user01",
      "Name": "A. Middleware Customer User01",
      "EmailAddress": "info@middleware.co.nz",
      "Address": [
        {
          "CountrySubDivision": "Wellington",
          "AddressLine": "Residential",
          "Country": "NZ",
          "StreetName": "Queens Wharf",
          "AddressType": "Residential",
          "TownName": "Wellington",
          "PostCode": "6011",
          "BuildingNumber": "8"
        },
        {
          "PostCode": "6140",
          "AddressType": "POBox",
          "TownName": "Wellington",
          "AddressLine": "POBox 1293",
          "Country": "NZ"
        }
      ]
    }
  },
  "Meta": {},
  "Links": {
    "Self": "https://mwnz-prod.apigee.net/accounts/4986e820-b496-5215-b650-2e9fcd65f50b/party"
  }
}
```

