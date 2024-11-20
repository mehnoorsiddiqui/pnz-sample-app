
# EP12 Retrievesubmittedpaymentdebtoraccount 2

## Structure

`EP12Retrievesubmittedpaymentdebtoraccount2`

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
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.1/domestic-payments/83f3b289-0bb7-4e2d-b9ec-545d7230840c/debtor-account"
  },
  "Meta": {}
}
```

