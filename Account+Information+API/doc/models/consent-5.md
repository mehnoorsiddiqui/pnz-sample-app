
# Consent 5

## Structure

`Consent5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalCount` | `number` | Required | - |
| `totalAmount` | [`TotalAmount`](../../doc/models/total-amount.md) | Required | - |
| `debtorAccountRelease` | `boolean` | Required | - |
| `frequency` | [`Frequency`](../../doc/models/frequency.md) | Required | - |
| `maximumAmount` | [`MaximumAmount`](../../doc/models/maximum-amount.md) | Required | - |
| `creditorAccount` | [`CreditorAccount[]`](../../doc/models/creditor-account.md) | Required | - |
| `debtorAccount` | [`DebtorAccount3`](../../doc/models/debtor-account-3.md) | Required | - |
| `fromDateTime` | `string` | Required | - |

## Example (as JSON)

```json
{
  "TotalCount": 1,
  "TotalAmount": {
    "Currency": "NZD",
    "Amount": "50.00"
  },
  "DebtorAccountRelease": true,
  "Frequency": {
    "TotalAmount": {
      "Currency": "NZD",
      "Amount": "100.00"
    },
    "Period": "Annual",
    "TotalCount": 2
  },
  "MaximumAmount": {
    "Currency": "NZD",
    "Amount": "100.00"
  },
  "CreditorAccount": [
    {
      "SecondaryIdentification": "d88f76df-2a33-47fc-a818-7c1bd8a3fd",
      "SchemeName": "BECSElectronicCredit",
      "Identification": "99-3100-0023158-00",
      "Name": "Some name that is long and includes blanks"
    }
  ],
  "DebtorAccount": {
    "Identification": "{{PNZ-E-AccountNumber}}",
    "SchemeName": "BECSElectronicCredit",
    "Name": "CurrentAccount",
    "SecondaryIdentification": "ID2-{{PNZ-E-AccountNumber}}"
  },
  "FromDateTime": "2017-04-05T10:43:07+00:00"
}
```

