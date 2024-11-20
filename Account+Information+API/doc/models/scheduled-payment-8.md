
# Scheduled Payment 8

## Structure

`ScheduledPayment8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `scheduledPaymentDateTime` | `string` | Required | - |
| `scheduledType` | `string` | Required | - |
| `instructedAmount` | [`InstructedAmount`](../../doc/models/instructed-amount.md) | Required | - |

## Example (as JSON)

```json
{
  "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
  "ScheduledPaymentDateTime": "2019-07-02T05:54:39.948Z",
  "ScheduledType": "Execution",
  "InstructedAmount": {
    "Currency": "NZD",
    "Amount": "10.00"
  }
}
```

