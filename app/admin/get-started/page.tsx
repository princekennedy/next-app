
"use client"
import { MessateData } from '@/app/models/interfaces';
import Banner from '@/components/Banner';
import Promo from '@/components/Promo';
import SideNav from '@/components/SideNav'
import { supabase } from '@/lib/supabase-client';
import React, { useEffect, useState } from 'react'

const GetStartedPage = () => {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("")

  const getData = async()=> {
      const {data} = await supabase.from("properties").select("*").eq('key','get-started');
      if(data?.length){
          setMessage(data[0].value);
      }else{
        createData();
      }
  }

  const createData = async () => {
    try {
      // Define the data object to be inserted
      const messageData: MessateData= {
        key: 'get-started',
        value: 'welcome',
      };
  
      // Destructure the data for insertion
      const { key, value} = messageData;
  
      // Insert the data into the database
      const { error: dbError } = await supabase.from('properties').insert(message);
  
      if (dbError) {
        throw new Error(dbError.message); // Throw error for proper handling
      }
  
      console.log('Data inserted successfully!');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  
  const updateData = async()=> {
      const messateData: MessateData = {
        key: 'get-started',
        value: message,
      }
      const {data} = await supabase.from("properties").update(messateData).eq('key', 'get-started');
      console.log(data)
      getData();
  }

  const [isEditing, setIsEditing] = useState(false);
  // Handlers for editing and saving
  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setIsEditing(false);
    updateData();
  };
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {setMessage(e.target.value);};


  
  useEffect(() => {
    getData();
  },[]);

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








