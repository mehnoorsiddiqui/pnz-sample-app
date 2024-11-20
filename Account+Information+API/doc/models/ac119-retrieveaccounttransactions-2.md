
# AC119 Retrieveaccounttransactions 2

## Structure

`AC119Retrieveaccounttransactions2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data83`](../../doc/models/data-83.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Transaction": [
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
            "Currency": "NZD",
            "Amount": "19375.00"
          },
          "CreditDebitIndicator": "Credit"
        },
        "StatementReference": [],
        "BookingDateTime": "2020-06-27T23:39:52.766Z"
      },
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
        "TransactionId": "07db2a7b-ac35-49ee-80e6-2c253325f4df",
        "Amount": {
          "Currency": "NZD",
          "Amount": "25.00"
        },
        "CreditDebitIndicator": "Debit",
        "Status": "Booked",
        "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
        "BankTransactionCode": {
          "SubCode": "DomesticCreditTransfer",
          "Code": "ReceivedCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
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
        "TransactionId": "d9ec501f-575a-5161-bd03-5fe99549f564",
        "Amount": {
          "Currency": "NZD",
          "Amount": "10.00"
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
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "230.00"
          }
        },
        "StatementReference": [],
        "BookingDateTime": "2018-12-24T16:55:14.000Z",
        "ValueDateTime": "2018-12-31T00:07:32.000Z"
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
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "230.00"
          }
        },
        "StatementReference": [],
        "BookingDateTime": "2018-12-08T19:31:57.000Z",
        "ValueDateTime": "2018-12-24T17:22:16.000Z"
      },
      {
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "TransactionReference": {
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
          "AuthorisationType": "PIN",
          "Name": "A. Cardholder",
          "Identification": "1234 1234 1234 1234",
          "CardSchemeName": "VISA"
        },
        "StatementReference": [],
        "BookingDateTime": "2018-12-01T12:46:39.000Z",
        "ValueDateTime": "2018-12-21T16:19:23.000Z"
      },
      {
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
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
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked",
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          }
        },
        "StatementReference": [],
        "BookingDateTime": "2018-11-24T00:59:38.000Z",
        "ValueDateTime": "2018-11-25T21:13:27.000Z"
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
          "CardSchemeName": "VISA",
          "AuthorisationType": "PIN",
          "Name": "A. Cardholder",
          "Identification": "1234 1234 1234 1234"
        },
        "StatementReference": [],
        "BookingDateTime": "2018-11-17T12:08:42.000Z",
        "ValueDateTime": "2018-11-12T01:51:59.000Z"
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
        "TransactionId": "4be0fd64-5a2f-508e-a778-77e80f6686cc",
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
            "Amount": "230.00",
            "Currency": "NZD"
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
        "TransactionId": "e02edd26-c5bc-57de-8094-30e13cdbf126",
        "Amount": {
          "Currency": "NZD",
          "Amount": "10.00"
        },
        "CreditDebitIndicator": "Debit",
        "Status": "Booked",
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
        "BookingDateTime": "2018-10-22T15:01:20.000Z",
        "ValueDateTime": "2018-10-04T04:02:09.000Z"
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
        "TransactionId": "1e88cac5-d0eb-572b-b1d7-19fa48687c62",
        "Amount": {
          "Currency": "NZD",
          "Amount": "10.00"
        },
        "CreditDebitIndicator": "Debit",
        "Status": "Pending",
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
          "Type": "InterimBooked",
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
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
        "TransactionId": "ea101d82-44f1-540a-b241-f5fbb7b16350",
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
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "230.00"
          }
        },
        "StatementReference": [],
        "BookingDateTime": "2018-10-06T13:27:24.000Z",
        "ValueDateTime": "2018-10-29T00:41:32.000Z"
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts/39b0736f-e4ec-5bd3-8588-112abe8eb247/transactions"
  }
}
```

