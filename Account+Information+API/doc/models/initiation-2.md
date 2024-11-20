
# Initiation 2

## Structure

`Initiation2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `endToEndIdentification` | `string` | Required | - |
| `remittanceInformation` | [`RemittanceInformation`](../../doc/models/remittance-information.md) | Required | - |
| `creditorAgent` | [`CreditorAgent1`](../../doc/models/creditor-agent-1.md) | Required | - |
| `debtorAccountRelease` | `boolean` | Required | - |
| `instructionIdentification` | `string` | Required | - |
| `instructedAmount` | [`InstructedAmount`](../../doc/models/instructed-amount.md) | Required | - |
| `debtorAccount` | [`DebtorAccount3`](../../doc/models/debtor-account-3.md) | Required | - |
| `creditorAccount` | [`CreditorAccount`](../../doc/models/creditor-account.md) | Required | - |

## Example (as JSON)

```json
{
  "EndToEndIdentification": "7f39b63a-e13e-48d7-ab52-f98028fa8cf3",
  "RemittanceInformation": {
    "Reference": {
      "CreditorReference": {
        "Reference": "credRef1",
        "Code": "credCode1",
        "Particulars": "credPart1"
      },
      "CreditorName": "CreditorName 123"
    }
  },
  "CreditorAgent": {
    "SchemeName": "BICFI",
    "Identification": "IDXXXXXX"
  },
  "DebtorAccountRelease": true,
  "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
  "InstructedAmount": {
    "Currency": "NZD",
    "Amount": "25.00"
  },
  "DebtorAccount": {
    "Identification": "99-7046-5813780-00",
    "SchemeName": "BECSElectronicCredit",
    "Name": "CurrentAccount",
    "SecondaryIdentification": "ID2-99-7046-5813780-00"
  },
  "CreditorAccount": {
    "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
    "SchemeName": "BECSElectronicCredit",
    "Identification": "99-3100-0023158-00",
    "Name": "Some name that is long and includes blanks"
  }
}
```

