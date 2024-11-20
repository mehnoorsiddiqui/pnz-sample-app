import axios from "axios";
import { API_BASE_URL } from "../../utils/config";

export const fetchAccounts = async (accessToken) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getAccounts`, {
            headers: {
                Authorization: accessToken,
            }
        });
        console.log("Accounts:", response.data.accounts);
        return response.data.accounts;
    } catch (error) {
        console.error("Error fetching account statements:", error.response?.data || error.message);
        throw error;
    }
};

export const fetchAccountStatements = async (accessToken, accountId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getAccountStatements`, {
            headers: {
                Authorization: accessToken,
            },
            params: {
                accountId,
            },
        });
        console.log("Account Statements:", response.data.accountStatements);
        return response.data.accountStatements;
    } catch (error) {
        console.error("Error fetching account statements:", error.response?.data || error.message);
        throw error;
    }
};

export const fetchAccountStatementTransactions = async (accessToken, accountId,statementId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getAccountStatementTransactions`, {
            headers: {
                Authorization: accessToken,
            },
            params: {
                accountId,
                statementId
            },
        });
        console.log("Account Statement Transactions:", response.data.accountStatementTransactions);
        return response.data.accountStatementTransactions;
    } catch (error) {
        console.error("Error fetching account statement transactions:", error.response?.data || error.message);
        throw error;
    }
};
