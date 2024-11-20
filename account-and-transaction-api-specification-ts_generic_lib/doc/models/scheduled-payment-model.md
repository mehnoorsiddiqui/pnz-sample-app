
# Scheduled Payment Model

## Structure

`ScheduledPaymentModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `scheduledPaymentId` | `string \| undefined` | Optional | A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `scheduledPaymentDateTime` | `string` | Required | The date on which the scheduled payment will be made.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `scheduledType` | [`ScheduledTypeEnum`](../../doc/models/scheduled-type-enum.md) | Required | Specifies the scheduled payment date type requested |
| `instructedAmount` | [`InstructedAmount12`](../../doc/models/instructed-amount-12.md) | Required | - |
| `reference` | [`Reference \| undefined`](../../doc/models/reference.md) | Optional | - |
| `creditorAgent` | [`CreditorAgent3 \| undefined`](../../doc/models/creditor-agent-3.md) | Optional | - |
| `creditorAccount` | [`CreditorAccount5 \| undefined`](../../doc/models/creditor-account-5.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "AccountId8",
  "ScheduledPaymentId": "ScheduledPaymentId6",
  "ScheduledPaymentDateTime": "2016-03-13T12:52:32.123Z",
  "ScheduledType": "Arrival",
  "InstructedAmount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  },
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
    "SchemeName": "SchemeName6",
    "Identification": "Identification4"
  },
  "CreditorAccount": {
    "SchemeName": "BECSElectronicCredit",
    "Identification": "Identification2",
    "Name": "Name8",
    "SecondaryIdentification": "SecondaryIdentification4"
  }
}
```

