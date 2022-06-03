import { NO, SE } from "country-flag-icons/react/3x2";
import ReorderableGroup from "../components/ReorderableGroup";

const exampleGroupA = {
  id: "A",
  teams: [
    { id: "1", name: "Sweden", flagCode: "SE" },
    { id: "2", name: "Norway", flagCode: "NO" },
    { id: "3", name: "Denmark", flagCode: "DK" },
    { id: "4", name: "Argentina", flagCode: "AR" },
  ],
};

const exampleGroupB = {
    id: "B",
    teams: [
      { id: "5", name: "Brazil", flagCode: "BR" },
      { id: "6", name: "England", flagCode: "GB" },
      { id: "7", name: "Belgium", flagCode: "BE" },
      { id: "8", name: "Finland", flagCode: "FI" },
    ],
  };

  const exampleGroupC = {
    id: "C",
    teams: [
      { id: "9", name: "Italy", flagCode: "IT" },
      { id: "10", name: "Uruguay", flagCode: "UY" },
      { id: "11", name: "Peru", flagCode: "PE" },
      { id: "12", name: "USA", flagCode: "US" },
    ],
  };

  const exampleGroupD = {
    id: "D",
    teams: [
      { id: "13", name: "Canada", flagCode: "CA" },
      { id: "14", name: "Mexico", flagCode: "MX" },
      { id: "15", name: "Spain", flagCode: "ES" },
      { id: "16", name: "Japan", flagCode: "JP" },
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
