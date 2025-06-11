import { useState } from "react";

const GroupForm = ({ addGroup }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addGroup(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Nama grup tabungan"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 rounded hover:bg-green-600">
        Tambah
      </button>
    </form>
  );
};

export default GroupForm;
