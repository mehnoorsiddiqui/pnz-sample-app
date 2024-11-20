
# Balances GE Tresponse

## Structure

`BalancesGETresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data52`](../../doc/models/data-52.md) | Required | - |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "AccountId0",
        "Amount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingAvailable",
        "DateTime": "2016-03-13T12:52:32.123Z",
        "CreditLine": [
          {
            "Included": false,
            "Amount": {
              "Amount": "Amount0",
              "Currency": "Currency6"
            },
            "Type": "Temporary"
          }
        ]
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

