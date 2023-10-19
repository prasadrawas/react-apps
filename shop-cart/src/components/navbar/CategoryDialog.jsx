import React from 'react'
import CategoryItem from './CategoryItem';

function CategoryDialog({className}) {

const categories = [
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png',
        name:'Furniture',
        available: 240,
    },
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png',
        name:'Hand Bag',
        available: 220,
    },
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png',
        name:'Shoe',
        available: 120,
    },
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png',
        name:'Headphone',
        available: 240,
    },
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png',
        name:'Laptop',
        available: 240,
    },
    {
        imageUrl: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png',
        name:'Books',
        available: 240,
    },
];



  return (
    <div className={`${className} rounded-md p-8 bg-white w-[40%] shadow-md`}>
        <h1 className='text-2xl font-semibold'> Popular Categories</h1>
        <div className='my-4 h-[1px] bg-slate-300'/>
        <div className='grid grid-cols-2'>
        {categories.map((e) => (
            <CategoryItem key={e.name} item={e}/>
        ))}
        </div>
    </div>
  )
}

export default CategoryDialog