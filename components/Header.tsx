import { FC } from "react";

const Header: FC<{text: string}> = ({text}) => {
    return (
        <div className="pt-5 text-center flex flex-row items-center justify-center sticky top-0 ">
            <h1 className="font-novaMono font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-primary to-[#f882bd]">
              {text}
            </h1>
        </div>
    );
};

export default Header;