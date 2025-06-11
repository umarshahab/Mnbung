import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    const date = new Date().toISOString().split("T")[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      addTransaction({
        id: Date.now(),
        name,
        amount: parseInt(amount),
        image: reader.result,
        date,
      });
      setName("");
      setAmount("");
      setImage(null);
    };

    if (image) {
      reader.readAsDataURL(image);
    } else {
      addTransaction({
        id: Date.now(),
        name,
        amount: parseInt(amount),
        image: "",
        date,
      });
      setName("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-4">
      <input
        type="text"
        placeholder="Nama transaksi"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <input
        type="number"
        placeholder="Nominal"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Tambah Transaksi
      </button>
    </form>
  );
};

export default TransactionForm;
