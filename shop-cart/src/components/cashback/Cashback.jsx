import React from 'react'

function Cashback() {
  return (
    <div className='flex bg-orange-200 h-96 my-32 items-center justify-around'>
        <div>
            <h1 className='text-5xl font-semibold'>Get 5% Cash Back</h1>
            <p className='text-md font-semibold my-5'>on Shopcart.com</p>

            <button className='text-white text-md font-semibold p-3 px-6 rounded-full bg-green-900 hover:text-black hover:bg-white transition-all duration-300 ease-linear'>
                Learn more
            </button>
        </div>

        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png" alt=""  className='h-52 -rotate-12 hidden md:block'/>
    </div>
  )
}

export default Cashback