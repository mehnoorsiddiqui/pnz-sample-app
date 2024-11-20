
# Bank Transaction Code

Set of elements used to fully identify the type of underlying transaction resulting in an entry.

## Structure

`BankTransactionCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Required | Specifies the family within a domain. |
| `subCode` | `string` | Required | Specifies the sub-product family within a specific family. |

## Example (as JSON)

```json
{
  "Code": "Code4",
  "SubCode": "SubCode0"
}
```

