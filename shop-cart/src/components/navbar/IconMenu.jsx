import React from 'react'

function IconMenu({Icon, title}) {
  return (
    <div className='flex gap-3 items-center text-slate-800 cursor-pointer font-medium'>
        <Icon className="text-xl text-slate-800"/>
        <p>{title}</p>
    </div>
  )
}

export default IconMenu