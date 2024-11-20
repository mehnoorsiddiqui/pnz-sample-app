
# Example A1110 Retrieveaccountstatements

## Structure

`ExampleA1110Retrieveaccountstatements`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data154`](../../doc/models/data-154.md) | Required | - |
| `meta` | `unknown` | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "StatementId": "15f84bf1-3e2c-59e3-9cc2-c20817e96b14",
        "StartDateTime": "2019-04-01T00:00:00.000Z",
        "EndDateTime": "2019-04-30T23:59:59.999Z",
        "CreationDateTime": "2019-05-13T05:54:39.948Z",
        "Type": "RegularPeriodic"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "StatementId": "0a1230a6-89d2-572d-a207-b7a744a6e2d0",
        "StartDateTime": "2019-03-01T00:00:00.000Z",
        "EndDateTime": "2019-03-31T23:59:59.999Z",
        "CreationDateTime": "2019-05-13T05:54:39.948Z",
        "Type": "RegularPeriodic"
      },
      {
        "AccountId": "766e7658-0b56-5fd3-bc7f-58a7653d7bdb",
        "StatementId": "fcd85094-76b5-5c5b-8c54-d269083e96b2",
        "StartDateTime": "2019-02-01T00:00:00.000Z",
        "EndDateTime": "2019-02-28T23:59:59.999Z",
        "CreationDateTime": "2019-05-13T05:54:39.948Z",
        "Type": "RegularPeriodic"
      }
    ]
  },
  "Meta": {},
  "Links": {
    "Self": "/accounts/766e7658-0b56-5fd3-bc7f-58a7653d7bdb/statements"
  }
}
```

