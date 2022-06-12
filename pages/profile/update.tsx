/* eslint-disable @next/next/no-page-custom-font */
import { motion } from "framer-motion";
import type { NextPage } from "next";

const UpdateProfile: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>UPDATE PROFILE!</p>
    </motion.div>
  );
};

export default UpdateProfile;
