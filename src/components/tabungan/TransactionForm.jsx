// src/components/tabungan/TransactionForm.jsx
import { useState } from "react"
import { insertTabungan, uploadBukti } from "../../services/supabase"
import { v4 as uuidv4 } from "uuid"

export default function TransactionForm({ grupId, onSuccess }) {
  const [judul, setJudul] = useState("")
  const [nominal, setNominal] = useState("")
  const [file, setFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let bukti_url = ""

    if (file) {
      const filename = `${uuidv4()}-${file.name}`
      await uploadBukti(file, filename)
      bukti_url = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/bukti/${filename}`
    }

    await insertTabungan({
      grup_id: grupId,
      judul,
      nominal: parseInt(nominal),
      bukti_url,
      created_at: new Date().toISOString()
    })

    setJudul("")
    setNominal("")
    setFile(null)
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <input
        className="w-full border p-2 mb-2"
        placeholder="Judul"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        required
      />
      <input
        className="w-full border p-2 mb-2"
        placeholder="Nominal"
        type="number"
        value={nominal}
        onChange={(e) => setNominal(e.target.value)}
        required
      />
      <input
        className="w-full border p-2 mb-2"
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Tambah Tabungan</button>
    </form>
  )
}
