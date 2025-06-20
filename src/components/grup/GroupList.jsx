import { Link } from "react-router-dom"

export default function GroupList({ groups }) {
  return (
    <div className="space-y-3">
      {groups.map((group) => (
        <Link
          key={group.id}
          to={`/group/${group.id}`}
          className="block p-4 bg-white shadow rounded hover:bg-gray-100"
        >
          <h2 className="text-lg font-semibold">{group.nama}</h2>
        </Link>
      ))}
    </div>
  )
}
