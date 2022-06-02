import { FC } from "react";

const examplePlayer = {
  name: "Jesperina Tanned",
  avatar: "https://i.pravatar.cc/300",
  score: 72,
};

const PlayerItem: FC<{ name: string; avatar: string; score: number }> = ({
  name,
  avatar,
  score,
}) => {
  return (
    <div className="flex flex-row items-center">
      <h1>{name}</h1>
      <h1>{avatar}</h1>
      <h1>{score}</h1>
    </div>
  );
};

const Leaderboard: FC<{}> = () => {
  return (
    <div className="h-full">
      <PlayerItem
        name={examplePlayer.name}
        avatar={examplePlayer.avatar}
        score={examplePlayer.score}
      />
    </div>
  );
};

export default Leaderboard;
