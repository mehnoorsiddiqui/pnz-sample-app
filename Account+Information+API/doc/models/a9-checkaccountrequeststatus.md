
# A9 Checkaccountrequeststatus

## Structure

`A9Checkaccountrequeststatus`

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
    "ExpirationDateTime": "2020-06-30T02:50:23.284Z",
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
    "TransactionToDateTime": "2025-05-08T00:00:00.000Z",
    "CreationDateTime": "2020-06-28T02:50:23.000Z",
    "StatusUpdateDateTime": "2020-06-28T02:50:23.000Z",
    "AccountRequestId": "d861f2c5-3412-4cd2-8ca7-5189f05249df",
    "Status": "Authorised"
  },
  "Risk": {
    "PaymentContextCode": "EcommerceServices",
    "MerchantNZBN": "This is an NZBN number",
    "MerchantCustomerIdentification": "This is a special customer identifier",
    "GeoLocation": {
      "Latitude": "45.516136",
      "Longitude": "-73.656830"
    },
    "MerchantName": "This is a merchant name that is long",
    "DeliveryAddress": {
      "TownName": "Some Town",
      "PostCode": "12345",
      "Country": "CA",
      "CountrySubDivision": [
        "Some Subdivision"
      ],
      "StreetName": "Main Street",
      "AddressLine": [
        "This is address line 1"
      ],
      "BuildingNumber": "12345"
    },
    "MerchantCategoryCode": "5967",
    "EndUserAppName": "This is an app name that is long",
    "EndUserAppVersion": "App Version3.0"
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v1.0/account-requests/d861f2c5-3412-4cd2-8ca7-5189f05249df"
  },
  "Meta": {}
}
```

