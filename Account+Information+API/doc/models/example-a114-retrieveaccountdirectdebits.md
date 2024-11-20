
# Example A114 Retrieveaccountdirectdebits

## Structure

`ExampleA114Retrieveaccountdirectdebits`

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
        "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
        "DirectDebitId": "999999-99-5414-0999999-00",
        "MandateIdentification": "The Mandate Name",
        "DirectDebitStatusCode": "Active",
        "Name": "A. Direct Debit Name",
        "PreviousPaymentDateTime": "2019-05-05T10:43:07.000Z",
        "PreviousPaymentAmount": {
          "Currency": "NZD",
          "Amount": "72.49"
        }
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://mwnz-prod.apigee.net/accounts/4986e820-b496-5215-b650-2e9fcd65f50b/direct-debits"
  }
}
```

