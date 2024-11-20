
# Example A9 Retrievebulkbeneficiaries

## Structure

`ExampleA9Retrievebulkbeneficiaries`

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
            "Particulars": "CreditorPart",
            "Reference": "CreditorRef",
            "Code": "CreditorCode"
          },
          "DebtorReference": {
            "Particulars": "DebtorPart",
            "Reference": "DebtorRef",
            "Code": "DebtorCode"
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
      },
      {
        "AccountId": "4332b48d-bde6-5ec3-bd6d-f5d62377f528",
        "BeneficiaryId": "999999-99-5414-0999999-01",
        "Reference": {
          "DebtorReference": {
            "Code": "DebtorCode",
            "Particulars": "DebtorPart",
            "Reference": "DebtorRef"
          },
          "CreditorName": "TO_BE_REPLACED",
          "DebtorName": "A beneficiary debtor",
          "CreditorReference": {
            "Reference": "CreditorRef",
            "Code": "CreditorCode",
            "Particulars": "CreditorPart"
          }
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
      },
      {
        "AccountId": "d759723a-8686-5428-9857-ea326c9d5bed",
        "BeneficiaryId": "999999-99-5414-0999999-02",
        "Reference": {
          "CreditorName": "TO_BE_REPLACED",
          "DebtorName": "A beneficiary debtor",
          "CreditorReference": {
            "Code": "CreditorCode",
            "Particulars": "CreditorPart",
            "Reference": "CreditorRef"
          },
          "DebtorReference": {
            "Reference": "DebtorRef",
            "Code": "DebtorCode",
            "Particulars": "DebtorPart"
          }
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
      },
      {
        "AccountId": "9522c6fe-c8f6-507f-b207-97273995b1d2",
        "BeneficiaryId": "999999-99-5414-0999999-03",
        "Reference": {
          "CreditorName": "TO_BE_REPLACED",
          "DebtorName": "A beneficiary debtor",
          "CreditorReference": {
            "Particulars": "CreditorPart",
            "Reference": "CreditorRef",
            "Code": "CreditorCode"
          },
          "DebtorReference": {
            "Particulars": "DebtorPart",
            "Reference": "DebtorRef",
            "Code": "DebtorCode"
          }
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
      },
      {
        "AccountId": "b978be63-1961-5d34-ab91-7805c91c7199",
        "BeneficiaryId": "999999-99-5414-0999999-04",
        "Reference": {
          "CreditorName": "TO_BE_REPLACED",
          "DebtorName": "A beneficiary debtor",
          "CreditorReference": {
            "Particulars": "CreditorPart",
            "Reference": "CreditorRef",
            "Code": "CreditorCode"
          },
          "DebtorReference": {
            "Code": "DebtorCode",
            "Particulars": "DebtorPart",
            "Reference": "DebtorRef"
          }
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
    "Self": "https://mwnz-prod.apigee.net/beneficiaries"
  }
}
```

