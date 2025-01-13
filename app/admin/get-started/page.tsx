
"use client"
import Banner from '@/components/Banner';
import Promo from '@/components/Promo';
import SideNav from '@/components/SideNav'
import React, { useState } from 'react'

const GetStartedPage = () => {
  const [message, setMessage] = useState("");
  return (
    <>
      <Banner message="Get Started" backgroundImage="/assets/fit-banner1.jpg" />
      <div className="getting-started-message p-4 border rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </>
  )
}

export default GetStartedPage

// "Welcome to Club Champion! During your golf club fitting, expect a personalized experience with professional fitters, advanced technology, and a wide variety of clubs to choose from. Your performance and preferences will guide the perfect club selection for you."








