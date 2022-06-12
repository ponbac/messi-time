/* eslint-disable @next/next/no-page-custom-font */
import { motion } from "framer-motion";
import Head from "next/head";
import { FC, ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { isLoggedIn, SUPABASE } from "../utils/dataFetcher";
import { SessionInfoButton, SignInButton, SignOutButton } from "./auth/Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthState,
  signedIn,
  signedOut,
} from "../features/auth/authSlice";
import { NextPage } from "next";
import { sleep } from "../utils/utils";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";

const Header: FC<{}> = () => {
  return (
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
  );
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { authStatus } = router.query;
  
  const [introVisible, setIntroVisible] = useState(true);
  const introDuration: number = 3.0;

  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  // TODO THIS IS BAD!
  const microSleep = async () => {
    await sleep(10);
  }

  useEffect(() => {
    microSleep();
    const user = SUPABASE.auth.user();
    if (user) {
      dispatch(signedIn(user));
    } else {
      dispatch(signedOut());
    }
  }, [dispatch]);

  // TODO Not good...
  if (authStatus == "success") {
    microSleep();
    const user = SUPABASE.auth.user();
    if (user) {
      dispatch(signedIn(user));
    } else {
      dispatch(signedOut());
    }
  }

  if (!authState.isAuthenticated) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <SignInButton />
          {authState.isAuthenticated ? 'LOGGED IN' : 'LOGGED OUT'}
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
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
            <h1 className="text-center animate-bounce h-full lg:h-48 font-novaMono font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
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
          <div className="fixed">
            <Navbar />
          </div>
          <div className="flex flex-col flex-1">
            <main>{children}</main>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
