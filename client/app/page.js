"use client"; // Enable client-side behavior

import { useAuth } from "./hooks/useAuth";
import { useAccounts } from "./hooks/useAccounts";
import { useTransactions } from "./hooks/useTransactions";
import AccountSelector from "./components/AccountSelector";
import TransactionList from "./components/TransactionList";

export default function Home() {
    const { isLoggedIn, loading, handleLogin, handleLogout } = useAuth();
    const { accounts, selectedAccount, setSelectedAccount } = useAccounts(isLoggedIn);
    const { transactions, fetchTransactions } = useTransactions(selectedAccount);

    if (!isLoggedIn) {
        return (
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <button onClick={handleLogin} disabled={loading}>
                    Login
                </button>
                <h1>You need to log in to view your account dashboard</h1>
            </div>
        );
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
             <button onClick={handleLogout} disabled={loading}>
                    Logout
                </button>
            <h1>Account Dashboard</h1>
            <AccountSelector
                accounts={accounts}
                selectedAccount={selectedAccount}
                onSelectAccount={setSelectedAccount}
            />
            <button onClick={fetchTransactions} disabled={loading}>
                {loading ? "Loading..." : "Get Transactions"}
            </button>
            <TransactionList transactions={transactions} />
        </div>
    );
}