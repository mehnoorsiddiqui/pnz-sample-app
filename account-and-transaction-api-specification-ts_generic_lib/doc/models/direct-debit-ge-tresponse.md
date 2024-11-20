
# Direct Debit GE Tresponse

## Structure

`DirectDebitGETresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data13`](../../doc/models/data-13.md) | Required | - |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "DirectDebit": [
      {
        "AccountId": "AccountId8",
        "DirectDebitId": "DirectDebitId6",
        "MandateIdentification": "MandateIdentification2",
        "DirectDebitStatusCode": "Active",
        "Name": "Name8",
        "PreviousPaymentDateTime": "2016-03-13T12:52:32.123Z",
        "PreviousPaymentAmount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        }
      }
    ]
  },
  "Links": {
    "Self": "Self2",
    "First": "First0",
    "Prev": "Prev6",
    "Next": "Next0",
    "Last": "Last4"
  },
  "Meta": {
    "TotalPages": 96,
    "FirstAvailableDateTime": "2016-03-13T12:52:32.123Z",
    "LastAvailableDateTime": "2016-03-13T12:52:32.123Z"
  }
}
```

