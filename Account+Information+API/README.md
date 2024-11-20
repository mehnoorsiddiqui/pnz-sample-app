
# Getting Started with Account information PNZ-API-Centre

## Introduction

The sandbox, powered by Middleware New Zealand, is a dedicated environment that mimics an API Provider, as defined in the [Payments NZ API Centre standards](https://paymentsnz.atlassian.net/wiki/spaces/PaymentsNZAPIStandards/overview).

### Getting Started

Once you've imported the collection and environment files into your postman (click the Run in Postman button) and before you run any Sandbox requests, you will need to do the following:

1. **Ensure that the Postman setting for 'Automatically Follow Redirects' is disabled. The script requires that redirects won't be followed.**
2. Set the environment to 'PNZ API Centre V2 Sandbox' environment.
3. Run the 'Download jsrsasign into Global variables' request to download a javascript extension needed for the collection.
   - Open the 'Establish global variables' folder in the collection.
   - Click on the  'Download jsrsasign into Global variables' test, which will open a new tab of the same title.
   - Click on the 'Send' button to download the javascript extension.
   - Confirm the Test Results (1/1).
4. Run the steps one at a time by stepping through the numbered sequence of steps using the left hand navigation bar.  Please be sure to follow the sequence, as any deviation may cause unexpected errors.

### Personalising for your Application

Once you've registered your own Application, you will need to change the PNZ-E-ClientId, PNZ-E-ClientSecret, PNZ-E-KeyId, PNZ-E-PrivateKey and PNZ-E-RedirectURI environment variables to reflect the details for your own Application.  Doing this will allow you to confirm your Application is set up correctly before you start developing.

Additionally, if working with PNZ v2.2 or higher, you'll need to change the PNZ-E-PhoneNumber and PNZ-E-AccountNumber environment variables to reflect the details for your own Application.  Once you've configured the initial set of environment variables above you can invoke the V2.x/Middleware Sandbox API V2.x/customers request to view the users, phone numbers and account numbers available to your application.

### Request Naming and Numbering Conventions

The collection includes requests which, generally speaking, must be completed in a specific order. These requests are numbered sequentially (e.g. AC1-AC12 or P1-P11).

The request names conform to a standard:

\[FlowType-]\<ResourceType>\<Sequence Number>\[.\<Unique Number>] - \<Description>"

Where FlowType indicates whether the request is specific to the hybrid flow (HF) or decoupled flow (DF). Where the request is common to either flow, the FlowType is omitted.

Where ResourceType indicates the resource used to obtain consent:

+ A - V1.0 account-related sequence where consent is obtained via the account-requests resource
+ AC - V2.0 account-related sequence where consent is obtained via the account-access-consents resource
+ P - V1.0 payment-related sequence where consent is obtained via the payment resource
+ DP - V2.0 payment-related sequence where consent is obtained via the domestic-payment-consents resource
+ EP - V2.0 payment-related sequence where consent is obtained via the enduring-payment-consents resource

Where Sequence Number defines the step number of the request in the flow.

Where Unique Number is used to uniquely identify a request where there are multiple options for the next step (i.e. 9.1 and 9.2 can both be attempted after request 8 has successfully completed)

Where Description is the name of the request (e.g. Initiate back channel authorisation request)

The collection also includes steps for both the Hybrid Flow and Decoupled Flow (CIBA). Where the steps are specific to either of these flows, the step is prefixed with HF- for hybrid flow and DF- for decoupled flow e.g. HF-DP3 or DF-DP3.

Example request names include

+ "HF-DP3 Initiate authorisation code grant for a domestic payment consent", which is the name of the 3rd step in the version 2.0 Domestic Payments sequence and is specific to the Hybrid Flow.
+ "DF-AC3 Initiation a back channel authorisation request for an account access consent", which is the name of the 3rd step in the version 2.0 Accounts sequence and is specific to the Decoupled Flow.
+ "EP1 Initiate a client credential grant", which is the 1st step in the Enduring Payments Consent sequence and is common to both the hybrid and decoupled flows.

### Variables

The collection uses three types of variables - collection variables, environment variables and temporary variables.  Collection variables are URLs or constants that you should never change. The environment variables are the variables you can personalise for your application. Refer to Personalising for your Application above. The temporary variables are created as you step through the sequence and are cleaned up using the request in the Collection Utilities folder.

Naming conventions for variables are as follows:

PNZ-\<VariableType>\[-\<ResourceType>]-\<VariableName>

e.g. PNZ-C-Host or PNZ-E-ClientId or PNZ-T-EP-State

Where Variable Type is one of

+ C indicates the variable is a collection variable.
+ E indicates the variable is an environment variable.
+ T indicates the variable is a temporary variable.

Where ResourceType is as described above for request naming conventions.

Where VariableName is the name of the variable.

To view the current state of a temporary or environment variable, click on the environment quick look button. To view the current state of a collection variable, edit the collection and click on the Variables tab.

### Collection Details

The collection is split into 7 main folders:

1. Establish global variables
2. V2.3
3. V2.2
4. V2.1
5. V2.0
6. V1.0
7. Collection Utilities

#### Establish global variables

The 'Download jsrsasign into Global variable' request in this folder establishes the global variables that the rest of the collection requires. You only need to run the request in this folder when you start Postman.

#### V2.3

This folder has all the requests to explore the PNZ API Centre V2.3 standard.

#### V2.2

This folder has all the requests to explore the PNZ API Centre V2.2 standard.

#### V2.1

This folder has all the requests to explore the PNZ API Centre V2.1 standard.

#### V2.0

This folder has all the requests to explore the PNZ API Centre V2.0 standard.

#### V1.0

This folder has all the requests to explore the PNZ API Centre V1.0 standard.

#### Collection Utilities

The request in this folder removes all the temporary variables which are created as you explore the requests in the V2.x and V1.0 folders.

### Version Folders

Each of the version folders (e.g. V2.0 and V1.0) is split into 3 sub folders:

1. Account Information API Vn.m
2. Payment Initiation API Vn.m
3. Middleware Sandbox Vn.m

#### Account Information API Vn.m

The requests in this folder test the end-to-end process for requesting and obtaining consent to access a customer's account information and making subsequent requests to access account information for that customer. The folder contains the interactions as specified in the PNZ API Centre Standards version specified in the folder name.

#### Payment Initiation API Vn.m

The requests in this folder test the end-to-end process for requesting and obtaining consent to make one or more payments on a customer's behalf and subsequently making payments. The folder contains the interactions as specified in the PNZ API Centre Standards version specified in the folder name.

#### Middleware Sandbox API Vn.m

The requests in this folder include some Sandbox utilities for manipulating test data, and the Authorisation Server endpoints, such as /authorize, .well-known/openid-configuration and /keys.

### Getting Help

This collection is provided by Middleware New Zealand (MWNZ), the provider of the Payments NZ API Centre Sandbox. If you have any questions or issues, please contact us at apicentre@middleware.co.nz.

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version 3.9+**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=AccountInformationPNZAPICentre&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=AccountInformationPNZAPICentre&workspaceName=account-information-pnz-api-centrelib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *Account information PNZ-API-CentreLib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add AccountInformationPnzApiCentrelib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=AccountInformationPNZAPICentre&workspaceName=account-information-pnz-api-centrelib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install AccountInformationPnzApiCentrelib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production,
});
```

## List of APIs

* [Setupaccount-Access-Consentsresource](doc/controllers/setupaccount-access-consentsresource.md)
* [Consentstatus](doc/controllers/consentstatus.md)
* [Bulkendpoints](doc/controllers/bulkendpoints.md)
* [Specificaccountendpoints](doc/controllers/specificaccountendpoints.md)
* [Refreshtoken](doc/controllers/refreshtoken.md)
* [Authorize Consent](doc/controllers/authorize-consent.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

