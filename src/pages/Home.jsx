import { useEffect, useState } from "react"
import { fetchGrup } from "../services/supabase"
import GroupList from "../components/grup/GroupList"

export default function Home() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetchGrup().then(setGroups).catch(console.error)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 border-b pb-2">
          💰 Grup Tabungan
        </h1>

        {groups.length === 0 ? (
          <div className="bg-white p-6 rounded shadow text-gray-500 text-center">
            Belum ada grup tabungan tersedia.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GroupList groups={groups} />
          </div>
        )}
      </div>
    </div>
  )
}
