
# AC115 Retrieveaccountoffers 2

## Structure

`AC115Retrieveaccountoffers2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data78`](../../doc/models/data-78.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Offer": [
      {
        "OfferId": "d1ec937a-8cd7-55cd-a50a-8d6e897105e1",
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "Description": "Balance transfer offer up to $2000",
        "OfferType": "BalanceTransfer",
        "Amount": {
          "Amount": "2000.00",
          "Currency": "NZD"
        },
        "StartDateTime": "2018-04-05T10:43:07+00:00",
        "EndDateTime": "2018-05-05T10:43:07+00:00"
      },
      {
        "OfferId": "47c64abc-3726-549a-a8de-74344170ff56",
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "Description": "Credit limit increase for the account up to $10000.00",
        "OfferType": "LimitIncrease",
        "Amount": {
          "Currency": "NZD",
          "Amount": "10000.00"
        },
        "StartDateTime": "2017-04-05T10:43:07+00:00",
        "EndDateTime": "2017-05-05T10:43:07+00:00"
      },
      {
        "OfferId": "816f4101-c62d-50d1-92d3-c327e06e40c7",
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "Description": "A special rate of 4.75 on mortgages over $350,000",
        "OfferType": "PromotionalRate",
        "Term": "Fixed for 1 year",
        "Fee": {
          "Currency": "NZD",
          "Amount": "250.00"
        },
        "StartDateTime": "2018-01-05T10:43:07+00:00",
        "EndDateTime": "2018-04-05T10:43:07+00:00"
      },
      {
        "OfferId": "79a1961d-fdb7-5338-a0bd-ebadb7673bb7",
        "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
        "Description": "A description for another offer",
        "OfferType": "Other",
        "Term": "Further details of the other offer",
        "Fee": {
          "Amount": "200.00",
          "Currency": "NZD"
        },
        "Value": 1,
        "StartDateTime": "2019-01-05T10:43:07+00:00",
        "EndDateTime": "2019-04-05T10:43:07+00:00"
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts/39b0736f-e4ec-5bd3-8588-112abe8eb247/offers"
  }
}
```

