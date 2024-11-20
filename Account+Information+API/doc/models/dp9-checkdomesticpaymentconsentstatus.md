
# DP9 Checkdomesticpaymentconsentstatus

## Structure

`DP9Checkdomesticpaymentconsentstatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data25`](../../doc/models/data-25.md) | Required | - |
| `risk` | [`Risk2`](../../doc/models/risk-2.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Consent": {
      "InstructedAmount": {
        "Amount": "5.00",
        "Currency": "NZD"
      },
      "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
      "RemittanceInformation": {
        "Reference": {
          "CreditorReference": {
            "Reference": "credRef1",
            "Particulars": "credPart1",
            "Code": "credCode1"
          },
          "CreditorName": "CreditorName 123"
        }
      },
      "CreditorAccount": {
        "Identification": "99-3100-0023158-00",
        "SchemeName": "BECSElectronicCredit",
        "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
        "Name": "Some name that is long and includes blanks"
      },
      "DebtorAccountRelease": true,
      "EndToEndIdentification": "7f39b63a-e13e-48d7-ab52-f98028fa8cf3",
      "CreditorAgent": {
        "Identification": "IDXXXXXX",
        "SchemeName": "BICFI"
      }
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "2022-06-26T07:07:23.830Z",
    "CreationDateTime": "2022-06-26T07:07:06.594Z",
    "ConsentId": "dpc_62b8059adf442a002301c181"
  },
  "Risk": {
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
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/domestic-payment-consents/dpc_62b8059adf442a002301c181"
  },
  "Meta": {}
}
```

