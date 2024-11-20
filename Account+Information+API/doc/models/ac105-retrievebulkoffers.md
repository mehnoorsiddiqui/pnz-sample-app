
# AC105 Retrievebulkoffers

## Structure

`AC105Retrievebulkoffers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data6`](../../doc/models/data-6.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Offer": [
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
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "OfferId": "eaf80aec-e293-57fe-9700-ebbe984f8222",
        "OfferType": "Other",
        "Description": "A description for another offer",
        "StartDateTime": "2019-01-05T10:43:07.000Z",
        "EndDateTime": "2019-04-05T10:43:07.000Z",
        "Fee": {
          "Amount": "200.00",
          "Currency": "NZD"
        },
        "Value": 1,
        "Term": "Further details of the other offer"
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "OfferId": "62906a42-dbbe-555b-b429-9ecb5866f526",
        "OfferType": "PromotionalRate",
        "Description": "A special rate of 4.75 on mortgages over $350,000",
        "StartDateTime": "2018-01-05T10:43:07.000Z",
        "EndDateTime": "2018-04-05T10:43:07.000Z",
        "Fee": {
          "Amount": "250.00",
          "Currency": "NZD"
        },
        "Rate": "4.75",
        "Term": "Fixed for 1 year"
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "OfferId": "8337e670-2888-5a18-a7a7-39cefd11cfb4",
        "OfferType": "BalanceTransfer",
        "Description": "Balance transfer offer up to $2000",
        "StartDateTime": "2018-04-05T10:43:07.000Z",
        "EndDateTime": "2018-05-05T10:43:07.000Z",
        "Amount": {
          "Amount": "2000.00",
          "Currency": "NZD"
        }
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/offers"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```

