
# Servicer

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.

## Structure

`Servicer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeName` | `string` | Required, Constant | Name of the identification scheme, in a coded form as published in an external list.<br>**Default**: `'BICFI'` |
| `identification` | `string` | Required | Unique and unambiguous identification of the servicing institution.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |

## Example (as JSON)

```json
{
  "SchemeName": "BICFI",
  "Identification": "Identification6"
}
```

