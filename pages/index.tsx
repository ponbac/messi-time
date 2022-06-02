/* eslint-disable @next/next/no-page-custom-font */
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Leaderboard from "../components/Leaderboard";

const Home: NextPage = () => {
  const [introVisible, setIntroVisible] = useState(true);
  const introDuration: number = 3.0;

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {introVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: introDuration }}
            onAnimationStart={() =>
              document.body.classList.add("overflow-hidden")
            }
            onAnimationComplete={() => {
              document.body.classList.remove("overflow-hidden");
              setIntroVisible(false);
            }}
          >
            <h1 className="h-28 font-novaMono font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-primary to-[#f882bd]">
              It&apos;s betting time!
            </h1>
          </motion.div>
        )}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: introDuration }}
        >
          <Leaderboard />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
