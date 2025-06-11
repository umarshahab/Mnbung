const TransactionList = ({ transactions }) => {
  return (
    <ul className="space-y-2">
      {transactions.map((tx) => (
        <li key={tx.id} className="border p-4 rounded shadow bg-white">
          <p><strong>{tx.name}</strong></p>
          <p>Rp{tx.amount.toLocaleString()}</p>
          <p>{tx.date}</p>
          {tx.image && <img src={tx.image} alt="Bukti" className="w-32 mt-2" />}
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
