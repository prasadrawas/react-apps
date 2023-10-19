import React from 'react'

function Divider({className}) {
  return (
    <div className={`h-[1px] bg-slate-200 rounded-full w-full my-6 ${className}`} />
  )
}

export default Divider