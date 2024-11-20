
# Standing Order Model

## Structure

`StandingOrderModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `standingOrderId` | `string \| undefined` | Optional | A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `frequency` | `string` | Required | EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)<br><br>Patterns:<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br><br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>EvryDay<br>EvryWorkgDay<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01])<br>**Constraints**: *Pattern*: `^(EvryDay)$\|^(EvryWorkgDay)$\|^(IntrvlWkDay:0[1-9]:0[1-7])$\|^(WkInMnthDay:0[1-5]:0[1-7])$\|^(IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01]))$` |
| `reference` | [`Reference \| undefined`](../../doc/models/reference.md) | Optional | - |
| `firstPaymentDateTime` | `string \| undefined` | Optional | The date on which the first payment for a Standing Order schedule will be made.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `firstPaymentAmount` | [`FirstPaymentAmount2 \| undefined`](../../doc/models/first-payment-amount-2.md) | Optional | - |
| `nextPaymentDateTime` | `string` | Required | The date on which the next payment for a Standing Order schedule will be made.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `nextPaymentAmount` | [`NextPaymentAmount2`](../../doc/models/next-payment-amount-2.md) | Required | - |
| `finalPaymentDateTime` | `string \| undefined` | Optional | The date on which the final payment for a Standing Order schedule will be made.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `finalPaymentAmount` | [`FinalPaymentAmount2 \| undefined`](../../doc/models/final-payment-amount-2.md) | Optional | - |
| `standingOrderStatusCode` | [`StandingOrderStatusCodeEnum \| undefined`](../../doc/models/standing-order-status-code-enum.md) | Optional | Specifies the status of the standing order in code form. |
| `creditorAgent` | [`CreditorAgent22 \| undefined`](../../doc/models/creditor-agent-22.md) | Optional | - |
| `creditorAccount` | [`CreditorAccount2 \| undefined`](../../doc/models/creditor-account-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "AccountId6",
  "StandingOrderId": "StandingOrderId0",
  "Frequency": "Frequency8",
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
  "FirstPaymentDateTime": "2016-03-13T12:52:32.123Z",
  "FirstPaymentAmount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  },
  "NextPaymentDateTime": "2016-03-13T12:52:32.123Z",
  "NextPaymentAmount": {
    "Amount": "Amount6",
    "Currency": "Currency2"
  },
  "FinalPaymentDateTime": "2016-03-13T12:52:32.123Z"
}
```

