import {
  IconArrowsMaximize,
  IconArrowsDiagonalMinimize2,
} from "@tabler/icons-react";
import clsx from "clsx";

const Header = ({ handleClick, maximize, icon, text }) => {
  return (
    <div className="bg-black text-white text-center flex justify-center relative">
      {icon}
      {text}
      <button className="absolute right-0" onClick={handleClick}>
        <IconArrowsMaximize className={clsx({ hidden: maximize })} />
        <IconArrowsDiagonalMinimize2 className={clsx({ hidden: !maximize })} />
      </button>
    </div>
  );
};

export default Header;
