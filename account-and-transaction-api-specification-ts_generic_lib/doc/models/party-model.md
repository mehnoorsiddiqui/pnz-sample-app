
# Party Model

## Structure

`PartyModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partyId` | `string` | Required | A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `partyNumber` | `string \| undefined` | Optional | Number assigned by an agent to identify its customer.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `partyType` | [`PartyTypeEnum \| undefined`](../../doc/models/party-type-enum.md) | Optional | Party type, in a coded form. |
| `name` | `string \| undefined` | Optional | Name by which a party is known and which is usually used to identify that party.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `emailAddress` | `string \| undefined` | Optional | Address for electronic mail (e-mail).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256` |
| `phone` | `string \| undefined` | Optional | Collection of information that identifies a phone number, as defined by telecom services.<br>**Constraints**: *Pattern*: `\+[0-9]{1,3}-[0-9()+\-]{1,30}` |
| `mobile` | `string \| undefined` | Optional | Collection of information that identifies a mobile phone number, as defined by telecom services.<br>**Constraints**: *Pattern*: `\+[0-9]{1,3}-[0-9()+\-]{1,30}` |
| `address` | [`Address[] \| undefined`](../../doc/models/address.md) | Optional | Postal address of a party. |

## Example (as JSON)

```json
{
  "PartyId": "PartyId2",
  "PartyNumber": "PartyNumber2",
  "PartyType": "Joint",
  "Name": "Name0",
  "EmailAddress": "EmailAddress6",
  "Phone": "Phone8"
}
```

