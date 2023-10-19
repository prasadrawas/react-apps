import React from 'react'

function NavItem({title}) {
  return (
    <p className="hover:scale-105 text-sm hover:text-orange-500 transition-all duration-300 ease-linear mb-3 cursor-pointer">{title}</p>
  )
}

export default NavItem