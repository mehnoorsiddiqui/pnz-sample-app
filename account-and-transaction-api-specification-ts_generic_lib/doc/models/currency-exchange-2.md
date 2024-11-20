
# Currency Exchange 2

## Structure

`CurrencyExchange2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sourceCurrency` | `string` | Required | Currency from which an amount is to be converted in a currency conversion.<br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `targetCurrency` | `string \| undefined` | Optional | Currency from which an amount is to be converted in a currency conversion.<br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `unitCurrency` | `string \| undefined` | Optional | Currency from which an amount is to be converted in a currency conversion.<br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `exchangeRate` | `number` | Required | Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency.<br>Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency). |
| `contractIdentification` | `string \| undefined` | Optional | Unique identification to unambiguously identify the foreign exchange contract.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `35` |
| `quotationDate` | `string \| undefined` | Optional | Date and time at which an exchange rate is quoted.<br>All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00 |
| `instructedAmount` | [`InstructedAmount3 \| undefined`](../../doc/models/instructed-amount-3.md) | Optional | - |

## Example (as JSON)

```json
{
  "SourceCurrency": "SourceCurrency8",
  "TargetCurrency": "TargetCurrency6",
  "UnitCurrency": "UnitCurrency4",
  "ExchangeRate": 201.3,
  "ContractIdentification": "ContractIdentification8",
  "QuotationDate": "2016-03-13T12:52:32.123Z",
  "InstructedAmount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  }
}
```

