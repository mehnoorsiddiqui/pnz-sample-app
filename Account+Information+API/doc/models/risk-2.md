
# Risk 2

## Structure

`Risk2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `endUserAppName` | `string` | Required | - |
| `endUserAppVersion` | `string` | Required | - |
| `paymentContextCode` | `string` | Required | - |
| `merchantName` | `string` | Required | - |
| `merchantNZBN` | `string` | Required | - |
| `merchantCategoryCode` | `string` | Required | - |
| `merchantCustomerIdentification` | `string` | Required | - |
| `geoLocation` | [`GeoLocation`](../../doc/models/geo-location.md) | Required | - |
| `deliveryAddress` | [`DeliveryAddress2`](../../doc/models/delivery-address-2.md) | Required | - |

## Example (as JSON)

```json
{
  "EndUserAppName": "This is an app name that is long and includes blanks",
  "EndUserAppVersion": "App Version3.0",
  "PaymentContextCode": "EcommerceServices",
  "MerchantName": "This is a merchant name that is long and includes blanks",
  "MerchantNZBN": "This is an NZBN number of some type",
  "MerchantCategoryCode": "5967",
  "MerchantCustomerIdentification": "This is a special customer identifier that is long and includes blanks",
  "GeoLocation": {
    "Latitude": "45.516136",
    "Longitude": "-73.656830"
  },
  "DeliveryAddress": {
    "AddressType": "DeliveryTo",
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
}
```

