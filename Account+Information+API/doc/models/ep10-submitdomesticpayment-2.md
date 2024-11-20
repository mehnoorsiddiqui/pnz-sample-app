
# EP10 Submitdomesticpayment 2

## Structure

`EP10Submitdomesticpayment2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data33`](../../doc/models/data-33.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `risk` | [`Risk`](../../doc/models/risk.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Initiation": {
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "IDXXXXXX"
      },
      "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
      "DebtorAccountRelease": true,
      "EndToEndIdentification": "7f39b63a-e13e-48d7-ab52-f98028fa8cf3",
      "DebtorAccount": {
        "Identification": "99-1810-5604739-00",
        "SchemeName": "BECSElectronicCredit",
        "Name": "99-1810-5604739-00",
        "SecondaryIdentification": "1f8e3ca8-7494-11ea-a1de-777f1f637"
      },
      "InstructedAmount": {
        "Currency": "NZD",
        "Amount": "25.00"
      },
      "RemittanceInformation": {
        "Reference": {
          "CreditorReference": {
            "Code": "credCode1",
            "Particulars": "credPart1",
            "Reference": "credRef1"
          },
          "CreditorName": "CreditorName 123"
        }
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Some name that is long and includes blanks",
        "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
        "Identification": "99-3100-0023158-00"
      }
    },
    "CreationDateTime": "2020-06-28T02:26:48.000Z",
    "StatusUpdateDateTime": "2020-06-28T02:26:48.569Z",
    "ConsentId": "f5ee3971-188a-42da-972f-4ce1be5cd47d",
    "Status": "AcceptedSettlementInProcess",
    "DomesticPaymentId": "c9be4d9b-d22f-40f0-a272-2d308381c070"
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/domestic-payments/c9be4d9b-d22f-40f0-a272-2d308381c070"
  },
  "Meta": {},
  "Risk": {
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
    "EndUserAppName": "This is an app name that is long and includes blanks",
    "EndUserAppVersion": "App Version3.0",
    "PaymentContextCode": "EcommerceServices",
    "MerchantNZBN": "This is an NZBN number of some type"
  }
}
```

