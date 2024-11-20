
# Balance Model

Balance object schema

## Structure

`BalanceModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `amount` | [`Amount10`](../../doc/models/amount-10.md) | Required | - |
| `creditDebitIndicator` | [`CreditDebitIndicatorEnum`](../../doc/models/credit-debit-indicator-enum.md) | Required | Indicates whether the balance is a credit or a debit balance. Usage: A zero balance is considered to be a credit balance. |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Balance type, in a coded form. |
| `dateTime` | `string` | Required | Indicates the date (and time) of the balance.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `creditLine` | [`CreditLine[] \| undefined`](../../doc/models/credit-line.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "AccountId2",
  "Amount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  },
  "CreditDebitIndicator": "Credit",
  "Type": "Expected",
  "DateTime": "2016-03-13T12:52:32.123Z",
  "CreditLine": [
    {
      "Included": false,
      "Amount": {
        "Amount": "Amount0",
        "Currency": "Currency6"
      },
      "Type": "Temporary"
    }
  ]
}
```

