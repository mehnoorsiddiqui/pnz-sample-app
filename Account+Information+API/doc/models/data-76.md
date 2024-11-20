
# Data 76

## Structure

`Data76`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beneficiary` | [`Beneficiary4[]`](../../doc/models/beneficiary-4.md) | Required | - |

## Example (as JSON)

```json
{
  "Beneficiary": [
    {
      "BeneficiaryId": "9999999-99-1810-5604739-00",
      "Reference": {
        "DebtorName": "A beneficiary debtor",
        "DebtorReference": {
          "Code": "DebtorCode",
          "Particulars": "DebtorPart",
          "Reference": "DebtorRef"
        },
        "CreditorReference": {
          "Code": "CreditorCode",
          "Particulars": "CreditorPart",
          "Reference": "CreditorRef"
        },
        "CreditorName": "Just A. Creditor"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      }
    },
    {
      "BeneficiaryId": "9999999-99-1810-5604739-01",
      "Reference": {
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
        },
        "CreditorName": "Just A. Creditor"
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
    },
    {
      "BeneficiaryId": "9999999-99-1810-5604739-02",
      "Reference": {
        "DebtorReference": {
          "Code": "DebtorCode",
          "Particulars": "DebtorPart",
          "Reference": "DebtorRef"
        },
        "CreditorReference": {
          "Code": "CreditorCode",
          "Particulars": "CreditorPart",
          "Reference": "CreditorRef"
        },
        "CreditorName": "Just A. Creditor",
        "DebtorName": "A beneficiary debtor"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      }
    },
    {
      "BeneficiaryId": "9999999-99-1810-5604739-03",
      "Reference": {
        "CreditorName": "Just A. Creditor",
        "DebtorName": "A beneficiary debtor",
        "DebtorReference": {
          "Code": "DebtorCode",
          "Particulars": "DebtorPart",
          "Reference": "DebtorRef"
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
    },
    {
      "BeneficiaryId": "9999999-99-1810-5604739-04",
      "Reference": {
        "DebtorName": "A beneficiary debtor",
        "DebtorReference": {
          "Code": "DebtorCode",
          "Particulars": "DebtorPart",
          "Reference": "DebtorRef"
        },
        "CreditorReference": {
          "Code": "CreditorCode",
          "Particulars": "CreditorPart",
          "Reference": "CreditorRef"
        },
        "CreditorName": "Just A. Creditor"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      }
    }
  ]
}
```
