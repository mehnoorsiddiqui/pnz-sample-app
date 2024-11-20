
# Data 27

## Structure

`Data27`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `initiation` | [`Initiation`](../../doc/models/initiation.md) | Required | - |
| `domesticPaymentId` | `string` | Required | - |
| `statusUpdateDateTime` | `string` | Required | - |
| `creationDateTime` | `string` | Required | - |
| `consentId` | `string` | Required | - |
| `status` | `string` | Required | - |

## Example (as JSON)

```json
{
  "Initiation": {
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
  },
  "DomesticPaymentId": "62b805b9bbe48e0023fc704f",
  "StatusUpdateDateTime": "2022-06-26T07:07:37.879Z",
  "CreationDateTime": "2022-06-26T07:07:37.855Z",
  "ConsentId": "dpc_62b8059adf442a002301c181",
  "Status": "AcceptedSettlementCompleted"
}
```

