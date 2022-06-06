import { match } from "assert";
import { useRouter } from "next/router";
import { FC } from "react";
import TeamFlag from "../../../components/TeamFlag";

const TeamBlock: FC<{ team: Team }> = ({ team }) => {
  const flagWidth = "4.5rem";

  const handleClick = () => {
    
  }

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={handleClick}>
      <p className="text-4xl pb-2">{team.name}</p>
      <TeamFlag team={team} width={flagWidth} />
    </div>
  );
};

const PredictMatch: FC<{}> = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const testMatch: Match = {
    id: "1",
    homeTeam: { id: "17", name: "Spain", flagCode: "ES" },
    awayTeam: { id: "18", name: "Sweden", flagCode: "SE" },
    homeGoals: 0,
    awayGoals: 2,
    date: new Date().toLocaleString(),
  };

  return (
    <div className="font-mono flex flex-row min-w-full min-h-screen items-center justify-center gap-12">
      <TeamBlock team={testMatch.homeTeam} />
      <div className="flex flex-col text-center">
        <p className="text-2xl">vs</p>
        <p className="text-sm italic">ID: {id}</p>
      </div>
      <TeamBlock team={testMatch.awayTeam} />
    </div>
  );
};

export default PredictMatch;
