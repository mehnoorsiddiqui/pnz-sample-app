
# Data 80

## Structure

`Data80`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scheduledPayment` | [`ScheduledPayment4[]`](../../doc/models/scheduled-payment-4.md) | Required | - |

## Example (as JSON)

```json
{
  "ScheduledPayment": [
    {
      "AccountId": "39b0736f-e4ec-5bd3-8588-112abe8eb247",
      "ScheduledType": "Arrival",
      "InstructedAmount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "ScheduledPaymentDateTime": "2019-01-06T02:00:00.000Z",
      "CreditorAgent": {
        "Identification": "ABCXYZ3A",
        "SchemeName": "BICFI"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      }
    },
    {
      "AccountId": "b008fbe2-c4b5-551e-97e8-5d4d614b1861",
      "ScheduledType": "Arrival",
      "InstructedAmount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "ScheduledPaymentDateTime": "2019-01-25T02:00:00.000Z",
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      }
    },
    {
      "AccountId": "3b204593-90c8-55dd-9bf3-1507e379dbc3",
      "ScheduledType": "Arrival",
      "InstructedAmount": {
        "Currency": "NZD",
        "Amount": "10.00"
      },
      "ScheduledPaymentDateTime": "2019-01-30T02:00:00.000Z",
      "CreditorAgent": {
        "Identification": "ABCXYZ3A",
        "SchemeName": "BICFI"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      }
    },
    {
      "AccountId": "4d73680c-e4be-51c7-bfba-dfddb8771153",
      "ScheduledType": "Arrival",
      "InstructedAmount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "ScheduledPaymentDateTime": "2019-01-23T02:00:00.000Z",
      "CreditorAgent": {
        "SchemeName": "BICFI",
        "Identification": "ABCXYZ3A"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      }
    },
    {
      "AccountId": "66b1c103-3516-5d23-b32f-57f2d345ac84",
      "ScheduledType": "Execution",
      "InstructedAmount": {
        "Amount": "10.00",
        "Currency": "NZD"
      },
      "ScheduledPaymentDateTime": "2019-02-09T02:00:00.000Z",
      "CreditorAgent": {
        "Identification": "ABCXYZ3A",
        "SchemeName": "BICFI"
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Name": "Just A. Creditor",
        "Identification": "99-1234-1234567-99"
      }
    }
  ]
}
```

