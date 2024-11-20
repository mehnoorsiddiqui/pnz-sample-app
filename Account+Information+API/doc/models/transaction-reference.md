
# Transaction Reference

## Structure

`TransactionReference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditorName` | `string` | Required | - |
| `debtorName` | `string` | Required | - |
| `creditorReference` | [`CreditorReference`](../../doc/models/creditor-reference.md) | Required | - |
| `debtorReference` | [`DebtorReference`](../../doc/models/debtor-reference.md) | Required | - |

## Example (as JSON)

```json
{
  "CreditorName": "Party being paid",
  "DebtorName": "Party paying",
  "CreditorReference": {
    "Particulars": "creditorPart",
    "Code": "creditorCode",
    "Reference": "creditorRef"
  },
  "DebtorReference": {
    "Particulars": "debtorPart",
    "Code": "debtorCode",
    "Reference": "debtorRef"
  }
}
```

