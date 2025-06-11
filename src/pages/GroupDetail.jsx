import { useParams } from "react-router-dom";
import { useState } from "react";
import { dummyGroups } from "../data/dummyData";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

const GroupDetail = () => {
  const { id } = useParams();
  const groupId = parseInt(id);
  const group = dummyGroups.find((g) => g.id === groupId);
  const [transactions, setTransactions] = useState(group.transactions || []);

  const addTransaction = (tx) => {
    setTransactions([...transactions, tx]);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{group?.name}</h2>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default GroupDetail;
