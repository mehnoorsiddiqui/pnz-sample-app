
# Scheduled Payment 4

## Structure

`ScheduledPayment4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `scheduledType` | `string` | Required | - |
| `instructedAmount` | [`InstructedAmount`](../../doc/models/instructed-amount.md) | Required | - |
| `scheduledPaymentDateTime` | `string` | Required | - |
| `creditorAgent` | [`CreditorAgent1`](../../doc/models/creditor-agent-1.md) | Required | - |
| `creditorAccount` | [`CreditorAccount1`](../../doc/models/creditor-account-1.md) | Required | - |

## Example (as JSON)

```json
{
  "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
  "ScheduledType": "Arrival",
  "InstructedAmount": {
    "Amount": "10.00",
    "Currency": "NZD"
  },
  "ScheduledPaymentDateTime": "2019-01-06T02:00:00.000Z",
  "CreditorAgent": {
    "Identification": "ABCXYZ3A",
    "SchemeName": "BICFI"
  },
  "CreditorAccount": {
    "SchemeName": "BECSElectronicCredit",
    "Name": "Just A. Creditor",
    "Identification": "99-1234-1234567-99"
  }
}
```

