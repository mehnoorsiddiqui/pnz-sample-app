
# Data 9

## Structure

`Data9`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scheduledPayment` | [`ScheduledPaymentModel[] \| undefined`](../../doc/models/scheduled-payment-model.md) | Optional | - |

## Example (as JSON)

```json
{
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
    }
  ]
}
```

