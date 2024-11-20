
# Offer

## Structure

`Offer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `offerId` | `string` | Required | - |
| `offerType` | `string` | Required | - |
| `description` | `string` | Required | - |
| `startDateTime` | `string` | Required | - |
| `endDateTime` | `string` | Required | - |
| `amount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | - |
| `fee` | [`Fee \| undefined`](../../doc/models/fee.md) | Optional | - |
| `value` | `number \| undefined` | Optional | - |
| `term` | `string \| undefined` | Optional | - |
| `rate` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": "OBA-99-7046-5813780-00",
  "OfferId": "71800a96-f483-5468-a6f7-3eff1ee7b4c4",
  "OfferType": "LimitIncrease",
  "Description": "Credit limit increase for the account up to $10000.00",
  "StartDateTime": "2017-04-05T10:43:07.000Z",
  "EndDateTime": "2017-05-05T10:43:07.000Z",
  "Amount": {
    "Amount": "10000.00",
    "Currency": "NZD"
  }
}
```

