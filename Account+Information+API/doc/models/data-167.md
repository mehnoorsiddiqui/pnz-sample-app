
# Data 167

## Structure

`Data167`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transaction` | [`Transaction14[]`](../../doc/models/transaction-14.md) | Required | - |

## Example (as JSON)

```json
{
  "Transaction": [
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
    },
    {
      "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        },
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "67af139b-1df8-57eb-8afb-892c7fab29eb",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
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
      "BookingDateTime": "2019-04-25T03:46:40.000Z",
      "ValueDateTime": "2019-04-22T01:29:39.000Z"
    },
    {
      "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
      "TransactionReference": {
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying",
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        },
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        }
      },
      "TransactionId": "b0d110f4-550e-5d35-8fba-b19e7f7bd596",
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
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "BookingDateTime": "2019-04-24T21:21:47.000Z",
      "ValueDateTime": "2019-04-14T07:48:30.000Z"
    },
    {
      "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
      "TransactionReference": {
        "DebtorReference": {
          "Reference": "debtorRef",
          "Code": "debtorCode",
          "Particulars": "debtorPart"
        },
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying",
        "CreditorReference": {
          "Reference": "creditorRef",
          "Code": "creditorCode",
          "Particulars": "creditorPart"
        }
      },
      "TransactionId": "bfd49a1f-d831-5565-bbfb-9c3d9ab0a332",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Booked",
      "BankTransactionCode": {
        "SubCode": "DomesticCreditTransfer",
        "Code": "ReceivedCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "CardInstrument": {
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Identification": "1234 1234 1234 1234",
        "Name": "A. Cardholder"
      },
      "BookingDateTime": "2019-04-23T08:23:23.000Z",
      "ValueDateTime": "2019-04-11T07:09:05.000Z"
    },
    {
      "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "eeaaecd6-6535-513a-aee2-6cdad41ac92c",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Booked",
      "BankTransactionCode": {
        "SubCode": "DomesticCreditTransfer",
        "Code": "ReceivedCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Issuer": "ExampleBank",
        "Code": "Transfer"
      },
      "CardInstrument": {
        "Name": "A. Cardholder",
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Identification": "1234 1234 1234 1234"
      },
      "BookingDateTime": "2019-04-15T09:10:48.000Z",
      "ValueDateTime": "2019-04-19T07:08:19.000Z"
    },
    {
      "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
      "TransactionReference": {
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying",
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        }
      },
      "TransactionId": "fd01331f-78f0-5706-8f88-e8639edc24c3",
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
      "CardInstrument": {
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Identification": "1234 1234 1234 1234",
        "Name": "A. Cardholder"
      },
      "BookingDateTime": "2019-04-04T15:34:44.000Z",
      "ValueDateTime": "2019-04-21T07:38:26.000Z"
    }
  ]
}
```

