import React from 'react';

const HeadlineCard = () => {
  return (
    <div className='max-w-[1280px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white mx-2 bg-white text-black absolute bottom-4'>Order Now</button>
        </div>
        <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white mx-2 bg-white text-black absolute bottom-4'>Order Now</button>
        </div>
        <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-white mx-2 bg-white text-black absolute bottom-4'>Order Now</button>
        </div>
        <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      
    </div>
  )
}

export default HeadlineCard
