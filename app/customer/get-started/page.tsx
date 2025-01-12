
"use client"
import Banner from '@/components/Banner';
import Promo from '@/components/Promo';
import SideNav from '@/components/SideNav'
import React, { useState } from 'react'

const GetStartedPage = () => {
  const [message, setMessage] = useState(
    "Welcome to Club Champion! During your golf club fitting, expect a personalized experience with professional fitters, advanced technology, and a wide variety of clubs to choose from. Your performance and preferences will guide the perfect club selection for you."
  );
  const [isEditing, setIsEditing] = useState(false);

  // Handlers for editing and saving
  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setMessage(e.target.value);

  return (
    <>
      <Banner message="Get Started" backgroundImage="/assets/fit-banner1.jpg" />
      <div className="getting-started-message p-4 border rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        {isEditing ? (
          <textarea
            className="w-full p-2 border rounded"
            value={message}
            style={{height: "100px"}}
            onChange={handleChange}
          />
        ) : (
          <p className="text-gray-700">{message}</p>
        )}

        <div className="mt-4">
          {isEditing ? (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default GetStartedPage








