
# AC118 Retrieveaccountstandingorders

## Structure

`AC118Retrieveaccountstandingorders`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data9`](../../doc/models/data-9.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Frequency": "EvryDay",
        "NextPaymentDateTime": "2019-01-15T02:00:00.000Z",
        "NextPaymentAmount": {
          "Amount": "5.00",
          "Currency": "NZD"
        },
        "StandingOrderId": "ceb935df-fe63-5918-92c9-c7059a312e4a",
        "Reference": {
          "CreditorName": "Just A. Creditor",
          "DebtorName": "A beneficiary debtor",
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
        "FirstPaymentAmount": {
          "Amount": "5.00",
          "Currency": "NZD"
        },
        "FinalPaymentAmount": {
          "Amount": "5.00",
          "Currency": "NZD"
        },
        "FirstPaymentDateTime": "2019-01-01T02:00:00.000Z",
        "FinalPaymentDateTime": "2019-03-12T02:00:00.000Z",
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
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/accounts/OBA-99-7046-5813780-00/standing-orders"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```

