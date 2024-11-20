
# Transaction 12

## Structure

`Transaction12`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `transactionReference` | [`TransactionReference12`](../../doc/models/transaction-reference-12.md) | Required | - |
| `transactionId` | `string` | Required | - |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | - |
| `creditDebitIndicator` | `string` | Required | - |
| `status` | `string` | Required | - |
| `transactionInformation` | `string` | Required | - |
| `merchantDetails` | [`MerchantDetails`](../../doc/models/merchant-details.md) | Required | - |
| `creditorAccount` | [`CreditorAccount`](../../doc/models/creditor-account.md) | Required | - |
| `debtorAccount` | [`DebtorAccount`](../../doc/models/debtor-account.md) | Required | - |
| `balance` | [`Balance1`](../../doc/models/balance-1.md) | Required | - |
| `bookingDateTime` | `string` | Required | - |

## Example (as JSON)

```json
{
  "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
  "TransactionReference": {
    "CreditorReference": {
      "Code": "credCode",
      "Particulars": "credPart",
      "Reference": "credRef"
    },
    "CreditorName": "CreditorName"
  },
  "TransactionId": "a1ca5967-b2ae-5521-9931-a78c3e9d9d17",
  "Amount": {
    "Currency": "NZD",
    "Amount": "1.00"
  },
  "CreditDebitIndicator": "Debit",
  "Status": "Booked",
  "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
  "MerchantDetails": {
    "MerchantCategoryCode": "5967",
    "MerchantName": "This is a merchant name that is long"
  },
  "CreditorAccount": {
    "Identification": "00-0000-0000000-00",
    "SchemeName": "BECSElectronicCredit",
    "Name": "Streamline",
    "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd"
  },
  "DebtorAccount": {
    "Name": "CurrentAccount",
    "Identification": "99-5414-9158057758-00",
    "SchemeName": "BECSElectronicCredit"
  },
  "Balance": {
    "CreditDebitIndicator": "Debit",
    "Type": "ClosingBooked",
    "Amount": {
      "Currency": "NZD",
      "Amount": "458703.00"
    }
  },
  "BookingDateTime": "2019-04-30T15:44:09.000Z"
}
```

