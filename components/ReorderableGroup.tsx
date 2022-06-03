import { Reorder } from "framer-motion";
import { useState } from "react";
import { US } from 'country-flag-icons/react/3x2'

const GroupItem: React.FC<{ team: Team }> = ({ team }) => {
  return (
    <div className="w-44 hover:cursor-pointer hover:bg-primary/30 transition-all mx-2 flex flex-row items-center font-mono bg-gray-400/30 backdrop-blur-sm py-2 px-4 rounded-lg">
      {/* <img
        className="rounded-full p-1 ring-2 hover:ring-4 transition-all ring-primary"
        src={player.avatar}
        alt={`${player.name} avatar`}
        width={70}
        height={70}
      /> */}
      <US title={team.name} className="w-12"></US>
      <h1>{team.name}</h1>
    </div>
  );
};

const ReorderableGroup: React.FC<{ group: Group }> = ({ group }) => {
  const [groupItem, setGroup] = useState<Team[]>(group.teams);

  return (
    <div className="flex flex-col items-center">
        <p className="text-xl font-bold font-mono">Group {group.id}</p>
      <Reorder.Group
        axis="y"
        values={groupItem}
        onReorder={setGroup}
        className="pt-2 space-y-1"
      >
        {groupItem.map((item) => (
          <Reorder.Item key={item.id} value={item}>
            <GroupItem key={item.name} team={item} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default ReorderableGroup;
