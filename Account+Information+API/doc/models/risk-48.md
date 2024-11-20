
# Risk 48

## Structure

`Risk48`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `geoLocation` | [`GeoLocation`](../../doc/models/geo-location.md) | Required | - |
| `merchantCategoryCode` | `string` | Required | - |
| `endUserAppVersion` | `string` | Required | - |
| `deliveryAddress` | [`DeliveryAddress48`](../../doc/models/delivery-address-48.md) | Required | - |
| `merchantCustomerIdentification` | `string` | Required | - |
| `merchantName` | `string` | Required | - |
| `endUserAppName` | `string` | Required | - |
| `merchantNZBN` | `string` | Required | - |
| `paymentContextCode` | `string` | Required | - |

## Example (as JSON)

```json
{
  "GeoLocation": {
    "Longitude": "-73.656830",
    "Latitude": "45.516136"
  },
  "MerchantCategoryCode": "5967",
  "EndUserAppVersion": "App Version3.0",
  "DeliveryAddress": {
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
  },
  "MerchantCustomerIdentification": "This is a special customer identifier",
  "MerchantName": "This is a merchant name that is long",
  "EndUserAppName": "This is an app name that is long",
  "MerchantNZBN": "This is an NZBN number",
  "PaymentContextCode": "EcommerceServices"
}
```

