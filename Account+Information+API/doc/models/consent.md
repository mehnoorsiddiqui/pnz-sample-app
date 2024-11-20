
# Consent

## Structure

`Consent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionToDateTime` | `string` | Required | - |
| `expirationDateTime` | `string` | Required | - |
| `permissions` | `string[]` | Required | - |
| `transactionFromDateTime` | `string` | Required | - |

## Example (as JSON)

```json
{
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
}
```

