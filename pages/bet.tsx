import ReorderableGroup from "../components/ReorderableGroup";

const exampleGroupA = {
  id: "A",
  teams: [
    { id: "1", name: "Qatar", flagCode: "QA" },
    { id: "2", name: "Ecuador", flagCode: "EC" },
    { id: "3", name: "Senegal", flagCode: "SN" },
    { id: "4", name: "Netherlands", flagCode: "NL" },
  ],
};

const exampleGroupB = {
  id: "B",
  teams: [
    { id: "5", name: "England", flagCode: "GB" },
    { id: "6", name: "Iran", flagCode: "IR" },
    { id: "7", name: "USA", flagCode: "US" },
    { id: "8", name: "Unknown", flagCode: "SE" },
  ],
};

const exampleGroupC = {
  id: "C",
  teams: [
    { id: "9", name: "Argentina", flagCode: "AR" },
    { id: "10", name: "Saudi Arabia", flagCode: "SA" },
    { id: "11", name: "Mexico", flagCode: "MX" },
    { id: "12", name: "Poland", flagCode: "PL" },
  ],
};

const exampleGroupD = {
  id: "D",
  teams: [
    { id: "13", name: "France", flagCode: "FR" },
    { id: "14", name: "Unknown", flagCode: "SE" },
    { id: "15", name: "Denmark", flagCode: "DK" },
    { id: "16", name: "Tunisia", flagCode: "TN" },
  ],
};

const exampleGroupE = {
  id: "E",
  teams: [
    { id: "17", name: "Spain", flagCode: "ES" },
    { id: "18", name: "Unknown", flagCode: "SE" },
    { id: "19", name: "Germany", flagCode: "DE" },
    { id: "20", name: "Japan", flagCode: "JP" },
  ],
};

const exampleGroupF = {
  id: "F",
  teams: [
    { id: "21", name: "Belgium", flagCode: "BE" },
    { id: "22", name: "Canada", flagCode: "CA" },
    { id: "23", name: "Morocco", flagCode: "MA" },
    { id: "24", name: "Croatia", flagCode: "HR" },
  ],
};

const exampleGroupG = {
  id: "G",
  teams: [
    { id: "25", name: "Italy", flagCode: "IT" },
    { id: "26", name: "Uruguay", flagCode: "UY" },
    { id: "27", name: "Peru", flagCode: "PE" },
    { id: "28", name: "USA", flagCode: "US" },
  ],
};

const exampleGroupH = {
  id: "H",
  teams: [
    { id: "29", name: "Brazil", flagCode: "BR" },
    { id: "30", name: "Serbia", flagCode: "RS" },
    { id: "31", name: "Switzerland", flagCode: "CH" },
    { id: "32", name: "Cameroon", flagCode: "CM" },
  ],
};

const Betting: React.FC<{}> = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-4 gap-12">
        <ReorderableGroup group={exampleGroupA} />
        <ReorderableGroup group={exampleGroupB} />
        <ReorderableGroup group={exampleGroupC} />
        <ReorderableGroup group={exampleGroupD} />
        <ReorderableGroup group={exampleGroupE} />
        <ReorderableGroup group={exampleGroupF} />
        <ReorderableGroup group={exampleGroupG} />
        <ReorderableGroup group={exampleGroupH} />
      </div>
    </div>
  );
};

export default Betting;
