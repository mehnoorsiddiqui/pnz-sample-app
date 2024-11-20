
# EP10 Submitdomesticpayment

## Structure

`EP10Submitdomesticpayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data33`](../../doc/models/data-33.md) | Required | - |
| `risk` | [`Risk2`](../../doc/models/risk-2.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Initiation": {
      "EndToEndIdentification": "7f39b63a-e13e-48d7-ab52-f98028fa8cf3",
      "RemittanceInformation": {
        "Reference": {
          "CreditorReference": {
            "Reference": "credRef1",
            "Code": "credCode1",
            "Particulars": "credPart1"
          },
          "CreditorName": "CreditorName 123"
        }
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "IDXXXXXX"
      },
      "DebtorAccountRelease": true,
      "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
      "InstructedAmount": {
        "Currency": "NZD",
        "Amount": "25.00"
      },
      "DebtorAccount": {
        "Identification": "99-7046-5813780-00",
        "SchemeName": "BECSElectronicCredit",
        "Name": "CurrentAccount",
        "SecondaryIdentification": "ID2-99-7046-5813780-00"
      },
      "CreditorAccount": {
        "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
        "SchemeName": "BECSElectronicCredit",
        "Identification": "99-3100-0023158-00",
        "Name": "Some name that is long and includes blanks"
      }
    },
    "DomesticPaymentId": "62b8068d738f7a0023eb4313",
    "StatusUpdateDateTime": "2022-06-26T07:11:09.221Z",
    "CreationDateTime": "2022-06-26T07:11:09.210Z",
    "ConsentId": "epc_62b8067167bb850023437fdf",
    "Status": "AcceptedSettlementCompleted"
  },
  "Risk": {
    "EndUserAppName": "This is an app name that is long and includes blanks",
    "MerchantName": "This is a merchant name that is long and includes blanks",
    "MerchantNZBN": "This is an NZBN number of some type",
    "PaymentContextCode": "EcommerceServices",
    "GeoLocation": {
      "Longitude": "-73.656830",
      "Latitude": "45.516136"
    },
    "MerchantCategoryCode": "5967",
    "EndUserAppVersion": "App Version3.0",
    "DeliveryAddress": {
      "AddressType": "DeliveryTo",
      "TownName": "Some Town",
      "PostCode": "12345",
      "BuildingNumber": "12345",
      "CountrySubDivision": "Some Subdivision",
      "AddressLine": [
        "This is address line 1"
      ],
      "Country": "CA",
      "StreetName": "Main Street"
    },
    "MerchantCustomerIdentification": "This is a special customer identifier that is long and includes blanks"
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/domestic-payments/62b8068d738f7a0023eb4313"
  },
  "Meta": {}
}
```

