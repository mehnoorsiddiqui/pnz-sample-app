
# Card Instrument 2

## Structure

`CardInstrument2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardSchemeName` | [`CardSchemeNameEnum`](../../doc/models/card-scheme-name-enum.md) | Required | Name of the card scheme. |
| `authorisationType` | [`AuthorisationTypeEnum \| undefined`](../../doc/models/authorisation-type-enum.md) | Optional | The card authorisation type. |
| `name` | `string \| undefined` | Optional | Name of the cardholder using the card instrument.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `identification` | `string \| undefined` | Optional | Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `34` |

## Example (as JSON)

```json
{
  "CardSchemeName": "AmericanExpress",
  "AuthorisationType": "PIN",
  "Name": "Name4",
  "Identification": "Identification6"
}
```

