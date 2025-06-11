import { Link } from "react-router-dom";

const GroupList = ({ groups }) => {
  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <div key={group.id} className="p-4 bg-white rounded shadow">
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
