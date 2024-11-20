
# Data 171

## Structure

`Data171`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `initiation` | [`Initiation16`](../../doc/models/initiation-16.md) | Required | - |
| `creationDateTime` | `string` | Required | - |
| `paymentId` | `string` | Required | - |
| `status` | `string` | Required | - |
| `paymentSubmissionId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "Initiation": {
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
          "Particulars": "credPart1",
          "Reference": "credRef1",
          "Code": "credCode1"
        }
      }
    },
    "InstructionIdentification": "8902dac9-51c4-40be-b41a-c3d36d42707c",
    "InstructedAmount": {
      "Amount": "5.00",
      "Currency": "NZD"
    }
  },
  "CreationDateTime": "2019-05-27T04:52:09.000Z",
  "PaymentId": "fd8a61d6-6317-4bad-b273-29ce09ee3207",
  "Status": "AcceptedSettlementInProcess",
  "PaymentSubmissionId": "e9672b90-25f9-4f14-af6f-e8a20e63522b"
}
```

