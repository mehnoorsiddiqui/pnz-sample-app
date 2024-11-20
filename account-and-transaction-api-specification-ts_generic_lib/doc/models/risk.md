
# Risk

The Risk section is sent by the initiating party to the API Provider. It is used to specify additional details for risk scoring.

## Structure

`Risk`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `geoLocation` | [`GeoLocation2 \| undefined`](../../doc/models/geo-location-2.md) | Optional | - |
| `paymentContextCode` | [`PaymentContextCodeEnum \| undefined`](../../doc/models/payment-context-code-enum.md) | Optional | Specifies the payment context |
| `merchantCategoryCode` | `string \| undefined` | Optional | Category code conforms to ISO 18245, related to the type of services or goods the merchant provides for the transaction<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4` |
| `merchantCustomerIdentification` | `string \| undefined` | Optional | The unique customer identifier of the Customer with the merchant.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `deliveryAddress` | [`DeliveryAddress2 \| undefined`](../../doc/models/delivery-address-2.md) | Optional | - |
| `endUserAppName` | `string \| undefined` | Optional | Name of the end user facing application<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `endUserAppVersion` | `string \| undefined` | Optional | Version of the end user facing application<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `14` |
| `merchantName` | `string \| undefined` | Optional | Name of the merchant<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `merchantNZBN` | `string \| undefined` | Optional | NZ business number for the merchant<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |

## Example (as JSON)

```json
{
  "GeoLocation": {
    "Latitude": "Latitude0",
    "Longitude": "Longitude8"
  },
  "PaymentContextCode": "Other",
  "MerchantCategoryCode": "MerchantCategoryCode8",
  "MerchantCustomerIdentification": "MerchantCustomerIdentification2",
  "DeliveryAddress": {
    "AddressType": "DeliveryTo",
    "AddressLine": [
      "AddressLine5",
      "AddressLine6",
      "AddressLine7"
    ],
    "StreetName": "StreetName4",
    "BuildingNumber": "BuildingNumber8",
    "PostCode": "PostCode8",
    "Country": "Country8"
  }
}
```

