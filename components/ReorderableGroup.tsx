import { Reorder } from "framer-motion";
import { useState } from "react";

const GroupItem: React.FC<{ team: Team }> = ({ team }) => {
  return (
    <div className="bg-primary w-36 h-15">
      <p>{team.name}</p>
    </div>
  );
};

const ReorderableGroup: React.FC<{ group: Group }> = ({ group }) => {
  const [groupItem, setGroup] = useState<Team[]>(group.teams);

  return (
    // <div className="space-y-1">
    //   {group.map((team, index) => {
    //     return ;
    //   })}
    // </div>
    <Reorder.Group
      axis="y"
      values={groupItem}
      onReorder={setGroup}
      className="space-y-1"
    >
      {groupItem.map((item) => (
        <Reorder.Item key={item.id} value={item}>
          <GroupItem key={item.name} team={item} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default ReorderableGroup;
