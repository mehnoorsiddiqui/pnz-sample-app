
# Reference

## Structure

`Reference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditorName` | `string` | Required | **Constraints**: *Maximum Length*: `20` |
| `creditorReference` | [`CreditorReference \| undefined`](../../doc/models/creditor-reference.md) | Optional | - |
| `debtorName` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `20` |
| `debtorReference` | [`CreditorReference \| undefined`](../../doc/models/creditor-reference.md) | Optional | - |

## Example (as JSON)

```json
{
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
}
```

