import React from 'react'

function TrendingCard({item}) {
  return (
    <div className='bg-slate-100 rounded-xl hover:scale-105 transition-all duration-300 ease-linear'>
        <img src={item.imageUrl} alt="" className='rounded-tl-xl rounded-tr-xl w-full'/>

       <div className='p-5'>
       <h1 className='text-2xl mt-5 font-semibold'>{item.name}</h1>
        <p className='font-medium text-sm mt-2'>{item.description}</p>
        <button className='mt-3 rounded-full bg-black font-semibold text-white p-3 px-5 hover:bg-green-900 transition-all duration-300 ease-out' >
          Shop now
        </button>
       </div>
    </div>
  )
}

export default TrendingCard