# Consentstatus

```ts
const consentstatusController = new ConsentstatusController(client);
```

## Class Name

`ConsentstatusController`


# Check Account Access Consent Status

This request queries the most recently created account access consent whose id is specified in the PNZ-T-AC-AccountAccessConsentId environment variable.  
This step is placed here in the sequence because the status of the account-access-consents resource will have changed from its original status at this point.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AccountAccessToken environment variable, which is set upon successful completion of Step AC1 - Initiate client credentials grant.
* It also relies on the presence of a PNZ-T-AC-AccountAccessConsentId environment variable, which is set upon successful completion of Step AC2 - Create account access consent.

Response:

* The response should be a single account-access-consent resource with the requested ConsentId.
* The status of the account-access-consent is dynamic so the status returned may vary.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Complete Step AC1 - Initiate client credentials grant before trying this request again.
* Another likely cause is there is no PNZ-T-AC-AccountAccessConsentId environment variable. Complete Step AC2 - Create account access consent before trying this request again.

```ts
async checkAccountAccessConsentStatus(
  pNZTACAccountAccessConsentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC9Checkaccountaccessconsentstatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pNZTACAccountAccessConsentId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC9Checkaccountaccessconsentstatus`](../../doc/models/ac9-checkaccountaccessconsentstatus.md)

## Example Usage

```ts
const pNZTACAccountAccessConsentId = 'PNZ-T-AC-AccountAccessConsentId6';
try {
  const { result, ...httpResponse } = await consentStatusController.checkAccountAccessConsentStatus(pNZTACAccountAccessConsentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "Data": {
    "Consent": {
      "TransactionToDateTime": "2025-05-08T00:00:00.000Z",
      "ExpirationDateTime": "2022-06-28T06:57:22.167Z",
      "Permissions": [
        "ReadAccountsDetail",
        "ReadBalances",
        "ReadBeneficiariesDetail",
        "ReadDirectDebits",
        "ReadParty",
        "ReadPartyAuthUser",
        "ReadOffers",
        "ReadScheduledPaymentsDetail",
        "ReadStandingOrdersDetail",
        "ReadStatementsBasic",
        "ReadStatementsDetail",
        "ReadTransactionsDetail",
        "ReadTransactionsCredits",
        "ReadTransactionsDebits"
      ],
      "TransactionFromDateTime": "2012-05-03T00:00:00.000Z"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "2022-06-26T06:58:16.097Z",
    "CreationDateTime": "2022-06-26T06:57:22.859Z",
    "ConsentId": "aac_62b80352dd042200233f5fe9"
  },
  "Risk": {
    "EndUserAppName": "This is an app name that is long",
    "EndUserAppVersion": "App Version3.0",
    "PaymentContextCode": "EcommerceServices",
    "MerchantName": "This is a merchant name that is long",
    "MerchantNZBN": "This is an NZBN number",
    "MerchantCategoryCode": "5967",
    "MerchantCustomerIdentification": "This is a special customer identifier",
    "GeoLocation": {
      "Latitude": "45.516136",
      "Longitude": "-73.656830"
    },
    "DeliveryAddress": {
      "AddressLine": [
        "This is address line 1"
      ],
      "StreetName": "Main Street",
      "BuildingNumber": "12345",
      "PostCode": "12345",
      "TownName": "Some Town",
      "CountrySubDivision": "Some Subdivision",
      "Country": "CA"
    }
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/account-access-consents/aac_62b80352dd042200233f5fe9"
  },
  "Meta": {}
}
```

