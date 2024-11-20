
# Postal Address

## Structure

`PostalAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | `string` | Required | - |
| `addressLine` | `string[]` | Required | - |
| `addressType` | `string` | Required | - |
| `streetName` | `string` | Required | - |
| `buildingNumber` | `string` | Required | - |
| `postCode` | `string` | Required | - |
| `townName` | `string` | Required | - |
| `countrySubDivision` | `string` | Required | - |

## Example (as JSON)

```json
{
  "Country": "NZ",
  "AddressLine": [
    "AddressLine1"
  ],
  "AddressType": "Business",
  "StreetName": "StreetName",
  "BuildingNumber": "BuildingNumber",
  "PostCode": "PostCode",
  "TownName": "TownName",
  "CountrySubDivision": "CountrySubDivision"
}
```

