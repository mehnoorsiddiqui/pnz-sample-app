
# Transaction Reference 6

## Structure

`TransactionReference6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditorName` | `string` | Required | - |
| `creditorReference` | [`CreditorReference`](../../doc/models/creditor-reference.md) | Required | - |
| `debtorName` | `string \| undefined` | Optional | - |
| `debtorReference` | [`DebtorReference \| undefined`](../../doc/models/debtor-reference.md) | Optional | - |

## Example (as JSON)

```json
{
  "CreditorName": "CreditorName 123",
  "CreditorReference": {
    "Code": "credCode1",
    "Particulars": "credPart1",
    "Reference": "credRef1"
  }
}
```

