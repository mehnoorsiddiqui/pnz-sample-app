
# Data 81

## Structure

`Data81`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `standingOrder` | [`StandingOrder4[]`](../../doc/models/standing-order-4.md) | Required | - |

## Example (as JSON)

```json
{
  "StandingOrder": [
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "StandingOrderId": "9999999-99-1810-5604739-00",
      "Frequency": "EvryDay",
      "NextPaymentDateTime": "2019-01-15T02:00:00.000Z",
      "NextPaymentAmount": {
        "Amount": "5.00",
        "Currency": "NZD"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      }
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "StandingOrderId": "9999999-99-1810-5604739-01",
      "Frequency": "EvryDay",
      "NextPaymentDateTime": "2019-01-15T02:00:00.000Z",
      "NextPaymentAmount": {
        "Amount": "5.00",
        "Currency": "NZD"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      }
    },
    {
      "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
      "StandingOrderId": "9999999-99-1810-5604739-02",
      "Frequency": "EvryDay",
      "NextPaymentDateTime": "2019-01-15T02:00:00.000Z",
      "NextPaymentAmount": {
        "Currency": "NZD",
        "Amount": "5.00"
      },
      "CreditorAccount": {
        "Identification": "99-1234-1234567-99",
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor"
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      }
    },
    {
      "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
      "StandingOrderId": "9999999-99-1810-5604739-03",
      "Frequency": "EvryDay",
      "NextPaymentDateTime": "2019-01-15T02:00:00.000Z",
      "NextPaymentAmount": {
        "Currency": "NZD",
        "Amount": "5.00"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      }
    },
    {
      "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
      "StandingOrderId": "9999999-99-1810-5604739-04",
      "Frequency": "EvryDay",
      "NextPaymentDateTime": "2019-01-15T02:00:00.000Z",
      "NextPaymentAmount": {
        "Currency": "NZD",
        "Amount": "5.00"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      },
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      }
    }
  ]
}
```

