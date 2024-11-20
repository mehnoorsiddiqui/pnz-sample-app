
# Data 5

## Structure

`Data5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `directDebit` | [`DirectDebit[]`](../../doc/models/direct-debit.md) | Required | - |

## Example (as JSON)

```json
{
  "DirectDebit": [
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
  ]
}
```

