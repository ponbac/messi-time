/* eslint-disable @next/next/no-page-custom-font */
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { SessionInfoButton, SignInButton, SignOutButton } from "../components/auth/Buttons";
import Header from "../components/Header";
import Leaderboard from "../components/Leaderboard";

const Home: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header text="QATAR 2022" />
      <div className="flex flex-col flex-0 justify-center items-center pt-20">
        <Leaderboard />
      </div>
      <SessionInfoButton />
    </motion.div>
  );
};

export default Home;
