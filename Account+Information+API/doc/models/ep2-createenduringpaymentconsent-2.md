
# EP2 Createenduringpaymentconsent 2

## Structure

`EP2Createenduringpaymentconsent2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data31`](../../doc/models/data-31.md) | Required | - |
| `risk` | [`Risk`](../../doc/models/risk.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Consent": {
      "TotalAmount": {
        "Amount": "50.00",
        "Currency": "NZD"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "99-1810-5604739-00",
        "SecondaryIdentification": "1f8e3ca8-7494-11ea-a1de-777f1f637",
        "Identification": "99-1810-5604739-00"
      },
      "MaximumAmount": {
        "Currency": "NZD",
        "Amount": "100.00"
      },
      "Frequency": {
        "Period": "Annual",
        "TotalCount": 2,
        "TotalAmount": {
          "Currency": "NZD",
          "Amount": "100.00"
        }
      },
      "CreditorAccount": [
        {
          "SchemeName": "BECSElectronicCredit",
          "Name": "Some name that is long and includes blanks",
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "99-3100-0023158-00"
        }
      ],
      "DebtorAccountRelease": true,
      "TotalCount": 1,
      "FromDateTime": "2017-04-05T10:43:07+00:00"
    },
    "CreationDateTime": "2020-06-28T02:11:12.000Z",
    "StatusUpdateDateTime": "2020-06-28T02:11:12.000Z",
    "ConsentId": "f5ee3971-188a-42da-972f-4ce1be5cd47d",
    "Status": "AwaitingAuthorisation"
  },
  "Risk": {
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
    },
    "MerchantCategoryCode": "5967",
    "EndUserAppName": "This is an app name that is long and includes blanks",
    "EndUserAppVersion": "App Version3.0",
    "PaymentContextCode": "EcommerceServices",
    "MerchantNZBN": "This is an NZBN number of some type"
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/enduring-payment-consents/f5ee3971-188a-42da-972f-4ce1be5cd47d"
  },
  "Meta": {}
}
```

