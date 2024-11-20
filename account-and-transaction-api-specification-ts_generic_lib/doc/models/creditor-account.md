
# Creditor Account

Unambiguous identification of the account of the creditor, in the case of a debit transaction.

## Structure

`CreditorAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeName` | [`AccountSchemeModelEnum`](../../doc/models/account-scheme-model-enum.md) | Required | - |
| `identification` | `string` | Required | Identification assigned by an institution to identify an account. This identification is known by the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `34` |
| `name` | `string \| undefined` | Optional | Name of the account, as assigned by the account servicing institution, in agreement with the account owner in order to provide an additional means of identification of the account.<br>Usage: The account name is different from the account owner name. The account name is used in certain user communities to provide a means of identifying the account, in addition to the account owner's identity and the account number.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `secondaryIdentification` | `string \| undefined` | Optional | This is secondary identification of the account, as assigned by the account servicing institution.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `34` |

## Example (as JSON)

```json
{
  "SchemeName": "BECSElectronicCredit",
  "Identification": "Identification2",
  "Name": "Name8",
  "SecondaryIdentification": "SecondaryIdentification4"
}
```

