
# DP12 Retrievesubmittedpaymentdebtoraccount 2

## Structure

`DP12Retrievesubmittedpaymentdebtoraccount2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data101`](../../doc/models/data-101.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "DebtorAccount": {
      "SchemeName": "BECSElectronicCredit",
      "Name": "CurrentAccount",
      "Identification": "99-1810-5604739-00"
    }
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/domestic-payments/a860540f-8beb-4f3c-bd8f-4768bd9387f0/debtor-account"
  },
  "Meta": {}
}
```

