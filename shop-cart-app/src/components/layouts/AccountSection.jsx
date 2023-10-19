import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

function AccountSection({className}) {
  return (
    <div className={className}>
      <div className="flex items-center font-medium space-x-4">
        <a href="/login" className="flex items-center">
          <span>
            <MdOutlineAccountCircle className="text-lg mx-2" />
          </span>{" "}
          Account{" "}
        </a>

        <a href="" className="flex items-center">
          <span>
            <AiOutlineShoppingCart className="text-lg mx-2" />
          </span>{" "}
          Cart{" "}
        </a>
      </div>
    </div>
  )
}

export default AccountSection