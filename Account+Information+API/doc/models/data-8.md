
# Data 8

## Structure

`Data8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scheduledPayment` | [`ScheduledPayment[]`](../../doc/models/scheduled-payment.md) | Required | - |

## Example (as JSON)

```json
{
  "ScheduledPayment": [
    {
      "AccountId": "OBA-99-7046-5813780-00",
      "ScheduledType": "Execution",
      "InstructedAmount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "ScheduledPaymentDateTime": "2019-02-06T02:00:00.000Z",
      "ScheduledPaymentId": "ceb935df-fe63-5918-92c9-c7059a312e4a",
      "Reference": {
        "CreditorName": "Just A. Creditor",
        "DebtorName": "A SP debtor",
        "CreditorReference": {
          "Particulars": "CreditorPart",
          "Code": "CreditorCode",
          "Reference": "CreditorRef"
        },
        "DebtorReference": {
          "Particulars": "DebtorPart",
          "Code": "DebtorCode",
          "Reference": "DebtorRef"
        }
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Identification": "99-1234-1234567-99",
        "Name": "Just A. Creditor"
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      }
    }
  ]
}
```

