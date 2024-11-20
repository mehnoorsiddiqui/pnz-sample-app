
# Example A113 Retrieveaccountbeneficiaries

## Structure

`ExampleA113Retrieveaccountbeneficiaries`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data86`](../../doc/models/data-86.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
        "BeneficiaryId": "999999-99-5414-0999999-00",
        "Reference": {
          "DebtorName": "A beneficiary debtor",
          "CreditorReference": {
            "Reference": "CreditorRef",
            "Code": "CreditorCode",
            "Particulars": "CreditorPart"
          },
          "DebtorReference": {
            "Code": "DebtorCode",
            "Particulars": "DebtorPart",
            "Reference": "DebtorRef"
          },
          "CreditorName": "TO_BE_REPLACED"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "Just A. Creditor"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        }
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://mwnz-prod.apigee.net/accounts/4986e820-b496-5215-b650-2e9fcd65f50b/beneficiaries"
  }
}
```

