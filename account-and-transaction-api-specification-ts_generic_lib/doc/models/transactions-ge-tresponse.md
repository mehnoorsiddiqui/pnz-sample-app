
# Transactions GE Tresponse

## Structure

`TransactionsGETresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data26`](../../doc/models/data-26.md) | Required | - |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "AccountId4",
        "TransactionId": "TransactionId4",
        "TransactionReference": {
          "CreditorName": "CreditorName2",
          "CreditorReference": {
            "Particulars": "Particulars4",
            "Code": "Code8",
            "Reference": "Reference0"
          },
          "DebtorName": "DebtorName4",
          "DebtorReference": {
            "Particulars": "Particulars8",
            "Code": "Code2",
            "Reference": "Reference4"
          }
        },
        "StatementReference": [
          "StatementReference0",
          "StatementReference1"
        ],
        "Amount": {
          "Amount": "Amount0",
          "Currency": "Currency6"
        },
        "CreditDebitIndicator": "Credit",
        "Status": "Booked",
        "BookingDateTime": "2016-03-13T12:52:32.123Z",
        "ValueDateTime": "2016-03-13T12:52:32.123Z",
        "AddressLine": "AddressLine8"
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

