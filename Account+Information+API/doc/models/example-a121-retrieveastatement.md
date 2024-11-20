
# Example A121 Retrieveastatement

## Structure

`ExampleA121Retrieveastatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data166`](../../doc/models/data-166.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "4986e820-b496-5215-b650-2e9fcd65f50b",
        "StatementId": "2865a2d7-5ff9-55b8-9244-fd5bd7cc0cd6",
        "StartDateTime": "2019-04-01T00:00:00.000Z",
        "EndDateTime": "2019-04-30T23:59:59.999Z",
        "CreationDateTime": "2019-05-16T20:04:50.422Z",
        "StatementAmount": [
          {
            "Amount": {
              "Currency": "NZD",
              "Amount": "12.34"
            },
            "CreditDebitIndicator": "Credit",
            "Type": "CurrentPayment"
          },
          {
            "CreditDebitIndicator": "Debit",
            "Type": "CurrentPayment",
            "Amount": {
              "Amount": "24.00",
              "Currency": "NZD"
            }
          }
        ],
        "Type": "RegularPeriodic"
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "https://mwnz-prod.apigee.net/accounts/4986e820-b496-5215-b650-2e9fcd65f50b/statements/2865a2d7-5ff9-55b8-9244-fd5bd7cc0cd6"
  }
}
```

