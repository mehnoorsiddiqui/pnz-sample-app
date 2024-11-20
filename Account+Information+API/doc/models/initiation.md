
# Initiation

## Structure

`Initiation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `instructedAmount` | [`InstructedAmount`](../../doc/models/instructed-amount.md) | Required | - |
| `instructionIdentification` | `string` | Required | - |
| `remittanceInformation` | [`RemittanceInformation`](../../doc/models/remittance-information.md) | Required | - |
| `creditorAccount` | [`CreditorAccount`](../../doc/models/creditor-account.md) | Required | - |
| `debtorAccountRelease` | `boolean` | Required | - |
| `endToEndIdentification` | `string` | Required | - |
| `creditorAgent` | [`CreditorAgent1`](../../doc/models/creditor-agent-1.md) | Required | - |

## Example (as JSON)

```json
{
  "InstructedAmount": {
    "Amount": "5.00",
    "Currency": "NZD"
  },
  "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
  "RemittanceInformation": {
    "Reference": {
      "CreditorReference": {
        "Reference": "credRef1",
        "Particulars": "credPart1",
        "Code": "credCode1"
      },
      "CreditorName": "CreditorName 123"
    }
  },
  "CreditorAccount": {
    "Identification": "99-3100-0023158-00",
    "SchemeName": "BECSElectronicCredit",
    "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
    "Name": "Some name that is long and includes blanks"
  },
  "DebtorAccountRelease": true,
  "EndToEndIdentification": "7f39b63a-e13e-48d7-ab52-f98028fa8cf3",
  "CreditorAgent": {
    "Identification": "IDXXXXXX",
    "SchemeName": "BICFI"
  }
}
```

