# Bulkendpoints

```ts
const bulkendpointsController = new BulkendpointsController(client);
```

## Class Name

`BulkendpointsController`

## Methods

* [Retrieve Consented Accounts Information](../../doc/controllers/bulkendpoints.md#retrieve-consented-accounts-information)
* [Retrieve Bulk Balances](../../doc/controllers/bulkendpoints.md#retrieve-bulk-balances)
* [Retrieve Bulk Beneficiaries](../../doc/controllers/bulkendpoints.md#retrieve-bulk-beneficiaries)
* [Retrieve Bulk Direct Debits](../../doc/controllers/bulkendpoints.md#retrieve-bulk-direct-debits)
* [Retrieve Bulk Offers](../../doc/controllers/bulkendpoints.md#retrieve-bulk-offers)
* [Retrieve Authorising Party](../../doc/controllers/bulkendpoints.md#retrieve-authorising-party)
* [Retrieve Bulk Scheduled Payments](../../doc/controllers/bulkendpoints.md#retrieve-bulk-scheduled-payments)
* [Retrieve Bulk Standing Orders](../../doc/controllers/bulkendpoints.md#retrieve-bulk-standing-orders)
* [Retrieve Bulk Statements](../../doc/controllers/bulkendpoints.md#retrieve-bulk-statements)
* [Retrieve Bulk Transactions](../../doc/controllers/bulkendpoints.md#retrieve-bulk-transactions)


# Retrieve Consented Accounts Information

This request queries the accounts which the customer consented for you to access in Step HF-AC7 - Post consented accounts array to complete consent or Step DF-AC4 - Authorise consent.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a collection of account resources.
* The balance of the accounts is dynamic so the balance returned may vary.

Postconditions:

* The AccountId for the first account in the collection is saved in the PNZ-T-AC-AccountId environment variable in preparation for subsequent account-related steps, such as Step AC11.1 - Retrieve a specific account

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an invalid or expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveConsentedAccountsInformation(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC101Retrieveconsentedaccountsinformation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC101Retrieveconsentedaccountsinformation`](../../doc/models/ac101-retrieveconsentedaccountsinformation.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveConsentedAccountsInformation(authorization);
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
    "Account": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Currency": "NZD",
        "Nickname": "Cheque Account",
        "Description": "Cheque Account",
        "AccountType": "Personal",
        "AccountSubType": "Savings",
        "Account": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-7046-5813780-00",
          "Name": "CurrentAccount",
          "SecondaryIdentification": "ID2-99-7046-5813780-00"
        }
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/accounts"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```


# Retrieve Bulk Balances

This request queries the accounts which the Customer has consented for you to access.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a collection of balance resources for all accounts which the Customer consented for you to access.
* The balance of the accounts is dynamic so the balance returned may vary.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveBulkBalances(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC102Retrievebulkbalances>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC102Retrievebulkbalances`](../../doc/models/ac102-retrievebulkbalances.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveBulkBalances(authorization);
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
    "Balance": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Type": "PreviouslyClosedBooked",
        "Amount": {
          "Amount": "20000.00",
          "Currency": "NZD"
        },
        "CreditLine": [],
        "DateTime": "2022-06-26T06:57:53.228Z",
        "CreditDebitIndicator": "Credit"
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/balances"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```


# Retrieve Bulk Beneficiaries

This request queries the accounts which the Customer has consented for you to access.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a collection of beneficiary resources for all accounts which the Customer consented for you to access.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveBulkBeneficiaries(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC103Retrievebulkbeneficiaries>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC103Retrievebulkbeneficiaries`](../../doc/models/ac103-retrievebulkbeneficiaries.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveBulkBeneficiaries(authorization);
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
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/beneficiaries"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```


# Retrieve Bulk Direct Debits

This request queries the accounts which the Customer has consented for you to access.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a collection of direct debit resources for all accounts which the Customer consented for you to access.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveBulkDirectDebits(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC104Retrievebulkdirectdebits>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC104Retrievebulkdirectdebits`](../../doc/models/ac104-retrievebulkdirectdebits.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveBulkDirectDebits(authorization);
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
    "DirectDebit": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "MandateIdentification": "The Mandate Name",
        "Name": "A. Direct Debit Name",
        "DirectDebitId": "ceb935df-fe63-5918-92c9-c7059a312e4a",
        "DirectDebitStatusCode": "Inactive",
        "PreviousPaymentAmount": {
          "Amount": "72.49",
          "Currency": "NZD"
        },
        "PreviousPaymentDateTime": "2019-05-05T10:43:07.000Z"
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/direct-debits"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```


# Retrieve Bulk Offers

This request queries the accounts which the Customer has consented for you to access.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a collection of offer resources for all accounts which the Customer consented for you to access.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveBulkOffers(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC105Retrievebulkoffers>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC105Retrievebulkoffers`](../../doc/models/ac105-retrievebulkoffers.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveBulkOffers(authorization);
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
    "Offer": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "OfferId": "71800a96-f483-5468-a6f7-3eff1ee7b4c4",
        "OfferType": "LimitIncrease",
        "Description": "Credit limit increase for the account up to $10000.00",
        "StartDateTime": "2017-04-05T10:43:07.000Z",
        "EndDateTime": "2017-05-05T10:43:07.000Z",
        "Amount": {
          "Amount": "10000.00",
          "Currency": "NZD"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "OfferId": "eaf80aec-e293-57fe-9700-ebbe984f8222",
        "OfferType": "Other",
        "Description": "A description for another offer",
        "StartDateTime": "2019-01-05T10:43:07.000Z",
        "EndDateTime": "2019-04-05T10:43:07.000Z",
        "Fee": {
          "Amount": "200.00",
          "Currency": "NZD"
        },
        "Value": 1,
        "Term": "Further details of the other offer"
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "OfferId": "62906a42-dbbe-555b-b429-9ecb5866f526",
        "OfferType": "PromotionalRate",
        "Description": "A special rate of 4.75 on mortgages over $350,000",
        "StartDateTime": "2018-01-05T10:43:07.000Z",
        "EndDateTime": "2018-04-05T10:43:07.000Z",
        "Fee": {
          "Amount": "250.00",
          "Currency": "NZD"
        },
        "Rate": "4.75",
        "Term": "Fixed for 1 year"
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "OfferId": "8337e670-2888-5a18-a7a7-39cefd11cfb4",
        "OfferType": "BalanceTransfer",
        "Description": "Balance transfer offer up to $2000",
        "StartDateTime": "2018-04-05T10:43:07.000Z",
        "EndDateTime": "2018-05-05T10:43:07.000Z",
        "Amount": {
          "Amount": "2000.00",
          "Currency": "NZD"
        }
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/offers"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```


# Retrieve Authorising Party

This request queries the accounts which the Customer has consented for you to access.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a party resource for the party who authorised your access.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveAuthorisingParty(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC106Retrieveauthorisingparty>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC106Retrieveauthorisingparty`](../../doc/models/ac106-retrieveauthorisingparty.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveAuthorisingParty(authorization);
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
    "Party": {
      "PartyId": "4c7bddca-b7e7-509b-9ac3-5d4ae233cbf0",
      "PartyNumber": "430535",
      "PartyType": "Sole",
      "Name": "A. Middleware Customer user01",
      "EmailAddress": "user01@middleware.co.nz",
      "Phone": "+6-446759547",
      "Mobile": "+6-446759547",
      "Address": [
        {
          "Country": "NZ",
          "AddressLine": [
            "Residential"
          ],
          "AddressType": "Residential",
          "StreetName": "Queens Wharf",
          "BuildingNumber": "8",
          "PostCode": "6011",
          "TownName": "Wellington",
          "CountrySubDivision": "Wellington"
        },
        {
          "Country": "NZ",
          "AddressLine": [
            "POBox 1293"
          ],
          "AddressType": "POBox",
          "PostCode": "6140",
          "TownName": "Wellington"
        }
      ]
    }
  },
  "Meta": {},
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/party"
  }
}
```


# Retrieve Bulk Scheduled Payments

This request queries the accounts which the Customer has consented for you to access.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a collection of scheduled payment resources for all accounts which the Customer consented for you to access.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveBulkScheduledPayments(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC107Retrievebulkscheduledpayments>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC107Retrievebulkscheduledpayments`](../../doc/models/ac107-retrievebulkscheduledpayments.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveBulkScheduledPayments(authorization);
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
    "ScheduledPayment": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "ScheduledType": "Execution",
        "InstructedAmount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "ScheduledPaymentDateTime": "2019-02-06T02:00:00.000Z",
        "ScheduledPaymentId": "ceb935df-fe63-5918-92c9-c7059a312e4a",
        "Reference": {
          "CreditorName": "Just A. Creditor",
          "DebtorName": "A SP debtor",
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
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "Just A. Creditor"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        }
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/scheduled-payments"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```


# Retrieve Bulk Standing Orders

This request queries the accounts which the Customer has consented for you to access.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a collection of standing order resources for all accounts which the Customer consented for you to access.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveBulkStandingOrders(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC108Retrievebulkstandingorders>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC108Retrievebulkstandingorders`](../../doc/models/ac108-retrievebulkstandingorders.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveBulkStandingOrders(authorization);
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
    "StandingOrder": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Frequency": "EvryDay",
        "NextPaymentDateTime": "2019-01-15T02:00:00.000Z",
        "NextPaymentAmount": {
          "Amount": "5.00",
          "Currency": "NZD"
        },
        "StandingOrderId": "ceb935df-fe63-5918-92c9-c7059a312e4a",
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
        "FirstPaymentAmount": {
          "Amount": "5.00",
          "Currency": "NZD"
        },
        "FinalPaymentAmount": {
          "Amount": "5.00",
          "Currency": "NZD"
        },
        "FirstPaymentDateTime": "2019-01-01T02:00:00.000Z",
        "FinalPaymentDateTime": "2019-03-12T02:00:00.000Z",
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "Just A. Creditor"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        }
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/standing-orders"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```


# Retrieve Bulk Statements

This request queries the accounts which the Customer has consented for you to access.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a collection of statement resources for all accounts which the Customer consented for you to access.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveBulkStatements(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC109Retrievebulkstatements>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC109Retrievebulkstatements`](../../doc/models/ac109-retrievebulkstatements.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveBulkStatements(authorization);
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
    "Statement": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "StartDateTime": "2018-11-30T11:00:00.000Z",
        "EndDateTime": "2018-12-31T10:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "Type": "RegularPeriodic",
        "StatementId": "2b3ccbff-c249-5a42-8658-070f8f1618e7",
        "StatementDescription": [],
        "StatementBenefit": [],
        "StatementFee": [],
        "StatementInterest": [],
        "StatementDateTime": [],
        "StatementRate": [],
        "StatementValue": [],
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "CurrentPayment",
            "Amount": {
              "Amount": "12.34",
              "Currency": "NZD"
            }
          },
          {
            "CreditDebitIndicator": "Debit",
            "Type": "CurrentPayment",
            "Amount": {
              "Amount": "24.00",
              "Currency": "NZD"
            }
          }
        ]
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "StartDateTime": "2018-10-31T11:00:00.000Z",
        "EndDateTime": "2018-11-30T10:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "Type": "AccountOpening",
        "StatementId": "9fedc3e1-6668-506e-bd9f-70ae54d82fed",
        "StatementDescription": [],
        "StatementBenefit": [],
        "StatementFee": [],
        "StatementInterest": [],
        "StatementDateTime": [],
        "StatementRate": [],
        "StatementValue": [],
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "CurrentPayment",
            "Amount": {
              "Amount": "12.34",
              "Currency": "NZD"
            }
          },
          {
            "CreditDebitIndicator": "Debit",
            "Type": "CurrentPayment",
            "Amount": {
              "Amount": "24.00",
              "Currency": "NZD"
            }
          }
        ]
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "StartDateTime": "2018-09-30T11:00:00.000Z",
        "EndDateTime": "2018-10-31T10:59:59.999Z",
        "CreationDateTime": "2019-01-01T02:00:00.000Z",
        "Type": "AccountClosure",
        "StatementId": "13829b73-8480-528c-bfe8-590d556ca6d8",
        "StatementDescription": [],
        "StatementBenefit": [],
        "StatementFee": [],
        "StatementInterest": [],
        "StatementDateTime": [],
        "StatementRate": [],
        "StatementValue": [],
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "CurrentPayment",
            "Amount": {
              "Amount": "12.34",
              "Currency": "NZD"
            }
          },
          {
            "CreditDebitIndicator": "Debit",
            "Type": "CurrentPayment",
            "Amount": {
              "Amount": "24.00",
              "Currency": "NZD"
            }
          }
        ]
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/statements"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```


# Retrieve Bulk Transactions

This request queries the accounts which the Customer has consented for you to access.

Preconditions:

* This step relies on the presence of a PNZ-T-AC-AuthAccessToken, which is set upon successful completion of Step HF-AC8 - Exchange authorization-code for access token or Step DF-AC5 - Exchange auth_req_id for access token.

Response:

* The response should be a collection of transaction resources for all accounts which the Customer consented for you to access.

Postconditions:

* None

Examples:

* There is one example which shows the request and the expected response.

Troubleshooting:

* The most likely cause of errors is an expired access token. Try starting from Step AC1 - Initiate client credentials grant again.

```ts
async retrieveBulkTransactions(
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AC1010Retrievebulktransactions>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AC1010Retrievebulktransactions`](../../doc/models/ac1010-retrievebulktransactions.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await bulkEndpointsController.retrieveBulkTransactions(authorization);
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
    "Transaction": [
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Debit",
        "BookingDateTime": "2018-12-16T08:34:03.000Z",
        "Status": "Pending",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "55494c43-9aef-52c5-8c3a-cd0ff73a5a17",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-12-21T03:40:31.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-12-12T06:28:04.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "1ff40623-2d63-5389-8d20-1282b6dc222e",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-12-11T16:04:38.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-12-09T09:39:02.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "b0599daf-7b0d-5402-b05b-69c2c8e83216",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-12-04T14:22:26.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Debit",
        "BookingDateTime": "2018-12-08T20:04:05.000Z",
        "Status": "Pending",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "a10260b5-e04a-5c1d-9738-bb3f6644cf46",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "CardInstrument": {
          "CardSchemeName": "VISA",
          "Name": "A. Cardholder",
          "AuthorisationType": "PIN",
          "Identification": "**** **** **** 1234"
        },
        "ValueDateTime": "2018-12-10T15:06:54.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-12-05T23:58:59.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "ff5a733c-1608-55e1-b83c-ca0fc162bc51",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "CardInstrument": {
          "CardSchemeName": "VISA",
          "Name": "A. Cardholder",
          "AuthorisationType": "PIN",
          "Identification": "**** **** **** 1234"
        },
        "ValueDateTime": "2018-12-23T04:16:23.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-11-20T10:36:48.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "8fd8bd0c-12a4-5368-b8f5-f428f5f89106",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-11-18T22:28:56.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-11-18T05:21:56.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "27825aca-e2e5-569f-8681-c4f17ee011eb",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-11-25T04:40:11.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-11-14T23:29:58.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "b9c8bcf2-92c7-5f54-9e89-a6629876f31c",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "CardInstrument": {
          "CardSchemeName": "VISA",
          "Name": "A. Cardholder",
          "AuthorisationType": "PIN",
          "Identification": "**** **** **** 1234"
        },
        "ValueDateTime": "2018-11-23T14:44:10.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-11-10T13:56:29.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "0faa4e83-1e07-5183-a05d-6e4fea6df252",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-11-22T01:09:18.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-11-10T04:05:00.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "d0865c7b-7157-5fef-b8cc-923986710a47",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-11-24T19:10:27.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-10-20T19:22:00.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "c586b85a-7253-536c-b3f0-a93e1a33e47d",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-10-19T04:59:36.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-10-18T18:01:43.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "b073d119-f1f2-5b28-93e0-ee17a184454b",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-10-22T04:06:58.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-10-09T21:55:20.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "e1dfdc28-6b99-5e26-b415-7a5d55e1e4db",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "ValueDateTime": "2018-10-04T11:28:21.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      },
      {
        "AccountId": "OBA-99-7046-5813780-00",
        "Amount": {
          "Amount": "10.00",
          "Currency": "NZD"
        },
        "CreditDebitIndicator": "Credit",
        "BookingDateTime": "2018-10-09T12:50:16.000Z",
        "Status": "Booked",
        "StatementReference": [],
        "TransactionReference": {
          "CreditorName": "Party being paid",
          "DebtorName": "Party paying",
          "CreditorReference": {
            "Particulars": "creditorPart",
            "Code": "creditorCode",
            "Reference": "creditorRef"
          },
          "DebtorReference": {
            "Particulars": "debtorPart",
            "Code": "debtorCode",
            "Reference": "debtorRef"
          }
        },
        "TransactionId": "0daf993d-dc91-5c87-af4f-8ef64c08dd6c",
        "BankTransactionCode": {
          "Code": "ReceivedCreditTransfer",
          "SubCode": "DomesticCreditTransfer"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "Transfer",
          "Issuer": "ExampleBank"
        },
        "CardInstrument": {
          "CardSchemeName": "VISA",
          "Name": "A. Cardholder",
          "AuthorisationType": "PIN",
          "Identification": "**** **** **** 1234"
        },
        "ValueDateTime": "2018-10-19T14:54:28.000Z",
        "TransactionInformation": "Further details about the transaction",
        "Balance": {
          "Amount": {
            "Amount": "230.00",
            "Currency": "NZD"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "InterimBooked"
        },
        "MerchantDetails": {
          "MerchantName": "This is a merchant name that is long",
          "MerchantCategoryCode": "5967"
        },
        "CreditorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "CreditorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Creditor"
        },
        "DebtorAgent": {
          "SchemeName": "BICFI",
          "Identification": "ABCXYZ3A"
        },
        "DebtorAccount": {
          "SchemeName": "BECSElectronicCredit",
          "Identification": "99-1234-1234567-99",
          "Name": "A. Debtor"
        }
      }
    ]
  },
  "Links": {
    "Self": "https://api-nomatls.apicentre.middleware.co.nz/open-banking-nz/v2.3/transactions"
  },
  "Meta": {
    "TotalPages": 1
  }
}
```

