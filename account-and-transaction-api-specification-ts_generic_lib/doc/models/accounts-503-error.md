
# Accounts 503 Error

## Structure

`Accounts503Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Required | High level textual error code to help categorise the errors.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `id` | `string \| undefined` | Optional | A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `message` | `string` | Required | Brief Error message. E.g., 'There is something wrong with the request parameters provided'<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500` |
| `errors` | [`Error[]`](../../doc/models/error.md) | Required | **Constraints**: *Minimum Items*: `1` |

## Example (as JSON)

```json
{
  "Code": "Code4",
  "Message": "Message0",
  "Errors": [
    {
      "ErrorCode": "Reauthorise",
      "Message": "Message0",
      "Path": "Path2",
      "Url": "Url8"
    }
  ],
  "Id": "Id0"
}
```

