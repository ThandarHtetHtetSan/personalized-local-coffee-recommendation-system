import React from 'react';


const CoffeeCard = ({ brand, name, price, thumbnail, gram }) => (
  <div className="coffee-card relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
    <div className="image-wrapper relative overflow-hidden">
      <img src={thumbnail} alt={name} className="w-full h-80 object-cover object-center transition-transform duration-500 transform" />
      <div className="image-overlay absolute inset-0 z-10"></div>
    </div>
    <div className="bg-gray-100 text-center">
      <h2 className="text-lg text-gray-600 bg-gray-200 py-2">{name} ({gram}g)</h2>
      <p className="text-gray-500 py-2">{brand}</p>
      {/* <p className="text-gray-600">Price: {price} MMK</p>
      <p className="text-gray-600">Weight: {gram} grams</p> */}
    </div>
    <div className='absolute top-2 right-0 bg-[#A53F3F] px-2'>
      <p className='text-gray-200'>{price} MMK</p>
    </div>
    {/* <div className='absolute top-2 right-0 bg-[#A53F3F] px-2'>
      <p className='text-gray-200'>{gram} grams</p>
    </div> */}
  </div>
);

export default CoffeeCard;