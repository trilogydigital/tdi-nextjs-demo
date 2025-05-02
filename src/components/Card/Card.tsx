'use client';
import React, { useEffect } from 'react';

const Card = ({ title, description, image }) => {
  useEffect(() => {
    console.log('Card component mounted');
  }, []);

  return (
    <div className='card relative w-[350px] h-[328px] max-w-sm overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform bg-white hover:scale-105 flex flex-col justify-start'>
      {/* Image */}
      {/* Image container with no bottom margin */}
      <div className='h-48 w-full overflow-hidden'>
        <img src={image} alt={title} className='h-full w-full object-cover' />
      </div>

      {/* Text Content - removed top padding */}
      <div className='px-4 pb-4 pt-2'>
        <h3 className='font-bold text-md mb-1 line-clamp-1'>{title}</h3>
        <p className='text-sm text-gray-600 line-clamp-4'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
