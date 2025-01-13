
"use client"
import Banner from '@/components/Banner';
import { supabase } from '@/lib/supabase-client';
import React, { useEffect, useState } from 'react'

const GetStartedPage = () => {
  const [message, setMessage] = useState("");
  const getData = async()=> {
      const {data} = await supabase.from("properties").select("*").eq('key','get-started');
      console.log(data)
      if(data){
          setMessage(data[0].value);
      }else{
          setMessage("")
      }
  }
      
  useEffect(() => {
    getData();
  },[]);

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








