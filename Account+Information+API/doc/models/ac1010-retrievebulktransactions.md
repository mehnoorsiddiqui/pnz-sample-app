
# AC1010 Retrievebulktransactions

## Structure

`AC1010Retrievebulktransactions`

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
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-11-20T10:36:48.000Z",
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
        "TransactionId": "8fd8bd0c-12a4-5368-b8f5-f428f5f89106",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-11-18T22:28:56.000Z",
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
        "BookingDateTime": "2018-11-18T05:21:56.000Z",
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
        "TransactionId": "27825aca-e2e5-569f-8681-c4f17ee011eb",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-11-25T04:40:11.000Z",
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
        "BookingDateTime": "2018-11-14T23:29:58.000Z",
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
        "TransactionId": "b9c8bcf2-92c7-5f54-9e89-a6629876f31c",
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
        "ValueDateTime": "2018-11-23T14:44:10.000Z",
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
        "BookingDateTime": "2018-11-10T13:56:29.000Z",
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
        "TransactionId": "0faa4e83-1e07-5183-a05d-6e4fea6df252",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-11-22T01:09:18.000Z",
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
        "BookingDateTime": "2018-11-10T04:05:00.000Z",
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
        "TransactionId": "d0865c7b-7157-5fef-b8cc-923986710a47",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-11-24T19:10:27.000Z",
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
        "BookingDateTime": "2018-10-20T19:22:00.000Z",
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
        "TransactionId": "c586b85a-7253-536c-b3f0-a93e1a33e47d",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-10-19T04:59:36.000Z",
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
        "BookingDateTime": "2018-10-18T18:01:43.000Z",
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
        "TransactionId": "b073d119-f1f2-5b28-93e0-ee17a184454b",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-10-22T04:06:58.000Z",
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
        "BookingDateTime": "2018-10-09T21:55:20.000Z",
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
        "TransactionId": "e1dfdc28-6b99-5e26-b415-7a5d55e1e4db",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-10-04T11:28:21.000Z",
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
        "BookingDateTime": "2018-10-09T12:50:16.000Z",
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
        "TransactionId": "0daf993d-dc91-5c87-af4f-8ef64c08dd6c",
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
        "ValueDateTime": "2018-10-19T14:54:28.000Z",
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
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/transactions"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```

