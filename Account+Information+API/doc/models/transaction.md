
# Transaction

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | - |
| `creditDebitIndicator` | `string` | Required | - |
| `bookingDateTime` | `string` | Required | - |
| `status` | `string` | Required | - |
| `statementReference` | `string[]` | Required | - |
| `transactionReference` | [`TransactionReference`](../../doc/models/transaction-reference.md) | Required | - |
| `transactionId` | `string` | Required | - |
| `bankTransactionCode` | [`BankTransactionCode`](../../doc/models/bank-transaction-code.md) | Required | - |
| `proprietaryBankTransactionCode` | [`ProprietaryBankTransactionCode`](../../doc/models/proprietary-bank-transaction-code.md) | Required | - |
| `valueDateTime` | `string` | Required | - |
| `transactionInformation` | `string` | Required | - |
| `balance` | [`Balance1`](../../doc/models/balance-1.md) | Required | - |
| `merchantDetails` | [`MerchantDetails`](../../doc/models/merchant-details.md) | Required | - |
| `creditorAgent` | [`CreditorAgent1`](../../doc/models/creditor-agent-1.md) | Required | - |
| `creditorAccount` | [`CreditorAccount1`](../../doc/models/creditor-account-1.md) | Required | - |
| `debtorAgent` | [`DebtorAgent`](../../doc/models/debtor-agent.md) | Required | - |
| `debtorAccount` | [`DebtorAccount`](../../doc/models/debtor-account.md) | Required | - |
| `cardInstrument` | [`CardInstrument \| undefined`](../../doc/models/card-instrument.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "OBA-99-7046-5813780-00",
  "Amount": {
    "Amount": "10.00",
    "Currency": "NZD"
  },
  "CreditDebitIndicator": "Debit",
  "BookingDateTime": "2018-12-16T08:34:03.000Z",
  "Status": "Pending",
  "StatementReference": [],
  "TransactionReference": {
    "CreditorName": "Party being paid",
    "DebtorName": "Party paying",
    "CreditorReference": {
      "Particulars": "creditorPart",
      "Code": "creditorCode",
      "Reference": "creditorRef"
    },
    "DebtorReference": {
      "Particulars": "debtorPart",
      "Code": "debtorCode",
      "Reference": "debtorRef"
    }
  },
  "TransactionId": "55494c43-9aef-52c5-8c3a-cd0ff73a5a17",
  "BankTransactionCode": {
    "Code": "ReceivedCreditTransfer",
    "SubCode": "DomesticCreditTransfer"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "Transfer",
    "Issuer": "ExampleBank"
  },
  "ValueDateTime": "2018-12-21T03:40:31.000Z",
  "TransactionInformation": "Further details about the transaction",
  "Balance": {
    "Amount": {
      "Amount": "230.00",
      "Currency": "NZD"
    },
    "CreditDebitIndicator": "Credit",
    "Type": "InterimBooked"
  },
  "MerchantDetails": {
    "MerchantName": "This is a merchant name that is long",
    "MerchantCategoryCode": "5967"
  },
  "CreditorAgent": {
    "SchemeName": "BICFI",
    "Identification": "ABCXYZ3A"
  },
  "CreditorAccount": {
    "SchemeName": "BECSElectronicCredit",
    "Identification": "99-1234-1234567-99",
    "Name": "A. Creditor"
  },
  "DebtorAgent": {
    "SchemeName": "BICFI",
    "Identification": "ABCXYZ3A"
  },
  "DebtorAccount": {
    "SchemeName": "BECSElectronicCredit",
    "Identification": "99-1234-1234567-99",
    "Name": "A. Debtor"
  }
}
```

