import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline text-primary">Primary!</h1>
      <h1 className="text-3xl font-bold underline text-secondary">Secondary!</h1>
      <h1 className="text-3xl font-bold underline text-neutral">Neutral!</h1>
      <h1 className="text-3xl font-bold underline text-white">White!</h1>
    </div>
  );
};

export default Home;
