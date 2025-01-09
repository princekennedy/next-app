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

        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-2xl font-bold">Welcome to My App</h1>
          <p className="mt-4">
            This is the main content area. Add your content here!
          </p>
        </div>
      </div>
    </>
  )
}

export default page