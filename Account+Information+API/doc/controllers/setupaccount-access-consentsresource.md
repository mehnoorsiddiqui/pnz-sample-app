# Setupaccount-Access-Consentsresource

```ts
const setupaccountAccessConsentsresourceController = new SetupaccountAccessConsentsresourceController(client);
```

## Class Name

`SetupaccountAccessConsentsresourceController`

## Methods

* [Initiate Client Credentials Grant](../../doc/controllers/setupaccount-access-consentsresource.md#initiate-client-credentials-grant)
* [Create Account Access Consent](../../doc/controllers/setupaccount-access-consentsresource.md#create-account-access-consent)


# Initiate Client Credentials Grant

This step initiates a client credentials grant request for accounts-related activity.

A set of default configuration values are provided in the environment variables 'PNZ-API-Centre-V2-Sandbox-V2' environment file so you can start trying the Sandbox APIs immediately.

Once you've registered your own Application, you should change the PNZ-E-ClientId, PNZ-E-ClientSecret, PNZ-E-KeyId, PNZ-E-PrivateKey, PNZ-E-RedirectURI, PNZ-E-PhoneNumber and PNZ-E-AccountNumber environment variables to reflect details for your own Application. Doing this will allow you to confirm your Application is set up correctly before you start developing.

Preconditions:

* This step relies on the PNZ-E-ClientId, PNZ-E-KeyId and PNZ-E-PrivateKey environment variables.

Response:

* The response should be an access token of type Bearer.

Postconditions:

* The access token is saved in the environment variable PNZ-T-AC-AccountAccessToken in preparation for Step AC2 - Create account access consent.

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is that the environment is not set to 'PNZ API Centre V2 Sandbox'.
* Another likely cause is incorrect variable values. Confirm the precondition variable values are correct.

```ts
async initiateClientCredentialsGrant(
  contentType: ContentTypeEnum,
  grantType: string,
  scope: string,
  clientAssertion: string,
  clientAssertionType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC1Initiateclientcredentialsgrant>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `grantType` | `string` | Form, Required | - |
| `scope` | `string` | Form, Required | - |
| `clientAssertion` | `string` | Form, Required | - |
| `clientAssertionType` | `string` | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC1Initiateclientcredentialsgrant`](../../doc/models/ac1-initiateclientcredentialsgrant.md)

## Example Usage

```ts
const contentType = 'application/x-www-form-urlencoded';
const grantType = 'client_credentials';
const scope = 'openid accounts';
const clientAssertion = '{{PNZ-T-AC-ClientAssertionJWT}}';
const clientAssertionType = '{{PNZ-T-AC-ClientAssertionType}}';
try {
  const { result, ...httpResponse } = await setupAccountAccessConsentsResourceController.initiateClientCredentialsGrant(contentType, grantType, scope, clientAssertion, clientAssertionType);
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
  "token_type": "Bearer",
  "expires_in": 3599,
  "access_token": "98ae3880ce9b43b4bb2d0dbc998ab37ca0e6c7983f624036bbe2c28a9385116f"
}
```


# Create Account Access Consent

This step creates an account-access-consents resource.

Preconditions:

+ This step relies on the presence of an PNZ-T-AC-AccountAccessToken environment variable, which is set upon successful completion of Step AC1 - Initiate client credentials grant.

Response:

+ The response should be an account-access-consents object, with a status 'AwaitingAuthorisation'.

Postconditions:

+ The PNZ-T-AC-AccountAccessConsentId is saved in an environment variable in preparation for steps: HF-AC3 - Initiate authorization code grant for an account access consent; DF-AC3 - Initiation back channel authorisation request; and AC9 - Check account access consent status.

Examples:

+ There is one example which shows the request and the expected response.

Troubleshooting:

+ The most likely cause of errors is that the step is being attempted out of sequence. Be sure to follow the steps in sequence
+ Another likely cause of errors are out of date variable values. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async createAccountAccessConsent(
  accept: string,
  body: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC2Createaccountaccessconsent>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `body` | `string` | Body, Required | - |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC2Createaccountaccessconsent`](../../doc/models/ac2-createaccountaccessconsent.md)

## Example Usage

```ts
const accept = 'application/json';
const contentType = null;
const body = '{\n	"Data": {\n		"Consent": {\n			"TransactionToDateTime": "2025-05-08T00:00:00-00:00",\n			"ExpirationDateTime": "2022-08-24T10:50:48.449Z",\n			"Permissions": [\n				"ReadAccountsDetail",\n				"ReadBalances",\n				"ReadBeneficiariesDetail",\n				"ReadDirectDebits",\n				"ReadParty",\n				"ReadPartyAuthUser",\n				"ReadOffers",\n				"ReadScheduledPaymentsDetail",\n				"ReadStandingOrdersDetail",\n				"ReadStatementsBasic",\n				"ReadStatementsDetail",\n				"ReadTransactionsDetail",\n				"ReadTransactionsCredits",\n				"ReadTransactionsDebits"\n			],\n			"TransactionFromDateTime": "2012-05-03T00:00:00-00:00"\n		}\n	},\n	"Risk": {\n		"EndUserAppName": "This is an app name that is long",\n		"EndUserAppVersion": "App Version3.0",\n		"PaymentContextCode": "EcommerceServices",\n		"MerchantName": "This is a merchant name that is long",\n		"MerchantNZBN": "This is an NZBN number",\n		"MerchantCategoryCode": "5967",\n		"MerchantCustomerIdentification": "This is a special customer identifier",\n		"GeoLocation": {\n			"Latitude": "45.516136",\n			"Longitude": "-73.656830"\n		},\n		"DeliveryAddress": {\n			"AddressLine": [\n				"This is address line 1"\n			],\n			"StreetName": "Main Street",\n			"BuildingNumber": "12345",\n			"PostCode": "12345",\n			"TownName": "Some Town",\n			"CountrySubDivision": "Some Subdivision",\n			"Country": "CA"\n		}\n	}\n}';
const authorization = 'Bearer ACCESS_TOKEN';
try {
  const { result, ...httpResponse } = await setupAccountAccessConsentsResourceController.createAccountAccessConsent(accept, body, authorization);
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
    "Status": "AwaitingAuthorisation",
    "StatusUpdateDateTime": "2022-06-26T06:57:22.859Z",
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

