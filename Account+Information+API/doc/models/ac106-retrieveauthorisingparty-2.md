
# AC106 Retrieveauthorisingparty 2

## Structure

`AC106Retrieveauthorisingparty2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data79`](../../doc/models/data-79.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
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
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/party"
  }
}
```

