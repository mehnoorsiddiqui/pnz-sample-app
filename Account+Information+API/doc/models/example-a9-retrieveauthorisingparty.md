
# Example A9 Retrieveauthorisingparty

## Structure

`ExampleA9Retrieveauthorisingparty`

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
  },
  "Meta": {},
  "Links": {
    "Self": "https://mwnz-prod.apigee.net/party"
  }
}
```

