
# Account Model

## Structure

`AccountModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `currency` | `string` | Required | Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.<br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `accountType` | [`AccountTypeEnum \| undefined`](../../doc/models/account-type-enum.md) | Optional | Specifies the type of account (personal or business). |
| `accountSubType` | [`AccountSubTypeEnum \| undefined`](../../doc/models/account-sub-type-enum.md) | Optional | Specifies the sub type of account (product family group). |
| `description` | `string \| undefined` | Optional | Specifies the description of the account type.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `nickname` | `string` | Required | The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `account` | [`Account3 \| undefined`](../../doc/models/account-3.md) | Optional | - |
| `servicer` | [`Servicer2 \| undefined`](../../doc/models/servicer-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "AccountId4",
  "Currency": "Currency2",
  "AccountType": "Business",
  "AccountSubType": "PrePaidCard",
  "Description": "Description2",
  "Nickname": "Nickname6",
  "Account": {
    "SchemeName": "BECSElectronicCredit",
    "Identification": "Identification2",
    "Name": "Name8",
    "SecondaryIdentification": "SecondaryIdentification4"
  },
  "Servicer": {
    "SchemeName": "SchemeName4",
    "Identification": "Identification6"
  }
}
```

