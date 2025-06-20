import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchTabunganByGrup } from "../services/supabase"
import TransactionList from "../components/tabungan/TransactionList"
import TransactionForm from "../components/tabungan/TransactionForm"

export default function GroupDetail() {
  const { id } = useParams()
  const [transactions, setTransactions] = useState([])

  const loadData = () =>
    fetchTabunganByGrup(id).then(setTransactions).catch(console.error)

  useEffect(() => {
    loadData()
  }, [id])

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Detail Tabungan</h2>
      <TransactionForm grupId={id} onSuccess={loadData} />
      <TransactionList transactions={transactions} />
    </div>
  )
}
