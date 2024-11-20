
# AC104 Retrievebulkdirectdebits 2

## Structure

`AC104Retrievebulkdirectdebits2`

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
          "Currency": "NZD",
          "Amount": "72.49"
        }
      },
      {
        "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
        "DirectDebitId": "9999999-99-1810-5604739-01",
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
        "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
        "DirectDebitId": "9999999-99-1810-5604739-02",
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
        "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
        "DirectDebitId": "9999999-99-1810-5604739-03",
        "MandateIdentification": "The Mandate Name",
        "DirectDebitStatusCode": "Active",
        "Name": "A. Direct Debit Name",
        "PreviousPaymentDateTime": "2019-05-05T10:43:07.000Z",
        "PreviousPaymentAmount": {
          "Amount": "72.49",
          "Currency": "NZD"
        }
      },
      {
        "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
        "DirectDebitId": "9999999-99-1810-5604739-04",
        "MandateIdentification": "The Mandate Name",
        "DirectDebitStatusCode": "Inactive",
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
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/direct-debits"
  }
}
```

