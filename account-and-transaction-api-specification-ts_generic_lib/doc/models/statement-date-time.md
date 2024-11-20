
# Statement Date Time

Set of elements used to provide details of a generic date time for the statement resource.

## Structure

`StatementDateTime`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateTime` | `string` | Required | Date and time associated with the date time type.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `type` | [`Type7Enum`](../../doc/models/type-7-enum.md) | Required | Date time type, in a coded form. |

## Example (as JSON)

```json
{
  "DateTime": "2016-03-13T12:52:32.123Z",
  "Type": "LastPayment"
}
```

