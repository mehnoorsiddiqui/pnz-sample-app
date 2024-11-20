
# Transaction 6

## Structure

`Transaction6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `transactionReference` | [`TransactionReference6`](../../doc/models/transaction-reference-6.md) | Required | - |
| `transactionId` | `string` | Required | - |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | - |
| `creditDebitIndicator` | `string` | Required | - |
| `status` | `string` | Required | - |
| `transactionInformation` | `string` | Required | - |
| `bankTransactionCode` | [`BankTransactionCode`](../../doc/models/bank-transaction-code.md) | Required | - |
| `proprietaryBankTransactionCode` | [`ProprietaryBankTransactionCode`](../../doc/models/proprietary-bank-transaction-code.md) | Required | - |
| `merchantDetails` | [`MerchantDetails`](../../doc/models/merchant-details.md) | Required | - |
| `creditorAccount` | [`CreditorAccount41`](../../doc/models/creditor-account-41.md) | Required | - |
| `debtorAccount` | [`DebtorAccount`](../../doc/models/debtor-account.md) | Required | - |
| `balance` | [`Balance1`](../../doc/models/balance-1.md) | Required | - |
| `statementReference` | `string[]` | Required | - |
| `bookingDateTime` | `string` | Required | - |
| `valueDateTime` | `string \| undefined` | Optional | - |
| `cardInstrument` | [`CardInstrument \| undefined`](../../doc/models/card-instrument.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
  "TransactionReference": {
    "CreditorName": "CreditorName 123",
    "CreditorReference": {
      "Code": "credCode1",
      "Particulars": "credPart1",
      "Reference": "credRef1"
    }
  },
  "TransactionId": "af3ec011-9be1-4a75-af8f-3bb1c6da7165",
  "Amount": {
    "Currency": "NZD",
    "Amount": "5.00"
  },
  "CreditDebitIndicator": "Debit",
  "Status": "Booked",
  "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
  "BankTransactionCode": {
    "Code": "ReceivedCreditTransfer",
    "SubCode": "DomesticCreditTransfer"
  },
  "ProprietaryBankTransactionCode": {
    "Issuer": "ExampleBank",
    "Code": "Transfer"
  },
  "MerchantDetails": {
    "MerchantCategoryCode": "5967",
    "MerchantName": "This is a merchant name that is long and includes blanks"
  },
  "CreditorAccount": {
    "Identification": "99-3100-0023158-00",
    "SchemeName": "BECSElectronicCredit",
    "Name": "Some name that is long and includes blanks",
    "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd"
  },
  "DebtorAccount": {
    "SchemeName": "BECSElectronicCredit",
    "Name": "CurrentAccount",
    "Identification": "99-1810-5604739-00"
  },
  "Balance": {
    "Type": "ClosingBooked",
    "Amount": {
      "Amount": "19375.00",
      "Currency": "NZD"
    },
    "CreditDebitIndicator": "Credit"
  },
  "StatementReference": [],
  "BookingDateTime": "2020-06-27T23:39:52.766Z"
}
```

