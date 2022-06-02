/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const examplePlayers = [
  {
    name: "Jesperina Bergmano",
    description: "Hybrid 2000X",
    avatar: "https://i.pravatar.cc/300",
    score: 72,
  },
  {
    name: "Mackovic Kjellberg",
    description: "Gigakicker",
    avatar: "https://i.pravatar.cc/301",
    score: 59,
  },
  {
    name: "Nelson Seijsing",
    description: "Sleeping Hinata",
    avatar: "https://i.pravatar.cc/302",
    score: 55,
  },
  {
    name: "Pontus Backman",
    description: "Admino",
    avatar: "https://i.pravatar.cc/303",
    score: 39,
  },
];

const PlayerItem: FC<{
  rank: number;
  player: Player;
}> = ({ rank, player }) => {
  return (
    <div className="flex flex-row items-center gap-11 font-mono bg-gray-400/30 backdrop-blur-sm py-2 px-4 rounded-lg">
      <h1 className="text-4xl font-bold">{rank}.</h1>
      <img
        className="rounded-full p-1 ring-2 ring-primary"
        src={player.avatar}
        alt={`${player.name} avatar`}
        width={70}
        height={70}
      />
      <div className="w-72">
        <h1 className="text-xl font-bold">{player.name}</h1>
        <h1 className="text-sm text-gray-600">{player.description}</h1>
      </div>
      <h1 className="text-3xl font-bold">{player.score} P</h1>
    </div>
  );
};

const PlayerList: FC<{ players: Player[] }> = ({ players }) => {
  return (
    <ul className="space-y-2">
      {players.map((player, index) => {
        return <PlayerItem key={index} rank={index + 1} player={player} />;
      })}
    </ul>
  );
};

const Leaderboard: FC<{}> = () => {
  return (
    <div className="h-full pt-10">
      <PlayerList players={examplePlayers} />
    </div>
  );
};

export default Leaderboard;
