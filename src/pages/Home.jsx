import { useEffect, useState } from "react"
import { fetchGrup } from "../services/supabase"
import GroupList from "../components/grup/GroupList"

export default function Home() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetchGrup().then(setGroups).catch(console.error)
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Grup Tabungan</h1>
      <GroupList groups={groups} />
    </div>
  )
}