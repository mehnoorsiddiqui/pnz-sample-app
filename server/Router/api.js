const Router = require("express");
const { initiateClientCredentialsGrant, createAccountAccessConsent, initiateAuthorizationCodeGrant, getAccessToken } = require("../authentication");
const { getAccounts, getAccountStatements, getAccountStatementTransactions } = require("../accountInformation");
const api = Router();

//setting up account consent
api.post("/accountConsent", async (req, res) => {
  try {
    const token = await initiateClientCredentialsGrant();
    const bearerToken = `${token.tokenType} ${token.accessToken}`;
    const accountDetails = await createAccountAccessConsent(bearerToken);
    res.send({ consentId: accountDetails.data.consentId });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

api.get("/initiateCodeGrant", async (req, res) => {
  try {
    const redirectURL = await initiateAuthorizationCodeGrant(req.query.consentId);
    res.send({ redirect: redirectURL });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

api.post("/accessToken", async (req, res) => {
  try {
    const accessToken = await getAccessToken(req.body.code);
    res.send({ accessTokenObject: accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

api.get("/getAccounts", async (req, res) => {
  try {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
      return res.status(401).send({ error: "Unauthorized: Token not provided" });
    }
    const accounts = await getAccounts(accessToken);
    res.send({ accounts });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

api.get("/getAccountStatements", async (req, res) => {
  try {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
      return res.status(401).send({ error: "Unauthorized: Token not provided" });
    }
    const accountId = req.query.accountId; 
    const accountStatements = await getAccountStatements(accessToken, accountId);
    res.send({ accountStatements });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

api.get("/getAccountStatementTransactions", async (req, res) => {
  try {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
      return res.status(401).send({ error: "Unauthorized: Token not provided" });
    }
    const accountId = req.query.accountId; 
    const statementId = req.query.statementId; 
    const accountStatementTransactions = await getAccountStatementTransactions(accessToken, accountId,statementId);
    res.send({ accountStatementTransactions });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

module.exports = api;
