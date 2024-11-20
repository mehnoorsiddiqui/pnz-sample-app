
# Standing Order

## Structure

`StandingOrder`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `frequency` | `string` | Required | - |
| `nextPaymentDateTime` | `string` | Required | - |
| `nextPaymentAmount` | [`NextPaymentAmount`](../../doc/models/next-payment-amount.md) | Required | - |
| `standingOrderId` | `string` | Required | - |
| `reference` | [`Reference`](../../doc/models/reference.md) | Required | - |
| `firstPaymentAmount` | [`FirstPaymentAmount`](../../doc/models/first-payment-amount.md) | Required | - |
| `finalPaymentAmount` | [`FinalPaymentAmount`](../../doc/models/final-payment-amount.md) | Required | - |
| `firstPaymentDateTime` | `string` | Required | - |
| `finalPaymentDateTime` | `string` | Required | - |
| `creditorAccount` | [`CreditorAccount1`](../../doc/models/creditor-account-1.md) | Required | - |
| `creditorAgent` | [`CreditorAgent1`](../../doc/models/creditor-agent-1.md) | Required | - |

## Example (as JSON)

```json
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
```

