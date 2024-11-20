
# AC116 Retrieveaccountparty

## Structure

`AC116Retrieveaccountparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data7`](../../doc/models/data-7.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Party": {
      "PartyId": "4c7bddca-b7e7-509b-9ac3-5d4ae233cbf0",
      "PartyNumber": "430535",
      "PartyType": "Sole",
      "Name": "A. Middleware Customer user01",
      "EmailAddress": "user01@middleware.co.nz",
      "Phone": "+6-446759547",
      "Mobile": "+6-446759547",
      "Address": [
        {
          "Country": "NZ",
          "AddressLine": [
            "Residential"
          ],
          "AddressType": "Residential",
          "StreetName": "Queens Wharf",
          "BuildingNumber": "8",
          "PostCode": "6011",
          "TownName": "Wellington",
          "CountrySubDivision": "Wellington"
        },
        {
          "Country": "NZ",
          "AddressLine": [
            "POBox 1293"
          ],
          "AddressType": "POBox",
          "PostCode": "6140",
          "TownName": "Wellington"
        }
      ]
    }
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/accounts/OBA-99-7046-5813780-00/party"
  }
}
```

