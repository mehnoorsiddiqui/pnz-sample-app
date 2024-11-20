
# EP2 Createenduringpaymentconsent Request 2

## Structure

`EP2CreateenduringpaymentconsentRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data30`](../../doc/models/data-30.md) | Required | - |
| `risk` | [`Risk`](../../doc/models/risk.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Consent": {
      "TotalCount": 1,
      "TotalAmount": {
        "Currency": "NZD",
        "Amount": "50.00"
      },
      "DebtorAccountRelease": true,
      "Frequency": {
        "TotalAmount": {
          "Currency": "NZD",
          "Amount": "100.00"
        },
        "Period": "Annual",
        "TotalCount": 2
      },
      "MaximumAmount": {
        "Currency": "NZD",
        "Amount": "100.00"
      },
      "CreditorAccount": [
        {
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-3100-0023158-00",
          "Name": "Some name that is long and includes blanks"
        }
      ],
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Identification": "99-1810-5604739-00",
        "Name": "99-1810-5604739-00",
        "SecondaryIdentification": "1f8e3ca8-7494-11ea-a1de-777f1f637"
      },
      "FromDateTime": "2017-04-05T10:43:07+00:00"
    }
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
  }
}
```

