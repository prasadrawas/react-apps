import React from 'react'
import OffersCard from './OffersCard'

function Offers() {

const offers = [
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png',
        discount: 100,
        description: 'Explore our furniture & home furnishing range',
        color: 'bg-red-50',
    },
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png',
        discount: 29,
        description: 'Explore our furniture & home furnishing range',
        color: 'bg-yellow-50',
    },
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png',
        discount: 67,
        description: 'Explore our furniture & home furnishing range',
        color: 'bg-blue-50',
    },
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png',
        discount: 59,
        description: 'Explore our furniture & home furnishing range',
        color: 'bg-orange-50',
    },
];



  return (
    <div className="flex flex-col items-center justify-center">
    <div className="w-11/12 md:w-4/5 mt-14">
      <h1 className="text-2xl font-bold mb-8">Get upto 70% Off</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.map((e) => (
          <OffersCard key={e.imageUrl} item={e}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Offers