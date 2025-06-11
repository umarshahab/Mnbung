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
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">Mnbung</h1>
      <GroupForm addGroup={addGroup} />
      <GroupList groups={groups} />
    </div>
  );
};

export default Home;
