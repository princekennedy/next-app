"use client"
import React from 'react';

interface BannerProps {
  message: string;
  backgroundImage: string; // URL of the background image
}

const Banner: React.FC<BannerProps> = ({ message, backgroundImage }) => {
  return (
    <div
      className="h-[500px] bg-cover bg-center bg-opacity-50 flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        
      <h1 className="text-3xl font-bold w-[500px] text-white bg-black bg-opacity-50 px-4 py-2 rounded">
        {message}
      </h1>
    </div>
  );
};

export default Banner;
