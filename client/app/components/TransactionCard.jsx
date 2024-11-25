const TransactionCard = ({ transactionId, transaction }) => {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                width: "300px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h3 style={{ margin: "0 0 8px" }}>
                {new Date(transaction.bookingDateTime).toLocaleDateString()}
            </h3>
            <p style={{ margin: "4px 0" }}>
                <strong>Description:</strong>{" "}
                {transaction.transactionInformation || "No description available"}
            </p>
            <p
                style={{
                    margin: "4px 0",
                    color: transaction.creditDebitIndicator === "Credit" ? "green" : "red",
                }}
            >
                <strong>Amount:</strong> {transaction.amount.amount} {transaction.amount.currency}
            </p>
            <p style={{ margin: "4px 0" }}>
                <strong>Type:</strong> {transaction.creditDebitIndicator}
            </p>
            <p style={{ margin: "4px 0" }}>
                <strong>Status:</strong> {transaction.status}
            </p>
        </div>
    );
};

export default TransactionCard;
