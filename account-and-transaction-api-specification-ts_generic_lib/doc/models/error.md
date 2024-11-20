
# Error

## Structure

`Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | [`ErrorCodeEnum`](../../doc/models/error-code-enum.md) | Required | Low level textual error code. |
| `message` | `string` | Required | A free text description of the error that occurred. E.g., 'A mandatory field isn't supplied'.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500` |
| `path` | `string \| undefined` | Optional | A recommended but optional reference to the JSON Path of the field with error, e.g., Data.Consent.InstructedAmount.Currency<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500` |
| `url` | `string \| undefined` | Optional | URL to help remediate the problem, provide more information or to API Reference. |

## Example (as JSON)

```json
{
  "ErrorCode": "Reauthorise",
  "Message": "Message0",
  "Path": "Path2",
  "Url": "Url8"
}
```

