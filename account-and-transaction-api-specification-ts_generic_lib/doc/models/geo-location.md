
# Geo Location

Location of the end-user on the earth specified by two numbers representing vertical and horizontal position

## Structure

`GeoLocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `string \| undefined` | Optional | Latitude measured in decimal degress<br>**Constraints**: *Maximum Length*: `14`, *Pattern*: `^-?\d{1,3}\.\d{1,8}$` |
| `longitude` | `string \| undefined` | Optional | Longitude measured in decimal degress<br>**Constraints**: *Maximum Length*: `14`, *Pattern*: `^-?\d{1,3}\.\d{1,8}$` |

## Example (as JSON)

```json
{
  "Latitude": "Latitude0",
  "Longitude": "Longitude8"
}
```

