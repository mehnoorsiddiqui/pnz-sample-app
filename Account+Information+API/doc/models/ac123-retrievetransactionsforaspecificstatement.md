
# AC123 Retrievetransactionsforaspecificstatement

## Structure

`AC123Retrievetransactionsforaspecificstatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data11`](../../doc/models/data-11.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Transaction": [
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
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-12-12T06:28:04.000Z",
        "Status": "Booked",
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
        "TransactionId": "1ff40623-2d63-5389-8d20-1282b6dc222e",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-12-11T16:04:38.000Z",
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
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-12-09T09:39:02.000Z",
        "Status": "Booked",
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
        "TransactionId": "b0599daf-7b0d-5402-b05b-69c2c8e83216",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-12-04T14:22:26.000Z",
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
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Debit",
        "BookingDateTime": "2018-12-08T20:04:05.000Z",
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
        "TransactionId": "a10260b5-e04a-5c1d-9738-bb3f6644cf46",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "CardInstrument": {
          "CardSchemeName": "VISA",
          "Name": "A. Cardholder",
          "AuthorisationType": "PIN",
          "Identification": "**** **** **** 1234"
        },
        "ValueDateTime": "2018-12-10T15:06:54.000Z",
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
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-12-05T23:58:59.000Z",
        "Status": "Booked",
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
        "TransactionId": "ff5a733c-1608-55e1-b83c-ca0fc162bc51",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "CardInstrument": {
          "CardSchemeName": "VISA",
          "Name": "A. Cardholder",
          "AuthorisationType": "PIN",
          "Identification": "**** **** **** 1234"
        },
        "ValueDateTime": "2018-12-23T04:16:23.000Z",
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
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/accounts/OBA-99-7046-5813780-00/statements/2b3ccbff-c249-5a42-8658-070f8f1618e7/transactions"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```

