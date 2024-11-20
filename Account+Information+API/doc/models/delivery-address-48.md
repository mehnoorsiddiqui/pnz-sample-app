
# Delivery Address 48

## Structure

`DeliveryAddress48`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `townName` | `string` | Required | - |
| `postCode` | `string` | Required | - |
| `buildingNumber` | `string` | Required | - |
| `countrySubDivision` | `string[]` | Required | - |
| `addressLine` | `string[]` | Required | - |
| `country` | `string` | Required | - |
| `streetName` | `string` | Required | - |

## Example (as JSON)

```json
{
  "TownName": "Some Town",
  "PostCode": "12345",
  "BuildingNumber": "12345",
  "CountrySubDivision": [
    "Some Subdivision"
  ],
  "AddressLine": [
    "This is address line 1"
  ],
  "Country": "CA",
  "StreetName": "Main Street"
}
```

