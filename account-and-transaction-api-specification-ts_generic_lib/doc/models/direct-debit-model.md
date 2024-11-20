
# Direct Debit Model

## Structure

`DirectDebitModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `directDebitId` | `string \| undefined` | Optional | A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `mandateIdentification` | `string` | Required | Direct Debit reference.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `directDebitStatusCode` | [`DirectDebitStatusCodeEnum \| undefined`](../../doc/models/direct-debit-status-code-enum.md) | Optional | Specifies the status of the direct debit in code form. |
| `name` | `string` | Required | Name of Service User<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `previousPaymentDateTime` | `string \| undefined` | Optional | Date of most recent direct debit collection.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `previousPaymentAmount` | [`PreviousPaymentAmount2 \| undefined`](../../doc/models/previous-payment-amount-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "AccountId6",
  "DirectDebitId": "DirectDebitId4",
  "MandateIdentification": "MandateIdentification0",
  "DirectDebitStatusCode": "Active",
  "Name": "Name4",
  "PreviousPaymentDateTime": "2016-03-13T12:52:32.123Z",
  "PreviousPaymentAmount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  }
}
```

