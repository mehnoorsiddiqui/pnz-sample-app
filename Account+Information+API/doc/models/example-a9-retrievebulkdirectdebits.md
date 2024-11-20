
# Example A9 Retrievebulkdirectdebits

## Structure

`ExampleA9Retrievebulkdirectdebits`

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
      },
      {
        "AccountId": "4332b48d-bde6-5ec3-bd6d-f5d62377f528",
        "DirectDebitId": "999999-99-5414-0999999-01",
        "MandateIdentification": "The Mandate Name",
        "DirectDebitStatusCode": "Active",
        "Name": "A. Direct Debit Name",
        "PreviousPaymentDateTime": "2019-05-05T10:43:07.000Z",
        "PreviousPaymentAmount": {
          "Currency": "NZD",
          "Amount": "72.49"
        }
      },
      {
        "AccountId": "d759723a-8686-5428-9857-ea326c9d5bed",
        "DirectDebitId": "999999-99-5414-0999999-02",
        "MandateIdentification": "The Mandate Name",
        "DirectDebitStatusCode": "Active",
        "Name": "A. Direct Debit Name",
        "PreviousPaymentDateTime": "2019-05-05T10:43:07.000Z",
        "PreviousPaymentAmount": {
          "Currency": "NZD",
          "Amount": "72.49"
        }
      },
      {
        "AccountId": "9522c6fe-c8f6-507f-b207-97273995b1d2",
        "DirectDebitId": "999999-99-5414-0999999-03",
        "MandateIdentification": "The Mandate Name",
        "DirectDebitStatusCode": "Active",
        "Name": "A. Direct Debit Name",
        "PreviousPaymentDateTime": "2019-05-05T10:43:07.000Z",
        "PreviousPaymentAmount": {
          "Currency": "NZD",
          "Amount": "72.49"
        }
      },
      {
        "AccountId": "b978be63-1961-5d34-ab91-7805c91c7199",
        "DirectDebitId": "999999-99-5414-0999999-04",
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
    "Self": "https://mwnz-prod.apigee.net/direct-debits"
  }
}
```

