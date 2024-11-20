
# Fee

Fee associated with the offer type.

## Structure

`Fee`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `string` | Required | **Constraints**: *Pattern*: `^\d{1,13}\.\d{1,5}$` |
| `currency` | `string` | Required | A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".<br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |

## Example (as JSON)

```json
{
  "Amount": "Amount0",
  "Currency": "Currency6"
}
```

