
# Account Access Consent Response Model

## Structure

`AccountAccessConsentResponseModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consentId` | `string` | Required | Unique identification as assigned to identify the account access consent.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `status` | [`StatusEnum`](../../doc/models/status-enum.md) | Required | Specifies the status of the account access consent. |
| `creationDateTime` | `string` | Required | Date and time at which the consent was created.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `statusUpdateDateTime` | `string` | Required | Date and time at which the consent status was updated.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `consent` | [`Consent1`](../../doc/models/consent-1.md) | Required | - |

## Example (as JSON)

```json
{
  "ConsentId": "ConsentId2",
  "Status": "Authorised",
  "CreationDateTime": "2016-03-13T12:52:32.123Z",
  "StatusUpdateDateTime": "2016-03-13T12:52:32.123Z",
  "Consent": {
    "Permissions": [
      "ReadStandingOrdersDetail"
    ],
    "ExpirationDateTime": "2016-03-13T12:52:32.123Z",
    "TransactionFromDateTime": "2016-03-13T12:52:32.123Z",
    "TransactionToDateTime": "2016-03-13T12:52:32.123Z"
  }
}
```

