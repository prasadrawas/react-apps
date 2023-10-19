import React from 'react'
import { StarRating } from '../rating'
import { SecondaryButton } from '../button'

function ProductCard({product}) {
  return (
    <div>
    <div className="flex items-center justify-center mb-2 cursor-pointer bg-slate-100 rounded-xl">
      <img
        src={product.imageUrl}
        alt=""
        className="rounded-xl hover:scale-105 transition-all duration-300"
      />
    </div>
    <div className="flex items-start justify-between font-semibold text-md md:text-lg my-2">
      <h1>{product.name}</h1>
      <h1 className="flex items-start">
        {" "}
        <span className="text-xs">$</span>
        {product.price} <span className="text-xs">.00</span>
      </h1>
    </div>



    <p className="text-xs md:text-sm my-2">{product.description}</p>

    <StarRating rating={product.rating} reviews={product.reviews}/>

    <SecondaryButton text={'Add to Cart'} className={'my-4 p-[10px] text-sm'}/>
  </div>
  )
}

export default ProductCard