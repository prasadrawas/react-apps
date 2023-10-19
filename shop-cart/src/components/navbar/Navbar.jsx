import React from "react";
import { logoUrl } from "../../constants/ImageConstants";
import {
  HiOutlineChevronDown,
  HiShoppingCart,
  HiOutlineMenu,
} from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import IconMenu from "./IconMenu";
import CategoryDialog from "./CategoryDialog";
import { useState } from "react";
import SearchBar from "./SearchBar";

function Navbar() {
  const [showCategory, setShowCategory] = useState(false);

  const onCategoryClick = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div className="flex items-center justify-between md:justify-evenly py-4 px-6 md:px-0 shadow-sm">
      {/* logo */}
      <div className="hover:scale-110 transition-all duration-300 ease-in cursor-pointer">
        <img src={logoUrl} alt="" className="h-10" />
      </div>

      {/* Navbar menu */}
      <div className="hidden lg:block">
        <div className="flex gap-6 font-semibold">
          <p
            className="flex items-center cursor-pointer"
            onClick={onCategoryClick}
          >
            Category{" "}
            <span>
              <HiOutlineChevronDown className="text-slate-700 pl-1 text-xl" />
            </span>{" "}
          </p>

          {/* Category Dialog starts here */}
          {showCategory && <CategoryDialog className="absolute mt-105 z-10 top-20" />}
          {/*    Category Dialog ends here  */}

          <a href="#">Deals</a>
          <a href="#">What's new</a>
          <a href="#">Delivery</a>
        </div>
      </div>

      {/* Search */}
      <SearchBar/>

      {/* Account section */}
      <div className="hidden sm:block">
        <div className="flex gap-8">
          <IconMenu Icon={BsFillPersonFill} title={"Account"} />
          <IconMenu Icon={HiShoppingCart} title={"Cart"} />
        </div>
      </div>

      {/* Menu Icon */}

      <div className="md:hidden cursor-pointer">
        <HiOutlineMenu className="text-slate-800 text-xl hover:text-slate-900 hover:scale-110 transition-all duration-300 ease-in" />
      </div>
    </div>
  );
}

export default Navbar;
