
# Transaction Reference 12

## Structure

`TransactionReference12`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditorReference` | [`CreditorReference`](../../doc/models/creditor-reference.md) | Required | - |
| `creditorName` | `string` | Required | - |

## Example (as JSON)

```json
{
  "CreditorReference": {
    "Code": "credCode",
    "Particulars": "credPart",
    "Reference": "credRef"
  },
  "CreditorName": "CreditorName"
}
```

