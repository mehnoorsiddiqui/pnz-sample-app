
# P2 Createpayment

## Structure

`P2Createpayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data169`](../../doc/models/data-169.md) | Required | - |
| `risk` | [`Risk48`](../../doc/models/risk-48.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Initiation": {
      "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
      "InstructedAmount": {
        "Currency": "NZD",
        "Amount": "5.00"
      },
      "CreditorAgent": {
        "Identification": "IDXXXXXX",
        "SchemeName": "BICFI"
      },
      "EndToEndIdentification": "7f39b63a-e13e-48d7-ab52-f98028fa8cf3",
      "CreditorAccount": {
        "Identification": "99-3100-0023158-00",
        "SchemeName": "BECSElectronicCredit",
        "Name": "Some name that is long and includes blanks",
        "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd"
      },
      "RemittanceInformation": {
        "Reference": {
          "CreditorName": "CreditorName 123",
          "CreditorReference": {
            "Code": "credCode1",
            "Particulars": "credPart1",
            "Reference": "credRef1"
          }
        }
      }
    },
    "CreationDateTime": "2019-05-27T04:47:30.000Z",
    "PaymentId": "fd8a61d6-6317-4bad-b273-29ce09ee3207",
    "Status": "AcceptedTechnicalValidation"
  },
  "Risk": {
    "GeoLocation": {
      "Longitude": "-73.656830",
      "Latitude": "45.516136"
    },
    "MerchantCategoryCode": "5967",
    "EndUserAppVersion": "App Version3.0",
    "DeliveryAddress": {
      "PostCode": "12345",
      "BuildingNumber": "12345",
      "CountrySubDivision": [
        "Some Subdivision"
      ],
      "AddressLine": [
        "This is address line 1"
      ],
      "Country": "CA",
      "StreetName": "Main Street",
      "TownName": "Some Town"
    },
    "MerchantCustomerIdentification": "This is a special customer identifier that is long and includes blanks",
    "MerchantName": "This is a merchant name that is long and includes blanks",
    "EndUserAppName": "This is an app name that is long and includes blanks",
    "MerchantNZBN": "This is an NZBN number of some type",
    "PaymentContextCode": "EcommerceServices"
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v1.0/payments/fd8a61d6-6317-4bad-b273-29ce09ee3207"
  },
  "Meta": {}
}
```

