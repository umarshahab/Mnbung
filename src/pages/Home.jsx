import { useState } from "react";
import GroupForm from "../components/GroupForm";
import GroupList from "../components/GroupList";
import { dummyGroups } from "../data/dummyData";

const Home = () => {
  const [groups, setGroups] = useState(dummyGroups);

  const addGroup = (name) => {
    const newGroup = {
      id: Date.now(),
      name,
      transactions: [],
    };
    setGroups([...groups, newGroup]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-purple-100 via-white to-blue-100 text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold mb-4 text-indigo-700 drop-shadow">
          💰 Mnbung - Tabungan Bersama Lebih Mudah
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Buat grup tabungan, kelola transaksi, dan wujudkan impian bersama teman atau keluarga.
        </p>
      </div>

      {/* Main Content (Form + Group List) */}
      <main className="flex-grow">
        {/* Form Section */}
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-lg mb-10 transition hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
            Tambah Grup Tabungan 💼
          </h2>
          <GroupForm addGroup={addGroup} />
        </div>

        {/* Group List Section */}
        <div className="max-w-5xl mx-auto px-4 pb-20">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
            Daftar Grup Kamu 📋
          </h2>
          {groups.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada grup tabungan. Yuk buat satu!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <GroupList groups={groups} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} Mnbung by Umar. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
