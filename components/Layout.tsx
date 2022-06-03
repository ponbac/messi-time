/* eslint-disable @next/next/no-page-custom-font */
import { motion } from "framer-motion";
import Head from "next/head";
import { ReactNode, useState } from "react";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [introVisible, setIntroVisible] = useState(true);
  const introDuration: number = 3.0;

  return (
    <>
      <Head>
        <title>Backman - Qatar 2022</title>
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
      <div className="min-h-screen flex flex-col">
        {introVisible && (
          <motion.div
            className="min-h-screen flex items-center justify-center"
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
            <h1 className="text-center animate-bounce h-full lg:h-48 font-novaMono font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-primary to-[#f882bd]">
              It&apos;s betting time!
            </h1>
          </motion.div>
        )}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: introDuration }}
          className="min-h-screen flex flex-row"
        >
          <Navbar />
          <div className="flex flex-col flex-1">
            {/* <Header text="QATAR 2022" />
            <div className="flex flex-col flex-0 justify-center items-center pt-20">
              <Leaderboard />
            </div> */}
            <main>{children}</main>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
