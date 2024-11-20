
# AC117 Retrieveaccountscheduledpayments 2

## Structure

`AC117Retrieveaccountscheduledpayments2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data80`](../../doc/models/data-80.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
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
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/accounts/39b0736f-e4ec-5bd3-8588-112abe8eb247/scheduled-payments"
  }
}
```

