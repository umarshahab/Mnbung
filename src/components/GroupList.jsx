import { Link } from "react-router-dom";

const GroupList = ({ groups }) => {
  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <div key={group.id} className="max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-lg mb-10 transition hover:shadow-2xl">
          <h2 className="text-xl font-semibold">{group.name}</h2>
          <Link to={`/group/${group.id}`} className="text-blue-600 hover:underline">
            Lihat Detail
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
