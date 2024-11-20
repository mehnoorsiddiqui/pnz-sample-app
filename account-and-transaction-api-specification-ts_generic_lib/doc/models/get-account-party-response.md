
# Get Account Party Response

## Structure

`GetAccountPartyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data8`](../../doc/models/data-8.md) | Required | - |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Party": {
      "PartyId": "PartyId4",
      "PartyNumber": "PartyNumber8",
      "PartyType": "Joint",
      "Name": "Name6",
      "EmailAddress": "EmailAddress2",
      "Phone": "Phone8"
    }
  },
  "Links": {
    "Self": "Self2",
    "First": "First0",
    "Prev": "Prev6",
    "Next": "Next0",
    "Last": "Last4"
  },
  "Meta": {
    "TotalPages": 96,
    "FirstAvailableDateTime": "2016-03-13T12:52:32.123Z",
    "LastAvailableDateTime": "2016-03-13T12:52:32.123Z"
  }
}
```

