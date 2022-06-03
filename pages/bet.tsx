import ReorderableGroup from "../components/ReorderableGroup";

const exampleGroup = {
  id: "A",
  teams: [
    { id: "1", name: "Sweden" },
    { id: "2", name: "Norway" },
    { id: "3", name: "Denmark" },
    { id: "4", name: "Argentina" },
  ],
};

const Betting: React.FC<{}> = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <ReorderableGroup group={exampleGroup} />
    </div>
  );
};

export default Betting;
