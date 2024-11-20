
# Data 78

## Structure

`Data78`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `offer` | [`Offer4[]`](../../doc/models/offer-4.md) | Required | - |

## Example (as JSON)

```json
{
  "Offer": [
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
    },
    {
      "OfferId": "0b1466e3-460c-582f-ac1d-3d7a3ce4bf5b",
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "Description": "Balance transfer offer up to $2000",
      "OfferType": "BalanceTransfer",
      "Amount": {
        "Currency": "NZD",
        "Amount": "2000.00"
      },
      "StartDateTime": "2018-04-05T10:43:07+00:00",
      "EndDateTime": "2018-05-05T10:43:07+00:00"
    },
    {
      "OfferId": "9d65fb02-597b-5ef5-8796-e651afc22637",
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
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
      "OfferId": "fb3e5c69-116e-5c5c-9f49-b90f47184833",
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "Description": "A special rate of 4.75 on mortgages over $350,000",
      "OfferType": "PromotionalRate",
      "Term": "Fixed for 1 year",
      "Fee": {
        "Amount": "250.00",
        "Currency": "NZD"
      },
      "StartDateTime": "2018-01-05T10:43:07+00:00",
      "EndDateTime": "2018-04-05T10:43:07+00:00"
    },
    {
      "OfferId": "bcd3c35d-008c-5623-a872-cafdc0f8ab36",
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
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
    },
    {
      "OfferId": "bf4c1b21-63e2-5b78-b086-44d36d94cbba",
      "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
      "Description": "Balance transfer offer up to $2000",
      "OfferType": "BalanceTransfer",
      "Amount": {
        "Currency": "NZD",
        "Amount": "2000.00"
      },
      "StartDateTime": "2018-04-05T10:43:07+00:00",
      "EndDateTime": "2018-05-05T10:43:07+00:00"
    },
    {
      "OfferId": "006fdf78-66b6-59c6-8d5e-1c1b99673054",
      "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
      "Description": "Credit limit increase for the account up to $10000.00",
      "OfferType": "LimitIncrease",
      "Amount": {
        "Amount": "10000.00",
        "Currency": "NZD"
      },
      "StartDateTime": "2017-04-05T10:43:07+00:00",
      "EndDateTime": "2017-05-05T10:43:07+00:00"
    },
    {
      "OfferId": "9d9dd321-7902-5c17-b940-abc72a3a5028",
      "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
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
      "OfferId": "d706f214-fc26-5ee5-be65-be5ed1cd585d",
      "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
      "Description": "A description for another offer",
      "OfferType": "Other",
      "Term": "Further details of the other offer",
      "Fee": {
        "Currency": "NZD",
        "Amount": "200.00"
      },
      "Value": 1,
      "StartDateTime": "2019-01-05T10:43:07+00:00",
      "EndDateTime": "2019-04-05T10:43:07+00:00"
    },
    {
      "OfferId": "395d6ad6-0b09-5fec-a499-23a9b0a0d073",
      "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
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
      "OfferId": "925da922-c0a9-5cb9-99b8-8c32c898215a",
      "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
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
      "OfferId": "16ac4259-2a74-5d06-ab27-d20ae89fef3f",
      "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
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
      "OfferId": "4a0dd551-facf-5692-b0d2-72215e7ec0af",
      "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
      "Description": "A description for another offer",
      "OfferType": "Other",
      "Term": "Further details of the other offer",
      "Fee": {
        "Currency": "NZD",
        "Amount": "200.00"
      },
      "Value": 1,
      "StartDateTime": "2019-01-05T10:43:07+00:00",
      "EndDateTime": "2019-04-05T10:43:07+00:00"
    },
    {
      "OfferId": "82b1aecd-2da1-50a8-8aee-3347a80b9b16",
      "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
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
      "OfferId": "5d3e3bc9-cf03-5b27-9e8f-8286680c1478",
      "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
      "Description": "Credit limit increase for the account up to $10000.00",
      "OfferType": "LimitIncrease",
      "Amount": {
        "Amount": "10000.00",
        "Currency": "NZD"
      },
      "StartDateTime": "2017-04-05T10:43:07+00:00",
      "EndDateTime": "2017-05-05T10:43:07+00:00"
    },
    {
      "OfferId": "74cff5fc-a223-5982-8564-f72c125b8c42",
      "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
      "Description": "A special rate of 4.75 on mortgages over $350,000",
      "OfferType": "PromotionalRate",
      "Term": "Fixed for 1 year",
      "Fee": {
        "Amount": "250.00",
        "Currency": "NZD"
      },
      "StartDateTime": "2018-01-05T10:43:07+00:00",
      "EndDateTime": "2018-04-05T10:43:07+00:00"
    },
    {
      "OfferId": "ff8612dd-94bf-51e4-9238-afe20a06dc76",
      "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
      "Description": "A description for another offer",
      "OfferType": "Other",
      "Term": "Further details of the other offer",
      "Fee": {
        "Currency": "NZD",
        "Amount": "200.00"
      },
      "Value": 1,
      "StartDateTime": "2019-01-05T10:43:07+00:00",
      "EndDateTime": "2019-04-05T10:43:07+00:00"
    }
  ]
}
```

