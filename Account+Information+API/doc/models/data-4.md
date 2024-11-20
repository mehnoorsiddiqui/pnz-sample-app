
# Data 4

## Structure

`Data4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beneficiary` | [`Beneficiary[]`](../../doc/models/beneficiary.md) | Required | - |

## Example (as JSON)

```json
{
  "Beneficiary": [
    {
      "AccountId": "OBA-99-7046-5813780-00",
      "BeneficiaryId": "ceb935df-fe63-5918-92c9-c7059a312e4a",
      "Reference": {
        "CreditorName": "Just A. Creditor",
        "DebtorName": "A beneficiary debtor",
        "CreditorReference": {
          "Particulars": "CreditorPart",
          "Code": "CreditorCode",
          "Reference": "CreditorRef"
        },
        "DebtorReference": {
          "Particulars": "DebtorPart",
          "Code": "DebtorCode",
          "Reference": "DebtorRef"
        }
      },
      "CreditorAgent": {
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
      },
      "CreditorAccount": {
        "SchemeName": "BECSElectronicCredit",
        "Identification": "99-1234-1234567-99",
        "Name": "Just A. Creditor",
        "SecondaryIdentification": "0b580eb3ae605f308d7f8064537deb45"
      }
    }
  ]
}
```

