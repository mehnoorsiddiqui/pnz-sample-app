
# Data

## Structure

`Data`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consent` | [`Consent`](../../doc/models/consent.md) | Required | - |
| `status` | `string` | Required | - |
| `statusUpdateDateTime` | `string` | Required | - |
| `creationDateTime` | `string` | Required | - |
| `consentId` | `string` | Required | - |

## Example (as JSON)

```json
{
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
  "Status": "AwaitingAuthorisation",
  "StatusUpdateDateTime": "2022-06-26T06:57:22.859Z",
  "CreationDateTime": "2022-06-26T06:57:22.859Z",
  "ConsentId": "aac_62b80352dd042200233f5fe9"
}
```

