
# AC9 Checkaccountaccessconsentstatus

## Structure

`AC9Checkaccountaccessconsentstatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data`](../../doc/models/data.md) | Required | - |
| `risk` | [`Risk`](../../doc/models/risk.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Consent": {
      "TransactionToDateTime": "2025-05-08T00:00:00.000Z",
      "ExpirationDateTime": "2022-06-28T06:57:22.167Z",
      "Permissions": [
        "ReadAccountsDetail",
        "ReadBalances",
        "ReadBeneficiariesDetail",
        "ReadDirectDebits",
        "ReadParty",
        "ReadPartyAuthUser",
        "ReadOffers",
        "ReadScheduledPaymentsDetail",
        "ReadStandingOrdersDetail",
        "ReadStatementsBasic",
        "ReadStatementsDetail",
        "ReadTransactionsDetail",
        "ReadTransactionsCredits",
        "ReadTransactionsDebits"
      ],
      "TransactionFromDateTime": "2012-05-03T00:00:00.000Z"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "2022-06-26T06:58:16.097Z",
    "CreationDateTime": "2022-06-26T06:57:22.859Z",
    "ConsentId": "aac_62b80352dd042200233f5fe9"
  },
  "Risk": {
    "EndUserAppName": "This is an app name that is long",
    "EndUserAppVersion": "App Version3.0",
    "PaymentContextCode": "EcommerceServices",
    "MerchantName": "This is a merchant name that is long",
    "MerchantNZBN": "This is an NZBN number",
    "MerchantCategoryCode": "5967",
    "MerchantCustomerIdentification": "This is a special customer identifier",
    "GeoLocation": {
      "Latitude": "45.516136",
      "Longitude": "-73.656830"
    },
    "DeliveryAddress": {
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
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/account-access-consents/aac_62b80352dd042200233f5fe9"
  },
  "Meta": {}
}
```

