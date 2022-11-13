import React from 'react';
import {categories} from '../data/Data.js';

const Category = () => {
  return (
    <div className='max-w-[1280px] mx-auto p-4 py-12'>
      <h1 className="font-bold text-center text-orange-600 text-4xl">
        Top Rated Menu Items
      </h1>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '>
        {categories.map((item,index)=>(
            <div className='bg-gray-100 rounded-lg flex items-center justify-between py-4'  key={index}>
                <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                <img className='w-20 object-cover' src={item.image} alt={item.name} />
            </div>
        ))}
    </div>

    </div>
  )
}

export default Category
