
# Offer Model

## Structure

`OfferModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `offerId` | `string \| undefined` | Optional | A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `offerType` | [`OfferTypeEnum \| undefined`](../../doc/models/offer-type-enum.md) | Optional | Offer type, in a coded form. |
| `description` | `string \| undefined` | Optional | Further details of the offer.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500` |
| `startDateTime` | `string \| undefined` | Optional | Date and time at which the offer starts.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `endDateTime` | `string \| undefined` | Optional | Date and time at which the offer ends.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `amount` | [`Amount42 \| undefined`](../../doc/models/amount-42.md) | Optional | - |
| `fee` | [`Fee2 \| undefined`](../../doc/models/fee-2.md) | Optional | - |
| `rate` | `string \| undefined` | Optional | Rate associated with the offer type.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10`, *Pattern*: `^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$` |
| `value` | `number \| undefined` | Optional | Value associated with the offer type. |
| `term` | `string \| undefined` | Optional | Further details of the term of the offer.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500` |
| `uRL` | `string \| undefined` | Optional | URL (Uniform Resource Locator) where the document can be found<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256` |

## Example (as JSON)

```json
{
  "AccountId": "AccountId4",
  "OfferId": "OfferId6",
  "OfferType": "Other",
  "Description": "Description8",
  "StartDateTime": "2016-03-13T12:52:32.123Z",
  "EndDateTime": "2016-03-13T12:52:32.123Z"
}
```

