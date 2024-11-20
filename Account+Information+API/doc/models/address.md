
# Address

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | `string` | Required | - |
| `addressLine` | `string[]` | Required | - |
| `addressType` | `string` | Required | - |
| `streetName` | `string \| undefined` | Optional | - |
| `buildingNumber` | `string \| undefined` | Optional | - |
| `postCode` | `string` | Required | - |
| `townName` | `string` | Required | - |
| `countrySubDivision` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
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
}
```

