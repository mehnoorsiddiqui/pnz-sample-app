
# Data 6

Data

## Structure

`Data6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `standingOrder` | [`StandingOrderModel[] \| undefined`](../../doc/models/standing-order-model.md) | Optional | StandingOrder |

## Example (as JSON)

```json
{
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
}
```

