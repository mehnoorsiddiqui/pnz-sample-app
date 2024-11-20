
# AC107 Retrievebulkscheduledpayments

## Structure

`AC107Retrievebulkscheduledpayments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data8`](../../doc/models/data-8.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
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
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/scheduled-payments"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```

