import { FC } from "react";

const Header: FC<{}> = () => {
    return (
        <div className="pt-5 flex flex-row items-center justify-center sticky top-0">
            <h1 className="font-novaMono font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-primary to-[#f882bd]">
              QATAR 2022
            </h1>
        </div>
    );
};

export default Header;