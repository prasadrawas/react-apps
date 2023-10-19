import React from 'react'
import ProductDetailsHero from './ProductDetailsHero'
import ProductDetailsHighlights from './ProductDetailsHighlights'

function ProductDetails() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
        <ProductDetailsHero className={'col-span-1'}/>
        <ProductDetailsHighlights  className={'col-span-2'}/>
    </div>
  )
}

export default ProductDetails