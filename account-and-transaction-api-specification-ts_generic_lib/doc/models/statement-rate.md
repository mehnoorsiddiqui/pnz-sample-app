
# Statement Rate

Set of elements used to provide details of a generic rate related to the statement resource.

## Structure

`StatementRate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rate` | `string` | Required | Rate associated with the statement rate type.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10`, *Pattern*: `^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$` |
| `type` | [`Type8Enum`](../../doc/models/type-8-enum.md) | Required | Statement rate type, in a coded form. |

## Example (as JSON)

```json
{
  "Rate": "Rate2",
  "Type": "AnnualBalanceTransfer"
}
```

