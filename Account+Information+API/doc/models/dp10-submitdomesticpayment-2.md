
# DP10 Submitdomesticpayment 2

## Structure

`DP10Submitdomesticpayment2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data27`](../../doc/models/data-27.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `risk` | [`Risk`](../../doc/models/risk.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Initiation": {
      "CreditorAgent": {
        "Identification": "IDXXXXXX",
        "SchemeName": "BICFI"
      },
      "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
      "DebtorAccountRelease": true,
      "EndToEndIdentification": "7f39b63a-e13e-48d7-ab52-f98028fa8cf3",
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
          "CreditorName": "CreditorName 123",
          "CreditorReference": {
            "Code": "credCode1",
            "Particulars": "credPart1",
            "Reference": "credRef1"
          }
        }
      }
    },
    "CreationDateTime": "2020-06-28T02:05:00.000Z",
    "StatusUpdateDateTime": "2020-06-28T02:05:00.898Z",
    "ConsentId": "633b0926-b660-4dcd-a8d9-5dc71cea280c",
    "Status": "AcceptedSettlementInProcess",
    "DomesticPaymentId": "1e5adb40-e2b8-4f23-9180-a7154046e900"
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/domestic-payments/1e5adb40-e2b8-4f23-9180-a7154046e900"
  },
  "Meta": {},
  "Risk": {
    "MerchantCategoryCode": "5967",
    "EndUserAppName": "This is an app name that is long and includes blanks",
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
      "TownName": "Some Town",
      "PostCode": "12345",
      "Country": "CA",
      "CountrySubDivision": "Some Subdivision",
      "StreetName": "Main Street",
      "AddressLine": [
        "This is address line 1"
      ],
      "BuildingNumber": "12345"
    }
  }
}
```

