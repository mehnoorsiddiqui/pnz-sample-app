
# Data 83

## Structure

`Data83`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transaction` | [`Transaction6[]`](../../doc/models/transaction-6.md) | Required | - |

## Example (as JSON)

```json
{
  "Transaction": [
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
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "CreditorReference": {
          "Code": "credCode1",
          "Particulars": "credPart1",
          "Reference": "credRef1"
        },
        "CreditorName": "CreditorName 123"
      },
      "TransactionId": "07db2a7b-ac35-49ee-80e6-2c253325f4df",
      "Amount": {
        "Amount": "25.00",
        "Currency": "NZD"
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
        "MerchantName": "This is a merchant name that is long and includes blanks",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Some name that is long and includes blanks",
        "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
        "Identification": "99-3100-0023158-00"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "CurrentAccount",
        "Identification": "99-1810-5604739-00"
      },
      "Balance": {
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "19380.00"
        }
      },
      "StatementReference": [],
      "BookingDateTime": "2020-06-27T23:36:59.216Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "CreditorReference": {
          "Code": "credCode1",
          "Particulars": "credPart1",
          "Reference": "credRef1"
        },
        "CreditorName": "CreditorName 123"
      },
      "TransactionId": "0be96b39-ef31-4971-b545-d82d03f14965",
      "Amount": {
        "Amount": "5.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Booked",
      "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantCategoryCode": "5967",
        "MerchantName": "This is a merchant name that is long and includes blanks"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Some name that is long and includes blanks",
        "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
        "Identification": "99-3100-0023158-00"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "CurrentAccount",
        "Identification": "99-1810-5604739-00"
      },
      "Balance": {
        "Type": "ClosingBooked",
        "Amount": {
          "Amount": "19405.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2020-06-27T23:36:44.329Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        }
      },
      "TransactionId": "d9ec501f-575a-5161-bd03-5fe99549f564",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
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
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-12-24T16:55:14.000Z",
      "ValueDateTime": "2018-12-31T00:07:32.000Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "33fe3bfe-aa10-5316-8883-30fad6670022",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor"
      },
      "DebtorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-12-08T19:31:57.000Z",
      "ValueDateTime": "2018-12-24T17:22:16.000Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        },
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying"
      },
      "TransactionId": "ee7a9eee-bf1a-510d-b809-b7fdb6d5c0bb",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Amount": "230.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "CardInstrument": {
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Name": "A. Cardholder",
        "Identification": "1234 1234 1234 1234"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-12-01T12:46:39.000Z",
      "ValueDateTime": "2018-12-21T16:19:23.000Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        }
      },
      "TransactionId": "6ef1e5ae-dddc-571b-ac28-ce2459bab7aa",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Amount": "230.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-11-24T00:59:38.000Z",
      "ValueDateTime": "2018-11-25T21:13:27.000Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        }
      },
      "TransactionId": "d6535e78-3139-5094-a8a0-b3d2aec8bf85",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Booked",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Issuer": "ExampleBank",
        "Code": "Transfer"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "CardInstrument": {
        "Identification": "1234 1234 1234 1234",
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Name": "A. Cardholder"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-11-17T12:08:42.000Z",
      "ValueDateTime": "2018-11-12T01:51:59.000Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying"
      },
      "TransactionId": "4be0fd64-5a2f-508e-a778-77e80f6686cc",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Booked",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "SubCode": "DomesticCreditTransfer",
        "Code": "ReceivedCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Issuer": "ExampleBank",
        "Code": "Transfer"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor"
      },
      "DebtorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-11-15T06:35:38.000Z",
      "ValueDateTime": "2018-11-08T03:17:36.000Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        }
      },
      "TransactionId": "5dea407e-e6d5-5d77-81f9-a5612c6c8871",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Booked",
      "TransactionInformation": "Further details about the transaction",
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
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "CardInstrument": {
        "Identification": "1234 1234 1234 1234",
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Name": "A. Cardholder"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-10-23T07:33:59.000Z",
      "ValueDateTime": "2018-10-08T04:52:11.000Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        },
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying"
      },
      "TransactionId": "e02edd26-c5bc-57de-8094-30e13cdbf126",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Booked",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "SubCode": "DomesticCreditTransfer",
        "Code": "ReceivedCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Issuer": "ExampleBank",
        "Code": "Transfer"
      },
      "MerchantDetails": {
        "MerchantCategoryCode": "5967",
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "CreditDebitIndicator": "Credit",
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        }
      },
      "StatementReference": [],
      "BookingDateTime": "2018-10-22T15:01:20.000Z",
      "ValueDateTime": "2018-10-04T04:02:09.000Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        }
      },
      "TransactionId": "1e88cac5-d0eb-572b-b1d7-19fa48687c62",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-10-20T16:49:22.000Z",
      "ValueDateTime": "2018-10-29T11:37:23.000Z"
    },
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "ea101d82-44f1-540a-b241-f5fbb7b16350",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
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
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Amount": "230.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-10-06T13:27:24.000Z",
      "ValueDateTime": "2018-10-29T00:41:32.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "ecaee77a-c53c-591e-a693-ecfa09f66232",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "SubCode": "DomesticCreditTransfer",
        "Code": "ReceivedCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantCategoryCode": "5967",
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Amount": "230.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "CardInstrument": {
        "Identification": "1234 1234 1234 1234",
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Name": "A. Cardholder"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-12-23T06:07:14.000Z",
      "ValueDateTime": "2018-12-23T05:18:24.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "c2cd6a84-af3d-51a1-84d3-97a1abf1134c",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Booked",
      "TransactionInformation": "Further details about the transaction",
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
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Amount": "230.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-12-19T04:00:36.000Z",
      "ValueDateTime": "2018-12-10T06:23:23.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "214e0250-4b3d-552b-bd91-553242b81baf",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantCategoryCode": "5967",
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-12-12T06:31:31.000Z",
      "ValueDateTime": "2018-12-21T01:51:28.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "d3652f73-ea07-501a-a0c9-830f7d38a6d8",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantCategoryCode": "5967",
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Amount": "230.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-11-30T10:37:41.000Z",
      "ValueDateTime": "2018-11-30T13:18:19.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "2b7262a6-d9d8-54b5-bfb3-3efe780af82c",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "SubCode": "DomesticCreditTransfer",
        "Code": "ReceivedCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Amount": "230.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "CardInstrument": {
        "Identification": "1234 1234 1234 1234",
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Name": "A. Cardholder"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-11-19T11:03:29.000Z",
      "ValueDateTime": "2018-11-30T12:20:53.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "88417241-3c73-512e-91ad-3a56eed717b3",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Booked",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantCategoryCode": "5967",
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-11-11T07:42:52.000Z",
      "ValueDateTime": "2018-11-07T05:43:10.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "843dd9f1-9f97-5c2c-aaf9-aeb57164f665",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Issuer": "ExampleBank",
        "Code": "Transfer"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-11-06T20:20:45.000Z",
      "ValueDateTime": "2018-11-20T03:55:25.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying"
      },
      "TransactionId": "33ca5c14-f4b0-5581-8ead-e73413a9c210",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Booked",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantCategoryCode": "5967",
        "MerchantName": "This is a merchant name that is long"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Amount": "230.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "CardInstrument": {
        "Identification": "1234 1234 1234 1234",
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Name": "A. Cardholder"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-10-22T23:48:17.000Z",
      "ValueDateTime": "2018-10-15T16:30:54.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying"
      },
      "TransactionId": "eaef66ae-6876-5358-8fb3-8e991a691e8b",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Amount": "230.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-10-22T10:39:06.000Z",
      "ValueDateTime": "2018-10-21T08:22:37.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Particulars": "creditorPart",
          "Reference": "creditorRef",
          "Code": "creditorCode"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "6f89dd54-bce7-5217-8901-c4c696580b1d",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Booked",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "Transfer",
        "Issuer": "ExampleBank"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-10-11T15:48:38.000Z",
      "ValueDateTime": "2018-10-13T05:39:45.000Z"
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "TransactionReference": {
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Code": "debtorCode",
          "Particulars": "debtorPart",
          "Reference": "debtorRef"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        },
        "CreditorName": "Party being paid"
      },
      "TransactionId": "9abb25b4-976c-5251-a704-224d57eb1391",
      "Amount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Issuer": "ExampleBank",
        "Code": "Transfer"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "DebtorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor",
        "Identification": "99-1234-1234567-99"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-10-02T11:52:48.000Z",
      "ValueDateTime": "2018-10-16T18:32:37.000Z"
    },
    {
      "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
      "TransactionReference": {
        "CreditorName": "Party being paid",
        "DebtorName": "Party paying",
        "DebtorReference": {
          "Particulars": "debtorPart",
          "Reference": "debtorRef",
          "Code": "debtorCode"
        },
        "CreditorReference": {
          "Code": "creditorCode",
          "Particulars": "creditorPart",
          "Reference": "creditorRef"
        }
      },
      "TransactionId": "212ab3e5-6ea9-5291-a7c2-a4bc78b2eb0d",
      "Amount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "CreditDebitIndicator": "Debit",
      "Status": "Pending",
      "TransactionInformation": "Further details about the transaction",
      "BankTransactionCode": {
        "Code": "ReceivedCreditTransfer",
        "SubCode": "DomesticCreditTransfer"
      },
      "ProprietaryBankTransactionCode": {
        "Issuer": "ExampleBank",
        "Code": "Transfer"
      },
      "MerchantDetails": {
        "MerchantName": "This is a merchant name that is long",
        "MerchantCategoryCode": "5967"
      },
      "CreditorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Creditor"
      },
      "DebtorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "A. Debtor"
      },
      "Balance": {
        "Type": "InterimBooked",
        "Amount": {
          "Currency": "NZD",
          "Amount": "230.00"
        },
        "CreditDebitIndicator": "Credit"
      },
      "CardInstrument": {
        "CardSchemeName": "VISA",
        "AuthorisationType": "PIN",
        "Name": "A. Cardholder",
        "Identification": "1234 1234 1234 1234"
      },
      "StatementReference": [],
      "BookingDateTime": "2018-12-30T03:02:30.000Z",
      "ValueDateTime": "2018-12-25T16:05:44.000Z"
    }
  ]
}
```

