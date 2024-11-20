
# Direct Debit

## Structure

`DirectDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `mandateIdentification` | `string` | Required | - |
| `name` | `string` | Required | - |
| `directDebitId` | `string` | Required | - |
| `directDebitStatusCode` | `string` | Required | - |
| `previousPaymentAmount` | [`PreviousPaymentAmount`](../../doc/models/previous-payment-amount.md) | Required | - |
| `previousPaymentDateTime` | `string` | Required | - |

## Example (as JSON)

```json
{
  "AccountId": "OBA-99-7046-5813780-00",
  "MandateIdentification": "The Mandate Name",
  "Name": "A. Direct Debit Name",
  "DirectDebitId": "ceb935df-fe63-5918-92c9-c7059a312e4a",
  "DirectDebitStatusCode": "Inactive",
  "PreviousPaymentAmount": {
    "Amount": "72.49",
    "Currency": "NZD"
  },
  "PreviousPaymentDateTime": "2019-05-05T10:43:07.000Z"
}
```

