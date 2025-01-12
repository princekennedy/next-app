"use client";

import { supabase } from "@/lib/supabase-client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


interface Customer {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  golf_club_size: string;
}

const CustomerProfiles: React.FC = () => {
  // Mock data for customer profiles
  const [customers, setCustomers] = useState<Customer[]>([]);
  const router = useRouter();

  const getUser = async()=> {
      const {data: {user}} = await supabase.auth.getUser();

      if(user){
        return;
      }else{
        router.push("/login");
      }
  }



  const [loading,setLoader] = useState(false);
  useEffect(() => {
    getUser();
    getCustomers();

  },[]);

  const getCustomers = async () => {
      setLoader(true);
      try{
        const response = await axios.get('/api/users');
        if(response.status == 200){
          setCustomers(response.data?.data);
          setLoader(false);
        }else{
          console.log(response.data.errors)
          setLoader(false);
        }
        
      }catch(error){
        console.log(error);
      }
  }

  const handleInputChange = (
    id: number,
    field: keyof Customer,
    value: string
  ) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id ? { ...customer, [field]: value } : customer
      )
    );
  };

  return (

      
        <div className="customer-profiles p-4 border rounded shadow-lg">
          <h2 className="text-xl font-bold mb-4">Customer Profiles</h2>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Golf Club Size</th>
              </tr>
            </thead>
            <tbody>
              { loading ? (
                <div className="flex justify-center items-center">
                    <h1 className="animate-pulse "> Loading...</h1>
                </div>
              ) : 
              (customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={customer.name}
                      onChange={(e) =>
                        handleInputChange(customer.id, "name", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={customer.address}
                      onChange={(e) =>
                        handleInputChange(
                          customer.id,
                          "address",
                          e.target.value
                        )
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="email"
                      value={customer?.email}
                      onChange={(e) =>
                        handleInputChange(customer.id, "email", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={customer?.phone}
                      onChange={(e) =>
                        handleInputChange(customer.id, "phone", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={customer?.golf_club_size}
                      onChange={(e) =>
                        handleInputChange(
                          customer.id,
                          "golfClubSize",
                          e.target.value
                        )
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                </tr>
              )))
            }
            </tbody>
          </table>
        </div>
     
  );
};

export default CustomerProfiles;
