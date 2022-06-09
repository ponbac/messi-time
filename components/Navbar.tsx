/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TocIcon from "@mui/icons-material/Toc";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { getCurrentUser } from "../utils/dataFetcher";

const Navbar: FC<{}> = ({}) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user ? user : undefined);
  }, []);

  return (
    <div className="hidden lg:flex flex-col min-h-screen w-24 bg-gradient-to-l from-primary to-secondary items-center">
      <Link href={`/user/pontus`}>
        <img
          className="mt-6 rounded-full p-1 ring-2 ring-secondary transition-all hover:cursor-pointer hover:ring-4"
          src={
            user
              ? user.user_metadata.avatar_url
              : "https://avatars.dicebear.com/api/big-ears-neutral/Bakuman.svg"
          }
          alt={`Avatar`}
          width={60}
          height={60}
        />
      </Link>

      <Link href="/">
        <div className="mt-12 flex flex-col items-center hover:cursor-pointer hover:italic">
          <TocIcon className="fill-white w-12 h-12 transition-all hover:w-14 hover:h-14" />
          <p className="text-white font-semibold text-sm font-mono">Home</p>
        </div>
      </Link>
      <Link href="/predict">
        <div className="mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
          <SportsSoccerIcon className="fill-white w-12 h-12 transition-all hover:w-14 hover:h-14" />
          <p className="text-white font-semibold text-sm font-mono">Predict</p>
        </div>
      </Link>
      <Link href="/schedule">
        <div className="mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
          <ScheduleIcon className="fill-white w-12 h-12 transition-all hover:w-14 hover:h-14" />
          <p className="text-white font-semibold text-sm font-mono">Schedule</p>
        </div>
      </Link>
      <Link href="/halloffame">
        <div className="mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
          <EmojiEventsIcon className="fill-white w-12 h-12 transition-all hover:w-14 hover:h-14" />
          <p className="text-white font-semibold text-sm font-mono">HoF</p>
        </div>
      </Link>
      <Link href="/logout">
        <div className="absolute bottom-3 mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
          <LogoutIcon className="fill-white w-12 h-12 transition-all hover:w-14 hover:h-14" />
          <p className="text-white font-semibold text-sm font-mono">Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
