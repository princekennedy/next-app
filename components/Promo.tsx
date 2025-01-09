"use client"
import React from 'react';

interface PromoProps {
  message: string;
  backgroundImage: string; // URL of the background image
}

const Promo: React.FC<PromoProps> = ({ message, backgroundImage }) => {
  return (
    <div className="w-full p-4">
        <img style={{ height: "100px"}} className="w-full" src={backgroundImage } alt="" />
    </div>
  );
};
export default Promo