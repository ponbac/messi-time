/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const examplePlayers = [
  {
    name: "Jesperina Bergmano",
    description: "Hybrid 2000X",
    avatar: "https://avatars.dicebear.com/api/big-ears-neutral/Jesperina.svg",
    score: 72,
  },
  {
    name: "Mackovic Kjellberg",
    description: "Gigakicker",
    avatar: "https://avatars.dicebear.com/api/big-ears-neutral/Mockovic.svg",
    score: 59,
  },
  {
    name: "Nelson Seijsing",
    description: "Sleeping Hinata",
    avatar: "https://avatars.dicebear.com/api/big-ears-neutral/Nelson.svg",
    score: 55,
  },
  {
    name: "Pontus Backman",
    description: "Admino",
    avatar: "https://avatars.dicebear.com/api/big-ears-neutral/Bakuman.svg",
    score: 99,
  },
  {
    name: "Sven-Erik Svedberg",
    description: "Winter is coming",
    avatar: "https://avatars.dicebear.com/api/big-ears-neutral/Svedbo.svg",
    score: 38,
  },
];

const PlayerItem: FC<{
  rank: number;
  player: Player;
}> = ({ rank, player }) => {
  return (
    <div className="hover:cursor-pointer hover:bg-primary/40 transition-all mx-2 flex flex-row items-center gap-5 lg:gap-11 font-mono bg-gray-400/40 backdrop-blur-sm py-2 px-4 rounded-lg">
      <h1 className={`text-4xl font-bold`}>{rank}.</h1>
      <img
        className="rounded-full p-1 ring-2 hover:ring-4 transition-all ring-primary"
        src={player.avatar}
        alt={`${player.name} avatar`}
        width={70}
        height={70}
      />
      <div className="lg:w-72">
        <h1 className="text-xl font-bold">{player.name}</h1>
        <h1 className="text-sm text-gray-400">{player.description}</h1>
      </div>
      <h1 className="text-3xl font-bold">{player.score}p</h1>
    </div>
  );
};

const PlayerList: FC<{ players: Player[] }> = ({ players }) => {
  players.sort((a, b) => b.score - a.score);
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
    <div className="h-full mb-6">
      <PlayerList players={examplePlayers} />
    </div>
  );
};

export default Leaderboard;
