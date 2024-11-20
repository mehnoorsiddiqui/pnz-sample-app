
# Creditor Agent 1

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
This is the servicer of the beneficiary account.

## Structure

`CreditorAgent1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeName` | [`SchemeNameEnum \| undefined`](../../doc/models/scheme-name-enum.md) | Optional | Name of the identification scheme, in a coded form as published in an external list. |
| `identification` | `string \| undefined` | Optional | Unique and unambiguous identification of the servicing institution.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `name` | `string \| undefined` | Optional | Name by which an agent is known and which is usually used to identify that agent.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `140` |
| `postalAddress` | [`PostalAddress2 \| undefined`](../../doc/models/postal-address-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "SchemeName": "BICFI",
  "Identification": "Identification8",
  "Name": "Name2",
  "PostalAddress": {
    "AddressType": "DeliveryTo",
    "AddressLine": [
      "AddressLine3",
      "AddressLine4",
      "AddressLine5"
    ],
    "StreetName": "StreetName2",
    "BuildingNumber": "BuildingNumber6",
    "PostCode": "PostCode6",
    "Country": "Country6"
  }
}
```

