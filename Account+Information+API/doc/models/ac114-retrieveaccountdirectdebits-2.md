
# AC114 Retrieveaccountdirectdebits 2

## Structure

`AC114Retrieveaccountdirectdebits2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data5`](../../doc/models/data-5.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "DirectDebit": [
      {
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "DirectDebitId": "9999999-99-1810-5604739-00",
        "MandateIdentification": "The Mandate Name",
        "DirectDebitStatusCode": "Active",
        "Name": "A. Direct Debit Name",
        "PreviousPaymentDateTime": "2019-05-05T10:43:07.000Z",
        "PreviousPaymentAmount": {
          "Amount": "72.49",
          "Currency": "NZD"
        }
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts/39b0736f-e4ec-5bd3-8588-112abe8eb247/direct-debits"
  }
}
```

