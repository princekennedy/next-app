import Banner from '@/components/Banner'
import Promo from '@/components/Promo'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Banner message="A CUSTOM GOLF CLUB FITTING.YOUR GAME’S GAME-CHANGER." backgroundImage="/assets/fit-banner1.jpg" />
      <Promo message="" backgroundImage="/assets/100-full-bag-2025.svg" />
    </>
  )
}

export default page