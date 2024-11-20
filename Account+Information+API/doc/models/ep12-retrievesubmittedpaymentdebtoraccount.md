
# EP12 Retrievesubmittedpaymentdebtoraccount

## Structure

`EP12Retrievesubmittedpaymentdebtoraccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data29`](../../doc/models/data-29.md) | Required | - |
| `links` | [`Links`](../../doc/models/links.md) | Required | - |
| `meta` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "DebtorAccount": {
      "Identification": "99-7046-5813780-00",
      "SchemeName": "BECSElectronicCredit",
      "Name": "CurrentAccount",
      "SecondaryIdentification": "ID2-99-7046-5813780-00"
    }
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/domestic-payments/62b8068d738f7a0023eb4313/debtor-account"
  },
  "Meta": {}
}
```

