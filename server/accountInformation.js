const { Client, Environment, StatementsController, AccountsController } = require('account-and-transaction-api-specificationlib');

const client = new Client({
    timeout: 0,
    environment: Environment.Production
});


const getAccounts = async (accessToken) => {
    try {
        const newClient = client.withConfiguration({
            bearerAuthCredentials: {
                accessToken: accessToken
            }
        });
        const accountsController = new AccountsController(newClient);
        const { result } = await accountsController.getAccounts();
        return result;
    } catch (error) {
        return error;
    }
}

const getAccountStatements = async (accessToken, accountId) => {
    try {
        const newClient = client.withConfiguration({
            bearerAuthCredentials: {
                accessToken: accessToken
            }
        });
        const statementsController = new StatementsController(newClient);
        const { result } = await statementsController.getAccountStatements(accountId);
        return result;
    } catch (error) {
        return error;
    }
}

const getAccountStatementTransactions = async (accessToken, accountId, statementId) => {
    try {
        const newClient = client.withConfiguration({
            bearerAuthCredentials: {
                accessToken: accessToken
            }
        });
        const statementsController = new StatementsController(newClient);
        const { result } = await statementsController.getAccountStatementTransactions(
            accountId,
            statementId
        );
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAccounts,
    getAccountStatements,
    getAccountStatementTransactions
};
