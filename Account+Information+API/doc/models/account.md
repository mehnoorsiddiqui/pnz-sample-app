
# Account

## Structure

`Account`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `currency` | `string` | Required | - |
| `nickname` | `string` | Required | - |
| `description` | `string` | Required | - |
| `accountType` | `string` | Required | - |
| `accountSubType` | `string` | Required | - |
| `account` | [`Account1`](../../doc/models/account-1.md) | Required | - |

## Example (as JSON)

```json
{
  "AccountId": "OBA-99-7046-5813780-00",
  "Currency": "NZD",
  "Nickname": "Cheque Account",
  "Description": "Cheque Account",
  "AccountType": "Personal",
  "AccountSubType": "Savings",
  "Account": {
    "SchemeName": "BECSElectronicCredit",
    "Identification": "99-7046-5813780-00",
    "Name": "CurrentAccount",
    "SecondaryIdentification": "ID2-99-7046-5813780-00"
  }
}
```

