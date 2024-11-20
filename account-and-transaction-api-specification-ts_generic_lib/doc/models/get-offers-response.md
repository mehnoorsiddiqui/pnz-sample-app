
# Get Offers Response

## Structure

`GetOffersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data7`](../../doc/models/data-7.md) | Required | - |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Offer": [
      {
        "AccountId": "AccountId2",
        "OfferId": "OfferId4",
        "OfferType": "LimitIncrease",
        "Description": "Description4",
        "StartDateTime": "2016-03-13T12:52:32.123Z",
        "EndDateTime": "2016-03-13T12:52:32.123Z"
      },
      {
        "AccountId": "AccountId2",
        "OfferId": "OfferId4",
        "OfferType": "LimitIncrease",
        "Description": "Description4",
        "StartDateTime": "2016-03-13T12:52:32.123Z",
        "EndDateTime": "2016-03-13T12:52:32.123Z"
      },
      {
        "AccountId": "AccountId2",
        "OfferId": "OfferId4",
        "OfferType": "LimitIncrease",
        "Description": "Description4",
        "StartDateTime": "2016-03-13T12:52:32.123Z",
        "EndDateTime": "2016-03-13T12:52:32.123Z"
      }
    ]
  },
  "Links": {
    "Self": "Self2",
    "First": "First0",
    "Prev": "Prev6",
    "Next": "Next0",
    "Last": "Last4"
  },
  "Meta": {
    "TotalPages": 96,
    "FirstAvailableDateTime": "2016-03-13T12:52:32.123Z",
    "LastAvailableDateTime": "2016-03-13T12:52:32.123Z"
  }
}
```

