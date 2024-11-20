
# Data 86

## Structure

`Data86`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beneficiary` | [`Beneficiary5[]`](../../doc/models/beneficiary-5.md) | Required | - |

## Example (as JSON)

```json
{
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
}
```

