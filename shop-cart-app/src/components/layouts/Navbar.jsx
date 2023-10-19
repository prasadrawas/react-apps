import React, { useState } from "react";
import { imgLogo } from "../../assets/images";
import { SearchBar } from "../search";
import MenuOptions from "./MenuOptions";
import AccountSection from "./AccountSection";
import { HiOutlineMenu } from "react-icons/hi";
import MenuList from "./MenuList";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="flex items-center justify-between md:justify-evenly p-3 space-x-8 shadow-sm relative px-5"
      data-aos="fade-in"
      data-aos-duration="800"
      data-aos-easing="ease-in"
    >
      {/* logo section  */}
      <img src={imgLogo} alt="" className="h-8 cursor-pointer" />

      {/* menu section */}
      <MenuOptions className={"hidden lg:block"} />

      {/* search section  */}
      <SearchBar className={"hidden lg:block"} />

      {/* account section  */}
      <AccountSection className={"hidden md:block"} />

      {/* hamburger menu button */}
      <HiOutlineMenu
        className="font-bold cursor-pointer lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Menu list */}
      {showMenu && (
        <MenuList
          className={"absolute z-50 right-0 top-16 shadow-md p-5 md:hidden bg-white"}
        />
      )}
    </div>
  );
}

export default Navbar;
