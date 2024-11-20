
# Risk

## Structure

`Risk`

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
| `deliveryAddress` | [`DeliveryAddress`](../../doc/models/delivery-address.md) | Required | - |

## Example (as JSON)

```json
{
  "EndUserAppName": "This is an app name that is long",
  "EndUserAppVersion": "App Version3.0",
  "PaymentContextCode": "EcommerceServices",
  "MerchantName": "This is a merchant name that is long",
  "MerchantNZBN": "This is an NZBN number",
  "MerchantCategoryCode": "5967",
  "MerchantCustomerIdentification": "This is a special customer identifier",
  "GeoLocation": {
    "Latitude": "45.516136",
    "Longitude": "-73.656830"
  },
  "DeliveryAddress": {
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

