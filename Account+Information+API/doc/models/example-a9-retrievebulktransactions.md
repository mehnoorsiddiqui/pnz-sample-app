
# Example A9 Retrievebulktransactions

## Structure

`ExampleA9Retrievebulktransactions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data155`](../../doc/models/data-155.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links79`](../../doc/models/links-79.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Transaction": [
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
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorReference": {
            "Particulars": "credPart",
            "Reference": "credRef",
            "Code": "credCode"
          },
          "CreditorName": "CreditorName"
        },
        "TransactionId": "147eef75-38a7-5cd3-aa51-0ec3bf8f34c2",
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
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Amount": "458703.00",
            "Currency": "NZD"
          }
        },
        "BookingDateTime": "2019-04-29T07:30:01.000Z"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorReference": {
            "Reference": "credRef",
            "Code": "credCode",
            "Particulars": "credPart"
          },
          "CreditorName": "CreditorName"
        },
        "TransactionId": "c7cfb1d9-a315-510d-b296-23cd6bda5096",
        "Amount": {
          "Currency": "NZD",
          "Amount": "1.00"
        },
        "CreditDebitIndicator": "Debit",
        "Status": "Booked",
        "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAccount": {
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline",
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          }
        },
        "BookingDateTime": "2019-04-27T21:52:47.000Z"
      },
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
        "TransactionId": "6e4bd8c2-0246-5237-9740-b4b6e09c03e0",
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
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "Amount": {
            "Amount": "458703.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked"
        },
        "BookingDateTime": "2019-04-27T16:01:12.000Z"
      },
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
        "TransactionId": "121ac076-97bc-5e81-9fdd-61947ec04590",
        "Amount": {
          "Amount": "1.00",
          "Currency": "NZD"
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
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          },
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked"
        },
        "BookingDateTime": "2019-04-27T04:48:54.000Z"
      },
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
        "TransactionId": "5729cbb1-4509-5242-ad9c-ad479c3ab576",
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
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          },
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked"
        },
        "BookingDateTime": "2019-04-27T00:18:13.000Z"
      },
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
        "TransactionId": "c718967f-b677-50f6-9f68-16d8dcb5dee9",
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
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          }
        },
        "BookingDateTime": "2019-04-24T18:53:26.000Z"
      },
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
        "TransactionId": "53b892c4-dc14-5e6c-b45c-1d82f4a12b66",
        "Amount": {
          "Currency": "NZD",
          "Amount": "1.00"
        },
        "CreditDebitIndicator": "Debit",
        "Status": "Booked",
        "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAccount": {
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline",
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          }
        },
        "BookingDateTime": "2019-04-23T12:41:02.000Z"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorReference": {
            "Particulars": "credPart",
            "Reference": "credRef",
            "Code": "credCode"
          },
          "CreditorName": "CreditorName"
        },
        "TransactionId": "38539e53-f816-5540-9f35-5f5de0cc6c58",
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
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          }
        },
        "BookingDateTime": "2019-04-23T05:54:24.000Z"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorReference": {
            "Particulars": "credPart",
            "Reference": "credRef",
            "Code": "credCode"
          },
          "CreditorName": "CreditorName"
        },
        "TransactionId": "dea2987c-3eb7-5976-87f2-5695973add49",
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
          "Name": "Streamline",
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          }
        },
        "BookingDateTime": "2019-04-20T08:07:03.000Z"
      },
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
        "TransactionId": "7a046f6b-e20d-54c5-9259-643ed0cdc1d2",
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
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          },
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked"
        },
        "BookingDateTime": "2019-04-17T02:27:50.000Z"
      },
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
        "TransactionId": "3e9c5844-0075-568f-82e5-f59df9072363",
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
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline"
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
        "BookingDateTime": "2019-04-16T08:44:31.000Z"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorName": "CreditorName",
          "CreditorReference": {
            "Code": "credCode",
            "Particulars": "credPart",
            "Reference": "credRef"
          }
        },
        "TransactionId": "ffbe95d9-02be-50ca-835c-6aa5852ab1ff",
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
            "Amount": "458703.00",
            "Currency": "NZD"
          }
        },
        "BookingDateTime": "2019-04-15T14:53:14.000Z"
      },
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
        "TransactionId": "cd269c53-5e5a-53c8-afd7-f1d11722acc8",
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
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "Amount": {
            "Amount": "458703.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked"
        },
        "BookingDateTime": "2019-04-15T02:40:05.000Z"
      },
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
        "TransactionId": "77d9453f-1cce-5e28-8f49-cad902f08dba",
        "Amount": {
          "Amount": "1.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Debit",
        "Status": "Booked",
        "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
        "MerchantDetails": {
          "MerchantCategoryCode": "5967",
          "MerchantName": "This is a merchant name that is long"
        },
        "CreditorAccount": {
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          }
        },
        "BookingDateTime": "2019-04-14T20:14:50.000Z"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorName": "CreditorName",
          "CreditorReference": {
            "Reference": "credRef",
            "Code": "credCode",
            "Particulars": "credPart"
          }
        },
        "TransactionId": "5023bea7-e33b-5ff2-81c0-d5076523a411",
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
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          },
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked"
        },
        "BookingDateTime": "2019-04-12T04:00:02.000Z"
      },
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
        "TransactionId": "e37d5bca-1ed3-5171-b379-342b2aa37908",
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
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          },
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked"
        },
        "BookingDateTime": "2019-04-08T14:54:01.000Z"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorReference": {
            "Reference": "credRef",
            "Code": "credCode",
            "Particulars": "credPart"
          },
          "CreditorName": "CreditorName"
        },
        "TransactionId": "992299fb-3d9e-55b4-bab0-43d583174bd7",
        "Amount": {
          "Currency": "NZD",
          "Amount": "1.00"
        },
        "CreditDebitIndicator": "Debit",
        "Status": "Booked",
        "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAccount": {
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline",
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          },
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked"
        },
        "BookingDateTime": "2019-04-07T07:49:47.000Z"
      },
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
        "TransactionId": "91d26f87-00bf-53e6-bfa3-67843ff26b77",
        "Amount": {
          "Amount": "1.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Debit",
        "Status": "Booked",
        "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
        "MerchantDetails": {
          "MerchantCategoryCode": "5967",
          "MerchantName": "This is a merchant name that is long"
        },
        "CreditorAccount": {
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline"
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
            "Amount": "458703.00",
            "Currency": "NZD"
          }
        },
        "BookingDateTime": "2019-04-01T16:02:34.000Z"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorName": "CreditorName",
          "CreditorReference": {
            "Code": "credCode",
            "Particulars": "credPart",
            "Reference": "credRef"
          }
        },
        "TransactionId": "54d6fee4-1710-56ad-9bb2-52d843bda4b8",
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
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          },
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked"
        },
        "BookingDateTime": "2019-03-30T11:48:38.000Z"
      },
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
        "TransactionId": "c378d46a-4cd2-5e35-b5ad-c34470b8d7d1",
        "Amount": {
          "Amount": "1.00",
          "Currency": "NZD"
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
            "Amount": "458703.00",
            "Currency": "NZD"
          }
        },
        "BookingDateTime": "2019-03-30T06:34:00.000Z"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorName": "CreditorName",
          "CreditorReference": {
            "Particulars": "credPart",
            "Reference": "credRef",
            "Code": "credCode"
          }
        },
        "TransactionId": "6a00b05c-1419-5484-98e7-903b700c4e83",
        "Amount": {
          "Amount": "1.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Debit",
        "Status": "Booked",
        "TransactionInformation": "This is a transaction within the middleware nz sandbox environment",
        "MerchantDetails": {
          "MerchantCategoryCode": "5967",
          "MerchantName": "This is a merchant name that is long"
        },
        "CreditorAccount": {
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline"
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
            "Amount": "458703.00",
            "Currency": "NZD"
          }
        },
        "BookingDateTime": "2019-03-24T08:56:32.000Z"
      },
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
        "TransactionId": "a2501f6d-306d-561d-8877-482e096578c2",
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
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Amount": "458703.00",
            "Currency": "NZD"
          }
        },
        "BookingDateTime": "2019-03-22T21:13:02.000Z"
      },
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
        "TransactionId": "465b2242-f852-5465-94e1-18118cb0507d",
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
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          }
        },
        "BookingDateTime": "2019-03-17T17:15:36.000Z"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "TransactionReference": {
          "CreditorName": "CreditorName",
          "CreditorReference": {
            "Particulars": "credPart",
            "Reference": "credRef",
            "Code": "credCode"
          }
        },
        "TransactionId": "ede66c9b-475e-5577-b7d9-c88e368a9e81",
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
          "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
          "Identification": "00-0000-0000000-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "Streamline"
        },
        "DebtorAccount": {
          "Identification": "99-5414-9158057758-00",
          "SchemeName": "BECSElectronicCredit",
          "Name": "CurrentAccount"
        },
        "Balance": {
          "CreditDebitIndicator": "Debit",
          "Type": "ClosingBooked",
          "Amount": {
            "Currency": "NZD",
            "Amount": "458703.00"
          }
        },
        "BookingDateTime": "2019-03-17T16:50:05.000Z"
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "/transactions",
    "Next": "/transactions?cursor=CpwBCi0KD0Jvb2tpbmdEYXRlVGltZRIaGhgyMDE5LTAzLTE3VDE2OjUwOjA1LjAwMFoSZ2oRZn5zYW5kYm94LW5vbnByb2RyRwsSDHRyYW5zYWN0aW9ucyI1OTE1ODA1Nzc1OC05OS01NDE0LTkxNTgwNTc3NTgtMDAtMjAxOTAzMDEtMjAxOTAzMzEtMTEMogEIbXduenByb2QYACAB&account=766e7658-0b56-5fd3-bc7f-58a7653d7bdb"
  }
}
```

