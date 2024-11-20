
# Delivery Address

## Structure

`DeliveryAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine` | `string[]` | Required | - |
| `streetName` | `string` | Required | - |
| `buildingNumber` | `string` | Required | - |
| `postCode` | `string` | Required | - |
| `townName` | `string` | Required | - |
| `countrySubDivision` | `string` | Required | - |
| `country` | `string` | Required | - |

## Example (as JSON)

```json
{
  "AddressLine": [
    "This is address line 1"
  ],
  "StreetName": "Main Street",
  "BuildingNumber": "12345",
  "PostCode": "12345",
  "TownName": "Some Town",
  "CountrySubDivision": "Some Subdivision",
  "Country": "CA"
}
```

