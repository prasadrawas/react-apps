import React from 'react'

function ColorCard({className}) {
  return (
    <div className={`${className} h-10 w-10 rounded-full hover:border-[2px] hover:scale-110 transition-all duration-300 ease-in cursor-pointer`}/>
  )
}

export default ColorCard