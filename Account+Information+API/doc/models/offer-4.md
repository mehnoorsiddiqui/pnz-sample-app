
# Offer 4

## Structure

`Offer4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `offerId` | `string` | Required | - |
| `accountId` | `string` | Required | - |
| `description` | `string` | Required | - |
| `offerType` | `string` | Required | - |
| `amount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | - |
| `startDateTime` | `string` | Required | - |
| `endDateTime` | `string` | Required | - |
| `term` | `string \| undefined` | Optional | - |
| `fee` | [`Fee \| undefined`](../../doc/models/fee.md) | Optional | - |
| `value` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "OfferId": "d1ec937a-8cd7-55cd-a50a-8d6e897105e1",
  "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
  "Description": "Balance transfer offer up to $2000",
  "OfferType": "BalanceTransfer",
  "Amount": {
    "Currency": "NZD",
    "Amount": "2000.00"
  },
  "StartDateTime": "2018-04-05T10:43:07+00:00",
  "EndDateTime": "2018-05-05T10:43:07+00:00"
}
```

