
# Account Access Consent Model

## Structure

`AccountAccessConsentModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consent` | [`Consent1`](../../doc/models/consent-1.md) | Required | - |

## Example (as JSON)

```json
{
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

