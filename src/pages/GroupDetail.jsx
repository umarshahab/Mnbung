import { useParams } from "react-router-dom";
import { useState } from "react";
import { dummyGroups } from "../data/dummyData";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { PiggyBank, FileText } from "lucide-react";

const GroupDetail = () => {
  const { id } = useParams();
  const groupId = parseInt(id);
  const group = dummyGroups.find((g) => g.id === groupId);
  const [transactions, setTransactions] = useState(group?.transactions || []);

  const addTransaction = (tx) => {
    setTransactions([...transactions, tx]);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Judul Grup */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-gray-800 flex justify-center items-center gap-2">
            <PiggyBank className="text-indigo-600 w-8 h-8" />
            {group?.name}
          </h2>
          <p className="text-gray-600">Lihat dan kelola transaksi dalam grup ini</p>
        </div>

        {/* Form Tambah Transaksi */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
            <FileText className="w-5 h-5" /> Tambah Transaksi
          </h3>
          <TransactionForm addTransaction={addTransaction} />
        </div>

        {/* Daftar Transaksi */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
            <FileText className="w-5 h-5" /> Riwayat Transaksi
          </h3>
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
