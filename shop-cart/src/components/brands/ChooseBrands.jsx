import React from 'react'
import brandsList from '../../constants/BrandsList'
import BrandCard from './BrandCard'
function ChooseBrands() {





  return (
    <div className="flex flex-col items-center justify-center">
    <div className="w-11/12 md:w-4/5 mt-14">
      <h1 className="text-2xl font-bold mb-8">Todays Best Deals for you!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {brandsList.map((e) => (
          <BrandCard key={e.name} item={e}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ChooseBrands