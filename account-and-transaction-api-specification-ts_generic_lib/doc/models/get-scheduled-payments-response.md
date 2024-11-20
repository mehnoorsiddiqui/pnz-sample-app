
# Get Scheduled Payments Response

## Structure

`GetScheduledPaymentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data9`](../../doc/models/data-9.md) | Required | - |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "AccountId0",
        "ScheduledPaymentId": "ScheduledPaymentId8",
        "ScheduledPaymentDateTime": "2016-03-13T12:52:32.123Z",
        "ScheduledType": "Arrival",
        "InstructedAmount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "Reference": {
          "CreditorName": "CreditorName6",
          "CreditorReference": {
            "Particulars": "Particulars4",
            "Code": "Code8",
            "Reference": "Reference0"
          },
          "DebtorName": "DebtorName0",
          "DebtorReference": {
            "Particulars": "Particulars8",
            "Code": "Code2",
            "Reference": "Reference4"
          }
        },
        "CreditorAgent": {
          "SchemeName": "SchemeName6",
          "Identification": "Identification4"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "Identification2",
          "Name": "Name8",
          "SecondaryIdentification": "SecondaryIdentification4"
        }
      },
      {
        "AccountId": "AccountId0",
        "ScheduledPaymentId": "ScheduledPaymentId8",
        "ScheduledPaymentDateTime": "2016-03-13T12:52:32.123Z",
        "ScheduledType": "Arrival",
        "InstructedAmount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "Reference": {
          "CreditorName": "CreditorName6",
          "CreditorReference": {
            "Particulars": "Particulars4",
            "Code": "Code8",
            "Reference": "Reference0"
          },
          "DebtorName": "DebtorName0",
          "DebtorReference": {
            "Particulars": "Particulars8",
            "Code": "Code2",
            "Reference": "Reference4"
          }
        },
        "CreditorAgent": {
          "SchemeName": "SchemeName6",
          "Identification": "Identification4"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "Identification2",
          "Name": "Name8",
          "SecondaryIdentification": "SecondaryIdentification4"
        }
      },
      {
        "AccountId": "AccountId0",
        "ScheduledPaymentId": "ScheduledPaymentId8",
        "ScheduledPaymentDateTime": "2016-03-13T12:52:32.123Z",
        "ScheduledType": "Arrival",
        "InstructedAmount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "Reference": {
          "CreditorName": "CreditorName6",
          "CreditorReference": {
            "Particulars": "Particulars4",
            "Code": "Code8",
            "Reference": "Reference0"
          },
          "DebtorName": "DebtorName0",
          "DebtorReference": {
            "Particulars": "Particulars8",
            "Code": "Code2",
            "Reference": "Reference4"
          }
        },
        "CreditorAgent": {
          "SchemeName": "SchemeName6",
          "Identification": "Identification4"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "Identification2",
          "Name": "Name8",
          "SecondaryIdentification": "SecondaryIdentification4"
        }
      }
    ]
  },
  "Links": {
    "Self": "Self2",
    "First": "First0",
    "Prev": "Prev6",
    "Next": "Next0",
    "Last": "Last4"
  },
  "Meta": {
    "TotalPages": 96,
    "FirstAvailableDateTime": "2016-03-13T12:52:32.123Z",
    "LastAvailableDateTime": "2016-03-13T12:52:32.123Z"
  }
}
```

