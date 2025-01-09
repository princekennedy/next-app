import Banner from '@/components/Banner'
import Promo from '@/components/Promo'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="flex h-screen">
        {/* Sidebar */}
        <SideNav></SideNav>
        {/* Main Content */}

        <div className="flex-1 bg-gray-100">
          <Banner message="A CUSTOM GOLF CLUB FITTING.YOUR GAME’S GAME-CHANGER." backgroundImage="https://via.placeholder.com/1500x500" />
          <Promo message="" backgroundImage="/assets/100-full-bag-2025.svg" />
        </div>
      </div>
    </>
  )
}

export default page