
# AC111 Retrieveanaccount

## Structure

`AC111Retrieveanaccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data12`](../../doc/models/data-12.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Account": {
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
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/accounts/OBA-99-7046-5813780-00"
  },
  "Meta": {}
}
```

