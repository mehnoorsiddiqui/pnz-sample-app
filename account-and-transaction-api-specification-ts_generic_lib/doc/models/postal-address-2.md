
# Postal Address 2

## Structure

`PostalAddress2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressType` | [`AddressType1Enum \| undefined`](../../doc/models/address-type-1-enum.md) | Optional | Identifies the nature of the postal address. |
| `addressLine` | `string[] \| undefined` | Optional | Information that locates and identifies a specific address, as defined by postal services, that is presented in free format text.<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `5`, *Minimum Length*: `1`, *Maximum Length*: `70` |
| `streetName` | `string \| undefined` | Optional | Name of a street or thoroughfare.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `buildingNumber` | `string \| undefined` | Optional | Number that identifies the position of a building on a street.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `postCode` | `string \| undefined` | Optional | Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `townName` | `string \| undefined` | Optional | Name of a built-up area, with defined boundaries, and a local government.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `countrySubDivision` | `string \| undefined` | Optional | Identifies a subdivision of a country such as state, region, county.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `country` | `string` | Required | Nation with its own government.<br>**Constraints**: *Pattern*: `^[A-Z]{2,2}$` |

## Example (as JSON)

```json
{
  "AddressType": "Residential",
  "AddressLine": [
    "AddressLine3"
  ],
  "StreetName": "StreetName2",
  "BuildingNumber": "BuildingNumber6",
  "PostCode": "PostCode6",
  "Country": "Country6"
}
```

