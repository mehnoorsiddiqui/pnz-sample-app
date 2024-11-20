const { Client, SetupAccountAccessConsentsResourceController, AuthorizeConsentController } = require('pnz-apicentre-sandbox-sdk');
require('dotenv').config();

const client = new Client({
  timeout: 0,
})

const setupAccountAccessConsentsResourceController = new SetupAccountAccessConsentsResourceController(client);
const authorizeConsentController = new AuthorizeConsentController(client);

const clientID = process.env.PNZ_CLIENT_ID;
const privateKey = process.env.PNZ_PRIVATE_KEY;
const KID = process.env.PNZ_KID;
const redirectUri = process.env.REDIRECT_URI;

const initiateClientCredentialsGrant = async () => {
  try {
    const { result } = await setupAccountAccessConsentsResourceController.initiateClientCredentialsGrant(clientID, privateKey, KID);
    return result;
  } catch (error) {
    return error;
  }
}


const createAccountAccessConsent = async (authorizationToken) => {

  const authorization = authorizationToken;
  try {
    const { result } = await setupAccountAccessConsentsResourceController.createAccountAccessConsent(authorization);
    return result;
  } catch (error) {
    return error;
  }
}


const initiateAuthorizationCodeGrant = async (consentID) => {
  try {
    const result = await authorizeConsentController.initiateAuthorizationCodeGrant(clientID, redirectUri, privateKey, KID, consentID);
    return result;
  } catch (error) {
    return error;
  }
}

// exchange authorization code for access token
const getAccessToken = async (code) => {
  try {
    const { result } = await authorizeConsentController.exchangeAuthorizationCode(clientID, privateKey, KID, redirectUri, code);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
  initiateClientCredentialsGrant,
  createAccountAccessConsent,
  initiateAuthorizationCodeGrant,
  getAccessToken
};




