'use client'
import React, { useEffect } from 'react';

const Card = () => {
  useEffect(() => {console.log("Card component mounted")}, []);
  return (
      <div 
        className="card relative w-3/4 max-w-sm overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform bg-white hover:scale-105"
      >
        <div className="">
          
            <div className="relative h-48 bg-gray-300">
              <div className="absolute inset-0 flex items-center justify-center">ß
                <img src="/api/placeholder/400/320" alt="Woman speaking" className="object-cover" />
              </div>
            </div>
          
          <div className="p-2 bg-black text-white">
            <h3 className="font-bold text-md mb-1">
              Candace Cameron Bure: Advice for Mothers on Raising Godly Children | Women of Faith
            </h3>
            <p className="text-sm text-gray-300">
              Candace Cameron Bure and her sisters Melissa and Bridgette discuss the joys and struggles of motherhood. They share their personal stories...
            </p>
          </div>
          
         
        </div>
      </div>
  )
}

export default Card