
# Creditor Agent

## Structure

`CreditorAgent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeName` | `string` | Required | - |
| `identification` | `string` | Required | - |
| `name` | `string` | Required | - |
| `postalAddress` | [`PostalAddress`](../../doc/models/postal-address.md) | Required | - |

## Example (as JSON)

```json
{
  "SchemeName": "BICFI",
  "Identification": "ABCXYZ3A",
  "Name": "A Credit Agent",
  "PostalAddress": {
    "Country": "NZ",
    "AddressLine": [
      "AddressLine1"
    ],
    "AddressType": "Business",
    "StreetName": "StreetName",
    "BuildingNumber": "BuildingNumber",
    "PostCode": "PostCode",
    "TownName": "TownName",
    "CountrySubDivision": "CountrySubDivision"
  }
}
```

