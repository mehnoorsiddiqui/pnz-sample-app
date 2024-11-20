
# Statement Model

Provides further details on a statement resource.

## Structure

`StatementModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `statementId` | `string \| undefined` | Optional | Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `statementReference` | `string \| undefined` | Optional | Unique reference for the statement. This reference may be optionally populated if available.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `type` | [`Type3Enum`](../../doc/models/type-3-enum.md) | Required | Statement type, in a coded form. |
| `startDateTime` | `string` | Required | Date and time at which the statement period starts.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `endDateTime` | `string` | Required | Date and time at which the statement period ends.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `creationDateTime` | `string` | Required | Date and time at which the resource was created.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `statementDescription` | `string[] \| undefined` | Optional | Other descriptions that may be available for the statement resource.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500` |
| `statementBenefit` | [`StatementBenefit[] \| undefined`](../../doc/models/statement-benefit.md) | Optional | Set of elements used to provide details of a benefit or reward amount for the statement resource. |
| `statementFee` | [`StatementFee[] \| undefined`](../../doc/models/statement-fee.md) | Optional | Set of elements used to provide details of a fee for the statement resource. |
| `statementInterest` | [`StatementInterest[] \| undefined`](../../doc/models/statement-interest.md) | Optional | Set of elements used to provide details of a generic interest amount related to the statement resource. |
| `statementDateTime` | [`StatementDateTime[] \| undefined`](../../doc/models/statement-date-time.md) | Optional | Set of elements used to provide details of a generic date time for the statement resource. |
| `statementRate` | [`StatementRate[] \| undefined`](../../doc/models/statement-rate.md) | Optional | Set of elements used to provide details of a generic rate related to the statement resource. |
| `statementValue` | [`StatementValue[] \| undefined`](../../doc/models/statement-value.md) | Optional | Set of elements used to provide details of a generic number value related to the statement resource. |
| `statementAmount` | [`StatementAmount[] \| undefined`](../../doc/models/statement-amount.md) | Optional | Set of elements used to provide details of a generic amount for the statement resource. |

## Example (as JSON)

```json
{
  "AccountId": "AccountId6",
  "StatementId": "StatementId2",
  "StatementReference": "StatementReference0",
  "Type": "AccountOpening",
  "StartDateTime": "2016-03-13T12:52:32.123Z",
  "EndDateTime": "2016-03-13T12:52:32.123Z",
  "CreationDateTime": "2016-03-13T12:52:32.123Z",
  "StatementDescription": [
    "StatementDescription8",
    "StatementDescription9",
    "StatementDescription0"
  ],
  "StatementBenefit": [
    {
      "Amount": {
        "Amount": "Amount0",
        "Currency": "Currency6"
      },
      "Type": "Cashback"
    },
    {
      "Amount": {
        "Amount": "Amount0",
        "Currency": "Currency6"
      },
      "Type": "Cashback"
    }
  ],
  "StatementFee": [
    {
      "Amount": {
        "Amount": "Amount0",
        "Currency": "Currency6"
      },
      "CreditDebitIndicator": "Credit",
      "Type": "ForeignTransaction"
    },
    {
      "Amount": {
        "Amount": "Amount0",
        "Currency": "Currency6"
      },
      "CreditDebitIndicator": "Credit",
      "Type": "ForeignTransaction"
    }
  ]
}
```

