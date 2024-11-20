
# Beneficiary Model

## Structure

`BeneficiaryModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `beneficiaryId` | `string \| undefined` | Optional | A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `reference` | [`Reference \| undefined`](../../doc/models/reference.md) | Optional | - |
| `creditorAgent` | [`CreditorAgent12 \| undefined`](../../doc/models/creditor-agent-12.md) | Optional | - |
| `creditorAccount` | [`CreditorAccount2 \| undefined`](../../doc/models/creditor-account-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "AccountId4",
  "BeneficiaryId": "BeneficiaryId0",
  "Reference": {
    "CreditorName": "CreditorName6",
    "CreditorReference": {
      "Particulars": "Particulars4",
      "Code": "Code8",
      "Reference": "Reference0"
    },
    "DebtorName": "DebtorName0",
    "DebtorReference": {
      "Particulars": "Particulars8",
      "Code": "Code2",
      "Reference": "Reference4"
    }
  },
  "CreditorAgent": {
    "SchemeName": "BICFI",
    "Identification": "Identification4",
    "Name": "Name4",
    "PostalAddress": {
      "AddressType": "DeliveryTo",
      "AddressLine": [
        "AddressLine3",
        "AddressLine4",
        "AddressLine5"
      ],
      "StreetName": "StreetName2",
      "BuildingNumber": "BuildingNumber6",
      "PostCode": "PostCode6",
      "Country": "Country6"
    }
  },
  "CreditorAccount": {
    "SchemeName": "BECSElectronicCredit",
    "Identification": "Identification2",
    "Name": "Name8",
    "SecondaryIdentification": "SecondaryIdentification4"
  }
}
```

