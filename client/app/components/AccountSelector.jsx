const AccountSelector = ({ accounts, selectedAccount, onSelectAccount }) => (
    <div style={{ marginBottom: "20px" }}>
        <label htmlFor="accounts" style={{ marginRight: "10px" }}>
            Select an Account:
        </label>
        <select
            id="accounts"
            value={selectedAccount}
            onChange={(e) => onSelectAccount(e.target.value)}
        >
            <option value="">-- Select an Account --</option>
            {accounts.map((accountId) => (
                <option key={accountId} value={accountId}>
                    {accountId}
                </option>
            ))}
        </select>
    </div>
);

export default AccountSelector;
