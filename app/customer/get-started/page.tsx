
"use client"
import { getPropertyByKey, getUser } from '@/app/api/users/route';
import { User } from '@/app/models/interfaces';
import Banner from '@/components/Banner';
import { supabase } from '@/lib/supabase-client';
import React, { useEffect, useState } from 'react'

const GetStartedPage = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<User| null>(null);
  /**
   * Initialise the data pull for the get started page.
   * Fetches the current user and the get started message from the database.
   */
  const initaliseDataPull = () => {
    // Fetch the current user
    getUser().then((user) => {
      if (user) {
        setUser(user);
      }
    });

    // Fetch the get started message from the database
    getPropertyByKey('get-started').then((data) => {
      if (data.length) {
        // Set the message if it exists
        setMessage(data[0].value);
      } else {
        // Set a default message if it doesn't exist
        setMessage('');
      }
    });
  }
  
  useEffect(() => {
    initaliseDataPull();
  }, []);

  return (
    <>
      <Banner message={ !user ? "Loading ..." : "Welcome: " + (user?.name) } backgroundImage="/assets/fit-banner1.jpg" />
      <div className="getting-started-message p-4 border rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </>
  )
}

export default GetStartedPage

// "Welcome to Club Champion! During your golf club fitting, expect a personalized experience with professional fitters, advanced technology, and a wide variety of clubs to choose from. Your performance and preferences will guide the perfect club selection for you."








