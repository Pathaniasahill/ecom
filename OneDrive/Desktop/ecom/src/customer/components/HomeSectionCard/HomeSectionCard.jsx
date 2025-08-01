import React from 'react'


const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[16rem] h-[22rem] mx-3 '>
      <div className='h-[16rem] w-[12rem] p-4 '>
        <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="" />

      </div>
      <div className='p-4'>
        <h3 className='test-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>
          {product.title}</p>
      </div>
       
    </div>
  )
}

export default HomeSectionCard
