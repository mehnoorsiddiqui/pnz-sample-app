
# Instructed Amount 1

Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
Usage: This amount has to be transported unchanged through the transaction chain.

## Structure

`InstructedAmount1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `string` | Required | **Constraints**: *Pattern*: `^\d{1,13}\.\d{1,5}$` |
| `currency` | `string` | Required | A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".<br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |

## Example (as JSON)

```json
{
  "Amount": "Amount8",
  "Currency": "Currency4"
}
```

