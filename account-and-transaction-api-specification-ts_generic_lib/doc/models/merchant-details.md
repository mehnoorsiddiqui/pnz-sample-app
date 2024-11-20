
# Merchant Details

Details of the merchant involved in the transaction.

## Structure

`MerchantDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantName` | `string \| undefined` | Optional | Name by which the merchant is known.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `350` |
| `merchantCategoryCode` | `string \| undefined` | Optional | Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4` |

## Example (as JSON)

```json
{
  "MerchantName": "MerchantName2",
  "MerchantCategoryCode": "MerchantCategoryCode6"
}
```

