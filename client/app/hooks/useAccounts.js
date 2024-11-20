import { useState, useEffect } from "react";
import { fetchAccounts } from "../api/accounts/route";
import { localStorageService } from "../utils/localStorageService";

export const useAccounts = (isLoggedIn) => {
    const [accounts, setAccounts] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState("");

    useEffect(() => {
        const access_token = localStorageService.getAccessToken();
        if (access_token) {
            fetchAccounts(access_token).then((response) => {
                setAccounts(response.data.account.map((acc) => acc.accountId));
            });
        }
    }, [isLoggedIn]);

    return { accounts, selectedAccount, setSelectedAccount };
};
