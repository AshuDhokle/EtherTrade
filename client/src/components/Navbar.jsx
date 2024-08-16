import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex items-center p-4">
      <div className="ml-10 md:flex-[0.5] flex-initial justify-center items-center">
        <h1 className="text-white text-xl mb-1">Ether Trade</h1>
      </div>
    </nav>
  );
};

export default Navbar;
