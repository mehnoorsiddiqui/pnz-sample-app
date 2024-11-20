
# Data 25

## Structure

`Data25`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consent` | [`Consent2`](../../doc/models/consent-2.md) | Required | - |
| `status` | `string` | Required | - |
| `statusUpdateDateTime` | `string` | Required | - |
| `creationDateTime` | `string` | Required | - |
| `consentId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "Consent": {
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
  "Status": "AwaitingAuthorisation",
  "StatusUpdateDateTime": "2022-06-26T07:07:06.594Z",
  "CreationDateTime": "2022-06-26T07:07:06.594Z",
  "ConsentId": "dpc_62b8059adf442a002301c181"
}
```

