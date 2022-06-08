/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TocIcon from "@mui/icons-material/Toc";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";

const Navbar: FC<{}> = ({}) => {
  return (
    <div className="hidden lg:flex flex-col min-h-screen w-24 bg-gradient-to-b from-primary to-secondary items-center">
      <Link href={`/user/pontus`}>
        <img
          className="mt-6 rounded-full p-1 ring-2 ring-secondary transition-all hover:cursor-pointer hover:ring-4"
          src={"https://avatars.dicebear.com/api/big-ears-neutral/Bakuman.svg"}
          alt={`Avatar`}
          width={60}
          height={60}
        />
      </Link>

      <Link href="/">
        <div className="mt-12 flex flex-col items-center hover:cursor-pointer hover:italic">
          <TocIcon className="fill-neutral w-12 h-12 transition-all hover:w-14 hover:h-14" />
          <p className="text-neutral font-semibold text-sm font-mono">Home</p>
        </div>
      </Link>
      <Link href="/predict">
        <div className="mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
          <SportsSoccerIcon className="fill-neutral w-12 h-12 transition-all hover:w-14 hover:h-14" />
          <p className="text-neutral font-semibold text-sm font-mono">Predict</p>
        </div>
      </Link>
      <Link href="/schedule">
        <div className="mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
          <ScheduleIcon className="fill-neutral w-12 h-12 transition-all hover:w-14 hover:h-14" />
          <p className="text-neutral font-semibold text-sm font-mono">
            Schedule
          </p>
        </div>
      </Link>
      <Link href="/logout">
        <div className="absolute bottom-3 mt-4 flex flex-col items-center hover:cursor-pointer hover:italic">
          <LogoutIcon className="fill-neutral w-12 h-12 transition-all hover:w-14 hover:h-14" />
          <p className="text-neutral font-semibold text-sm font-mono">Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
