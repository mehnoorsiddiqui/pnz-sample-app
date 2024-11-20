
# Data 169

## Structure

`Data169`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `initiation` | [`Initiation16`](../../doc/models/initiation-16.md) | Required | - |
| `creationDateTime` | `string` | Required | - |
| `paymentId` | `string` | Required | - |
| `status` | `string` | Required | - |

## Example (as JSON)

```json
{
  "Initiation": {
    "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
    "InstructedAmount": {
      "Currency": "NZD",
      "Amount": "5.00"
    },
    "CreditorAgent": {
      "Identification": "IDXXXXXX",
      "SchemeName": "BICFI"
    },
    "EndToEndIdentification": "7f39b63a-e13e-48d7-ab52-f98028fa8cf3",
    "CreditorAccount": {
      "Identification": "99-3100-0023158-00",
      "SchemeName": "BECSElectronicCredit",
      "Name": "Some name that is long and includes blanks",
      "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd"
    },
    "RemittanceInformation": {
      "Reference": {
        "CreditorName": "CreditorName 123",
        "CreditorReference": {
          "Code": "credCode1",
          "Particulars": "credPart1",
          "Reference": "credRef1"
        }
      }
    }
  },
  "CreationDateTime": "2019-05-27T04:47:30.000Z",
  "PaymentId": "fd8a61d6-6317-4bad-b273-29ce09ee3207",
  "Status": "AcceptedTechnicalValidation"
}
```

