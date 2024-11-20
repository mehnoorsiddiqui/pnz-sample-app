
# Beneficiary 4

## Structure

`Beneficiary4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beneficiaryId` | `string` | Required | - |
| `reference` | [`Reference`](../../doc/models/reference.md) | Required | - |
| `creditorAccount` | [`CreditorAccount1`](../../doc/models/creditor-account-1.md) | Required | - |
| `creditorAgent` | [`CreditorAgent1`](../../doc/models/creditor-agent-1.md) | Required | - |

## Example (as JSON)

```json
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
}
```

