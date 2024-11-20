
# Transaction 14

## Structure

`Transaction14`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `transactionReference` | [`TransactionReference`](../../doc/models/transaction-reference.md) | Required | - |
| `transactionId` | `string` | Required | - |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | - |
| `creditDebitIndicator` | `string` | Required | - |
| `status` | `string` | Required | - |
| `bankTransactionCode` | [`BankTransactionCode`](../../doc/models/bank-transaction-code.md) | Required | - |
| `proprietaryBankTransactionCode` | [`ProprietaryBankTransactionCode`](../../doc/models/proprietary-bank-transaction-code.md) | Required | - |
| `bookingDateTime` | `string` | Required | - |
| `valueDateTime` | `string` | Required | - |
| `cardInstrument` | [`CardInstrument \| undefined`](../../doc/models/card-instrument.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
  "TransactionReference": {
    "CreditorName": "Party being paid",
    "DebtorName": "Party paying",
    "CreditorReference": {
      "Code": "creditorCode",
      "Particulars": "creditorPart",
      "Reference": "creditorRef"
    },
    "DebtorReference": {
      "Particulars": "debtorPart",
      "Reference": "debtorRef",
      "Code": "debtorCode"
    }
  },
  "TransactionId": "a45a2511-8763-5e8d-9245-8e05054e411d",
  "Amount": {
    "Currency": "NZD",
    "Amount": "10.00"
  },
  "CreditDebitIndicator": "Credit",
  "Status": "Booked",
  "BankTransactionCode": {
    "Code": "ReceivedCreditTransfer",
    "SubCode": "DomesticCreditTransfer"
  },
  "ProprietaryBankTransactionCode": {
    "Issuer": "ExampleBank",
    "Code": "Transfer"
  },
  "BookingDateTime": "2019-04-28T11:47:04.000Z",
  "ValueDateTime": "2019-04-01T19:31:31.000Z"
}
```

