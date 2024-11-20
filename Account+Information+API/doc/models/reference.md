
# Reference

## Structure

`Reference`

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
  "CreditorName": "Just A. Creditor",
  "DebtorName": "A beneficiary debtor",
  "CreditorReference": {
    "Particulars": "CreditorPart",
    "Code": "CreditorCode",
    "Reference": "CreditorRef"
  },
  "DebtorReference": {
    "Particulars": "DebtorPart",
    "Code": "DebtorCode",
    "Reference": "DebtorRef"
  }
}
```

