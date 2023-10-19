import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import CategoryDialog from "./CategoryDialog";

function MenuOptions({ className }) {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className={`${className}`}>
      <div
        className={`flex items-center justify-evenly font-medium space-x-6 relative`}
      >
        <button
          className="flex items-center"
          onClick={() => setShowCategory(!showCategory)}
        >
          Category{" "}
          <span>
            {" "}
            <FiChevronDown className="text-lg mx-2" />{" "}
          </span>
        </button>

        {/* popular categories */}
        {showCategory && <CategoryDialog />}

        <a href="">Deals</a>
        <a href="">What's new</a>
        <a href="">Delivery</a>
      </div>
    </div>
  );
}

export default MenuOptions;
