import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import TeamFlag from "../../../components/TeamFlag";

const TeamBlock: FC<{
  team: Team;
  selected: boolean;
  toggleSelectedTeam: (team: Team) => void;
}> = ({ team, selected, toggleSelectedTeam }) => {
  const flagWidth = "4.5rem";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggleSelectedTeam(team);
  };

  return (
    <button
      className={
        "flex flex-col items-center w-52 p-4 rounded-xl " +
        (selected == true ? "bg-green-600/40" : "")
      }
      onClick={handleClick}
    >
      <p className="text-4xl pb-2">{team.name}</p>
      <TeamFlag team={team} width={flagWidth} />
    </button>
  );
};

const PredictMatch: FC<{}> = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const teamClickHandler = (team: Team) => {
    if (selectedTeam?.id == team.id) {
      setSelectedTeam(undefined);
    } else {
      setSelectedTeam(team);
    }
  };

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
      <TeamBlock
        team={testMatch.homeTeam}
        selected={testMatch.homeTeam.id == selectedTeam?.id}
        toggleSelectedTeam={teamClickHandler}
      />
      <div className="flex flex-col text-center">
        <p className="text-2xl">vs</p>
        <p className="text-sm italic">ID: {id}</p>
      </div>
      <TeamBlock
        team={testMatch.awayTeam}
        selected={testMatch.awayTeam.id == selectedTeam?.id}
        toggleSelectedTeam={teamClickHandler}
      />
    </div>
  );
};

export default PredictMatch;
