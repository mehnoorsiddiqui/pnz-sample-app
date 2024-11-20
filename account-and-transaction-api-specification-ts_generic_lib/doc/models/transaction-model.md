
# Transaction Model

## Structure

`TransactionModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `transactionId` | `string \| undefined` | Optional | Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `transactionReference` | [`TransactionReference \| undefined`](../../doc/models/transaction-reference.md) | Optional | - |
| `statementReference` | `string[] \| undefined` | Optional | Unique reference for the statement. This reference may be optionally populated if available.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `amount` | [`Amount10`](../../doc/models/amount-10.md) | Required | - |
| `creditDebitIndicator` | [`CreditDebitIndicator1Enum`](../../doc/models/credit-debit-indicator-1-enum.md) | Required | Indicates whether the transaction is a credit or a debit entry. |
| `status` | [`Status1Enum`](../../doc/models/status-1-enum.md) | Required | Status of a transaction entry on the books of the account servicer. |
| `bookingDateTime` | `string` | Required | Date and time when a transaction entry is posted to an account on the account servicer's books. Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `valueDateTime` | `string \| undefined` | Optional | Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit entry.  Usage: If entry status is pending and value date is present, then the value date refers to an expected/requested value date. For entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the  number of availability days.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `addressLine` | `string \| undefined` | Optional | Information that locates and identifies a specific address, as defined by postal services, that is presented in free format text.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `bankTransactionCode` | [`BankTransactionCode2 \| undefined`](../../doc/models/bank-transaction-code-2.md) | Optional | - |
| `proprietaryBankTransactionCode` | [`ProprietaryBankTransactionCode2 \| undefined`](../../doc/models/proprietary-bank-transaction-code-2.md) | Optional | - |
| `currencyExchange` | [`CurrencyExchange2 \| undefined`](../../doc/models/currency-exchange-2.md) | Optional | - |
| `creditorAgent` | [`CreditorAgent3 \| undefined`](../../doc/models/creditor-agent-3.md) | Optional | - |
| `debtorAgent` | [`DebtorAgent2 \| undefined`](../../doc/models/debtor-agent-2.md) | Optional | - |
| `cardInstrument` | [`CardInstrument2 \| undefined`](../../doc/models/card-instrument-2.md) | Optional | - |
| `transactionInformation` | `string \| undefined` | Optional | Further details of the transaction. This is the transaction narrative, which is unstructured text.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500` |
| `balance` | [`Balance2 \| undefined`](../../doc/models/balance-2.md) | Optional | - |
| `merchantDetails` | [`MerchantDetails2 \| undefined`](../../doc/models/merchant-details-2.md) | Optional | - |
| `creditorAccount` | [`CreditorAccount5 \| undefined`](../../doc/models/creditor-account-5.md) | Optional | - |
| `debtorAccount` | [`DebtorAccount2 \| undefined`](../../doc/models/debtor-account-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "AccountId6",
  "TransactionId": "TransactionId8",
  "TransactionReference": {
    "CreditorName": "CreditorName2",
    "CreditorReference": {
      "Particulars": "Particulars4",
      "Code": "Code8",
      "Reference": "Reference0"
    },
    "DebtorName": "DebtorName4",
    "DebtorReference": {
      "Particulars": "Particulars8",
      "Code": "Code2",
      "Reference": "Reference4"
    }
  },
  "StatementReference": [
    "StatementReference2",
    "StatementReference3",
    "StatementReference4"
  ],
  "Amount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  },
  "CreditDebitIndicator": "Credit",
  "Status": "Booked",
  "BookingDateTime": "2016-03-13T12:52:32.123Z",
  "ValueDateTime": "2016-03-13T12:52:32.123Z",
  "AddressLine": "AddressLine0"
}
```

