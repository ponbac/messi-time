/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const Navbar: FC<{}> = ({}) => {
  return (
    <div className="flex flex-col w-20 bg-gradient-to-b from-primary to-secondary items-center">
        <img
        className="mt-4 rounded-full p-1 ring-2 ring-secondary transition-all hover:cursor-pointer hover:ring-4"
        src={'https://i.pravatar.cc/305'}
        alt={`Avatar`}
        width={60}
        height={60}
      />
    </div>
  );
};

export default Navbar;
