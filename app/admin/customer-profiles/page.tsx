"use client";

import { getUsers, updateCustomerApi } from "@/app/api/users/route";
import { User } from "@/app/models/interfaces";
import { supabase } from "@/lib/supabase-client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const CustomerProfiles: React.FC = () => {
  // Mock data for customer profiles
  const [customers, setCustomers] = useState<User[]>([]);

  const [loading,setLoader] = useState(false);
  const [message,setMessage] = useState<string>('');

    const initaliseDataPull = () => {
      setLoader(true);
      getUsers().then( data =>{
        setCustomers(data);
        setLoader(false);
      });
    }
    
    useEffect(() => {
      initaliseDataPull();
    }, []);

  const handleInputChange = (
    id: number,
    field: keyof User,
    value: string
  ) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id ? { ...customer, [field]: value } : customer
      )
    );
  };


  const updateCustomer = async (customer: User) => {
    try {
      updateCustomerApi(customer).then( res => {
        setMessage(res);
        initaliseDataPull();
      })
    } catch (error) {
      setMessage('Error updating customer:' + error);
    }
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
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              { loading ? (
                <tr key="loader">
                  <td colSpan={6}>
                    <div className="flex justify-center items-center">
                        <h1 className="animate-pulse "> Loading...</h1>
                    </div>
                  </td>
                </tr>
              ) : 
              (customers.map((customer: any) => (
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
                          'golf_club_size',
                          e.target.value
                        )
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button onClick={() => updateCustomer(customer)}>Update</button>
                  </td>
                </tr>
              )))
            }
            </tbody>
          </table>
          <p className="text-green-400">
            {message}
          </p>
        </div>
     
  );
};

export default CustomerProfiles;
