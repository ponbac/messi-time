import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import ReorderableGroup from "../../components/ReorderableGroup";
import { fetchAllGroups } from "../../utils/dataFetcher";

const Betting: React.FC<{}> = () => {
  const [groups, setGroups] = useState<Group[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllGroups().then((groups) => {
      setGroups(groups);
      setIsLoading(false);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 my-6">
        {groups &&
          groups.map((group) => (
            <ReorderableGroup key={group.id} group={group} />
          ))}
      </div>
      <Link href="/bet/group/a">
        <div className="hover:cursor-pointer text-center bg-gradient-to-r from-primary to-secondary text-neutral transition-all w-32 hover:w-36 hover:text-neutral/80 p-2 rounded-xl font-bold">
          Games &#8594;
        </div>
      </Link>
    </motion.div>
  );
};

export default Betting;
