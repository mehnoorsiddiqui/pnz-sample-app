import { useState } from "react";
import { fetchAccountStatements, fetchAccountStatementTransactions } from "../api/accounts/route";
import { localStorageService } from "../utils/localStorageService";

export const useTransactions = (selectedAccount) => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        if (!selectedAccount) {
            alert("Please select an account!");
            return;
        }

        const access_token = localStorageService.getAccessToken();
        const accountStatements = await fetchAccountStatements(access_token, selectedAccount);
        const statementIds = accountStatements.data.statement.map((st) => st.statementId);       
        const transactionsList = await Promise.all(
            statementIds.map(async (statementId) => {
                const accountStatementTransactions = await fetchAccountStatementTransactions(
                    access_token,
                    selectedAccount,
                    statementId
                );
                return accountStatementTransactions.data.transaction;
            })
        );

        setTransactions(transactionsList.flat());
    };

    return { transactions, fetchTransactions };
};
