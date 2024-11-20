
# Data 33

## Structure

`Data33`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `initiation` | [`Initiation2`](../../doc/models/initiation-2.md) | Required | - |
| `domesticPaymentId` | `string` | Required | - |
| `statusUpdateDateTime` | `string` | Required | - |
| `creationDateTime` | `string` | Required | - |
| `consentId` | `string` | Required | - |
| `status` | `string` | Required | - |

## Example (as JSON)

```json
{
  "Initiation": {
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
  },
  "DomesticPaymentId": "62b8068d738f7a0023eb4313",
  "StatusUpdateDateTime": "2022-06-26T07:11:09.221Z",
  "CreationDateTime": "2022-06-26T07:11:09.210Z",
  "ConsentId": "epc_62b8067167bb850023437fdf",
  "Status": "AcceptedSettlementCompleted"
}
```

