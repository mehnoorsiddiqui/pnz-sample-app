
# Data 144

## Structure

`Data144`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionToDateTime` | `string` | Required | - |
| `transactionFromDateTime` | `string` | Required | - |
| `permissions` | `string[]` | Required | - |
| `expirationDateTime` | `string` | Required | - |
| `creationDateTime` | `string` | Required | - |
| `statusUpdateDateTime` | `string` | Required | - |
| `accountRequestId` | `string` | Required | - |
| `status` | `string` | Required | - |

## Example (as JSON)

```json
{
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
}
```

