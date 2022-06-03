/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ScheduleIcon from '@mui/icons-material/Schedule';
import TocIcon from '@mui/icons-material/Toc';
import LogoutIcon from '@mui/icons-material/Logout';
import { Icon } from "@mui/material";

const Navbar: FC<{}> = ({}) => {
  return (
    <div className="flex flex-col min-h-screen w-24 bg-gradient-to-b from-primary to-secondary items-center">
      <img
        className="mt-6 rounded-full p-1 ring-2 ring-secondary transition-all hover:cursor-pointer hover:ring-4"
        src={"https://i.pravatar.cc/305"}
        alt={`Avatar`}
        width={60}
        height={60}
      />
      <div className="mt-12 flex flex-col items-center hover:cursor-pointer hover:italic">
        <TocIcon className="fill-neutral w-12 h-12 transition-all hover:w-14 hover:h-14" />
        <p className="text-neutral font-semibold text-sm font-mono">Home</p>
      </div>
      <div className="mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
        <SportsSoccerIcon className="fill-neutral w-12 h-12 transition-all hover:w-14 hover:h-14" />
        <p className="text-neutral font-semibold text-sm font-mono">Bet</p>
      </div>
      <div className="mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
        <ScheduleIcon className="fill-neutral w-12 h-12 transition-all hover:w-14 hover:h-14" />
        <p className="text-neutral font-semibold text-sm font-mono">Schedule</p>
      </div>
      <div className="absolute bottom-3 mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
        <LogoutIcon className="fill-neutral w-12 h-12 transition-all hover:w-14 hover:h-14" />
        <p className="text-neutral font-semibold text-sm font-mono">Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
