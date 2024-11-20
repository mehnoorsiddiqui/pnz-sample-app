import TransactionCard from "./TransactionCard";

const TransactionList = ({ transactions }) => (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Transactions</h1>
        {transactions.length === 0 ? (
            <p>No transactions to display.</p>
        ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {transactions.map((transaction, index) => (
                    <TransactionCard key={index} transaction={transaction} />
                ))}
            </div>
        )}
    </div>
);

export default TransactionList;
