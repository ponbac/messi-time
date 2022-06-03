import ReorderableGroup from "../components/ReorderableGroup";

const exampleGroupA = {
  id: "A",
  teams: [
    { id: "1", name: "Sweden" },
    { id: "2", name: "Norway" },
    { id: "3", name: "Denmark" },
    { id: "4", name: "Argentina" },
  ],
};

const exampleGroupB = {
    id: "B",
    teams: [
      { id: "5", name: "Brazil" },
      { id: "6", name: "England" },
      { id: "7", name: "Belgium" },
      { id: "8", name: "Finland" },
    ],
  };

  const exampleGroupC = {
    id: "C",
    teams: [
      { id: "9", name: "Italy" },
      { id: "10", name: "Wales" },
      { id: "11", name: "Peru" },
      { id: "12", name: "USA" },
    ],
  };

  const exampleGroupD = {
    id: "D",
    teams: [
      { id: "13", name: "Canada" },
      { id: "14", name: "Mexico" },
      { id: "15", name: "Spain" },
      { id: "16", name: "Japan" },
    ],
  };

const Betting: React.FC<{}> = () => {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center gap-8">
      <ReorderableGroup group={exampleGroupA} />
      <ReorderableGroup group={exampleGroupB} />
      <ReorderableGroup group={exampleGroupC} />
      <ReorderableGroup group={exampleGroupD} />
    </div>
  );
};

export default Betting;
