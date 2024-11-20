
# Standing Order 4

## Structure

`StandingOrder4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `standingOrderId` | `string` | Required | - |
| `frequency` | `string` | Required | - |
| `nextPaymentDateTime` | `string` | Required | - |
| `nextPaymentAmount` | [`NextPaymentAmount`](../../doc/models/next-payment-amount.md) | Required | - |
| `creditorAccount` | [`CreditorAccount1`](../../doc/models/creditor-account-1.md) | Required | - |
| `creditorAgent` | [`CreditorAgent1`](../../doc/models/creditor-agent-1.md) | Required | - |

## Example (as JSON)

```json
{
  "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
  "StandingOrderId": "9999999-99-1810-5604739-00",
  "Frequency": "EvryDay",
  "NextPaymentDateTime": "2019-01-15T02:00:00.000Z",
  "NextPaymentAmount": {
    "Amount": "5.00",
    "Currency": "NZD"
  },
  "CreditorAccount": {
    "SchemeName": "BECSElectronicCredit",
    "Name": "Just A. Creditor",
    "Identification": "99-1234-1234567-99"
  },
  "CreditorAgent": {
    "SchemeName": "BICFI",
    "Identification": "ABCXYZ3A"
  }
}
```

