
# Standing Orders GE Tresponse

## Structure

`StandingOrdersGETresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data25`](../../doc/models/data-25.md) | Required | - |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "AccountId8",
        "StandingOrderId": "StandingOrderId2",
        "Frequency": "Frequency0",
        "Reference": {
          "CreditorName": "CreditorName6",
          "CreditorReference": {
            "Particulars": "Particulars4",
            "Code": "Code8",
            "Reference": "Reference0"
          },
          "DebtorName": "DebtorName0",
          "DebtorReference": {
            "Particulars": "Particulars8",
            "Code": "Code2",
            "Reference": "Reference4"
          }
        },
        "FirstPaymentDateTime": "2016-03-13T12:52:32.123Z",
        "FirstPaymentAmount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "NextPaymentDateTime": "2016-03-13T12:52:32.123Z",
        "NextPaymentAmount": {
          "Amount": "Amount6",
          "Currency": "Currency2"
        },
        "FinalPaymentDateTime": "2016-03-13T12:52:32.123Z"
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

