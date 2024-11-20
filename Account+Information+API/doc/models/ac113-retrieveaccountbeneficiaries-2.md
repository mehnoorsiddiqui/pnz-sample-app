
# AC113 Retrieveaccountbeneficiaries 2

## Structure

`AC113Retrieveaccountbeneficiaries2`

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
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "BeneficiaryId": "9999999-99-1810-5604739-00",
        "Reference": {
          "CreditorName": "Just A. Creditor",
          "DebtorName": "A beneficiary debtor",
          "DebtorReference": {
            "Particulars": "DebtorPart",
            "Reference": "DebtorRef",
            "Code": "DebtorCode"
          },
          "CreditorReference": {
            "Code": "CreditorCode",
            "Particulars": "CreditorPart",
            "Reference": "CreditorRef"
          }
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Name": "Just A. Creditor",
          "Identification": "99-1234-1234567-99"
        },
        "CreditorAgent": {
          "Identification": "ABCXYZ3A",
          "SchemeName": "BICFI"
        }
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts/39b0736f-e4ec-5bd3-8588-112abe8eb247/beneficiaries"
  }
}
```

