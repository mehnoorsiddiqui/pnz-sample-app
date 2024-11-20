
# A2 Createaccountrequest

## Structure

`A2Createaccountrequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data144`](../../doc/models/data-144.md) | Required | - |
| `risk` | [`Risk48`](../../doc/models/risk-48.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "TransactionToDateTime": "2025-05-08T00:00:00.000Z",
    "TransactionFromDateTime": "2012-05-03T00:00:00.000Z",
    "Permissions": [
      "ReadAccountsDetail",
      "ReadBalances",
      "ReadBeneficiariesDetail",
      "ReadDirectDebits",
      "ReadParty",
      "ReadPartyAuthUser",
      "ReadOffers",
      "ReadScheduledPaymentsDetail",
      "ReadPAN",
      "ReadStandingOrdersDetail",
      "ReadStatementsBasic",
      "ReadStatementsDetail",
      "ReadTransactionsDetail",
      "ReadTransactionsCredits",
      "ReadTransactionsDebits"
    ],
    "ExpirationDateTime": "2019-05-29T04:40:24.244Z",
    "CreationDateTime": "2019-05-27T04:40:25.000Z",
    "StatusUpdateDateTime": "2019-05-27T04:40:25.000Z",
    "AccountRequestId": "94d15b11-8e11-42dc-a62b-0c5350efd513",
    "Status": "AwaitingAuthorisation"
  },
  "Risk": {
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
      "CountrySubDivision": [
        "Some Subdivision"
      ],
      "AddressLine": [
        "This is address line 1"
      ],
      "Country": "CA",
      "StreetName": "Main Street"
    },
    "MerchantCustomerIdentification": "This is a special customer identifier",
    "MerchantName": "This is a merchant name that is long",
    "EndUserAppName": "This is an app name that is long",
    "MerchantNZBN": "This is an NZBN number",
    "PaymentContextCode": "EcommerceServices"
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v1.0/account-requests/94d15b11-8e11-42dc-a62b-0c5350efd513"
  },
  "Meta": {}
}
```

