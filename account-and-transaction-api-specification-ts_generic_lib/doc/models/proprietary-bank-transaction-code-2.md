
# Proprietary Bank Transaction Code 2

## Structure

`ProprietaryBankTransactionCode2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Required | Proprietary bank transaction code to identify the underlying transaction.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `issuer` | `string \| undefined` | Optional | Identification of the issuer of the proprietary bank transaction code.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |

## Example (as JSON)

```json
{
  "Code": "Code6",
  "Issuer": "Issuer6"
}
```

