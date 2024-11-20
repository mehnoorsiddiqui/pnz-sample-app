
# Creditor Agent 3

## Structure

`CreditorAgent3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeName` | `string` | Required, Constant | Name of the identification scheme, in a coded form as published in an external list.<br>**Default**: `'BICFI'` |
| `identification` | `string` | Required | Unique and unambiguous identification of a financial institution or a branch of a financial institution.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |

## Example (as JSON)

```json
{
  "SchemeName": "BICFI",
  "Identification": "Identification8"
}
```
