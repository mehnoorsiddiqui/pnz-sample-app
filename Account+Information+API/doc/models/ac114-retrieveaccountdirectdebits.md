
# AC114 Retrieveaccountdirectdebits

## Structure

`AC114Retrieveaccountdirectdebits`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data5`](../../doc/models/data-5.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
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
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/accounts/OBA-99-7046-5813780-00/direct-debits"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```

