
# Statement Value

Set of elements used to provide details of a generic number value related to the statement resource.

## Structure

`StatementValue`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `number` | Required | Value associated with the statement value type. |
| `type` | [`Type9Enum`](../../doc/models/type-9-enum.md) | Required | Statement value type, in a coded form. |

## Example (as JSON)

```json
{
  "Value": 184,
  "Type": "Credits"
}
```

