import { motion } from "framer-motion";
import moment from "moment";
import { NextPage } from "next";
import React, { FC } from "react";
import TeamFlag from "../components/TeamFlag";
import { useGames } from "../utils/dataFetcher";

const TeamBlock: FC<{
  team: Team;
}> = ({ team }) => {
  const flagWidth = "2.25rem";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <button
      className={
        "gap-2 bg-gray-400/30 backdrop-blur-sm py-2 px-4 flex flex-row items-center justify-between w-60 p-4 rounded-xl transition-all"
      }
      onClick={handleClick}
    >
      <p className="text-lg font-normal">{team.name}</p>
      <TeamFlag team={team} width={flagWidth} />
    </button>
  );
};

const GameBlock: FC<{ game: Game }> = ({ game }) => {
  let date = moment(game.date).format("dddd DD/MM, HH:mm");

  return (
    <div className="font-mono flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-8 mb-10 lg:mb-0">
      <TeamBlock team={game.homeTeam} />
      <div className="flex flex-col text-center w-44">
        <p className="text-2xl">vs</p>
        <p className="text-xs italic">{date}</p>
      </div>
      <TeamBlock team={game.awayTeam} />
    </div>
  );
};

const Schedule: NextPage<{}> = ({}) => {
  const { games, isLoading, isError } = useGames();

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="loading-indicator">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-mono flex flex-col items-center justify-center my-10">
      <motion.div
        className="flex flex-col items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
          Schedule
        </h1>
        {games && games?.map((game) => <GameBlock key={game.id} game={game} />)}
      </motion.div>
    </div>
  );
};

export default Schedule;
