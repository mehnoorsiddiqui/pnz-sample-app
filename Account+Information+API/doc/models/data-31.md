
# Data 31

## Structure

`Data31`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consent` | [`Consent5`](../../doc/models/consent-5.md) | Required | - |
| `status` | `string` | Required | - |
| `statusUpdateDateTime` | `string` | Required | - |
| `creationDateTime` | `string` | Required | - |
| `consentId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "Consent": {
    "TotalCount": 1,
    "TotalAmount": {
      "Currency": "NZD",
      "Amount": "50.00"
    },
    "DebtorAccountRelease": true,
    "Frequency": {
      "TotalAmount": {
        "Currency": "NZD",
        "Amount": "100.00"
      },
      "Period": "Annual",
      "TotalCount": 2
    },
    "MaximumAmount": {
      "Currency": "NZD",
      "Amount": "100.00"
    },
    "CreditorAccount": [
      {
        "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
        "SchemeName": "BECSElectronicCredit",
        "Identification": "99-3100-0023158-00",
        "Name": "Some name that is long and includes blanks"
      }
    ],
    "DebtorAccount": {
      "Identification": "99-7046-5813780-00",
      "SchemeName": "BECSElectronicCredit",
      "Name": "CurrentAccount",
      "SecondaryIdentification": "ID2-99-7046-5813780-00"
    },
    "FromDateTime": "2017-04-05T10:43:07.000Z"
  },
  "Status": "AwaitingAuthorisation",
  "StatusUpdateDateTime": "2022-06-26T07:10:41.447Z",
  "CreationDateTime": "2022-06-26T07:10:41.447Z",
  "ConsentId": "epc_62b8067167bb850023437fdf"
}
```

