
# DP9 Checkdomesticpaymentconsentstatus 2

## Structure

`DP9Checkdomesticpaymentconsentstatus2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data25`](../../doc/models/data-25.md) | Required | - |
| `risk` | [`Risk`](../../doc/models/risk.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Consent": {
      "InstructedAmount": {
        "Currency": "NZD",
        "Amount": "5.00"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Some name that is long and includes blanks",
        "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
        "Identification": "99-3100-0023158-00"
      },
      "RemittanceInformation": {
        "Reference": {
          "CreditorReference": {
            "Particulars": "credPart1",
            "Reference": "credRef1",
            "Code": "credCode1"
          },
          "CreditorName": "CreditorName 123"
        }
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "IDXXXXXX"
      },
      "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
      "DebtorAccountRelease": true,
      "EndToEndIdentification": "7f39b63a-e13e-48d7-ab52-f98028fa8cf3"
    },
    "CreationDateTime": "2020-06-28T00:13:09.000Z",
    "StatusUpdateDateTime": "2020-06-28T00:13:09.000Z",
    "ConsentId": "85fda2c2-4927-411c-bf91-b257fe4bf997",
    "Status": "Authorised"
  },
  "Risk": {
    "EndUserAppVersion": "App Version3.0",
    "PaymentContextCode": "EcommerceServices",
    "MerchantNZBN": "This is an NZBN number of some type",
    "MerchantCustomerIdentification": "This is a special customer identifier that is long and includes blanks",
    "GeoLocation": {
      "Latitude": "45.516136",
      "Longitude": "-73.656830"
    },
    "MerchantName": "This is a merchant name that is long and includes blanks",
    "DeliveryAddress": {
      "PostCode": "12345",
      "Country": "CA",
      "CountrySubDivision": "Some Subdivision",
      "StreetName": "Main Street",
      "AddressLine": [
        "This is address line 1"
      ],
      "BuildingNumber": "12345",
      "TownName": "Some Town"
    },
    "MerchantCategoryCode": "5967",
    "EndUserAppName": "This is an app name that is long and includes blanks"
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/domestic-payment-consents/85fda2c2-4927-411c-bf91-b257fe4bf997"
  },
  "Meta": {}
}
```

