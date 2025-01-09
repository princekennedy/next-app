"use client";

import React, { useState } from "react";
import SideNav from "@/components/SideNav";

interface Customer {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  golfClubSize: string;
}

const CustomerProfiles: React.FC = () => {
  // Mock data for customer profiles
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, Springfield",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      golfClubSize: "Standard",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Oak Ave, Metropolis",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      golfClubSize: "Large",
    },
    {
      id: 3,
      name: "Alice Johnson",
      address: "789 Pine Rd, Gotham",
      email: "alice.johnson@example.com",
      phone: "555-555-5555",
      golfClubSize: "Medium",
    },
  ]);

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
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideNav />
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
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
              {customers.map((customer) => (
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
                      value={customer.email}
                      onChange={(e) =>
                        handleInputChange(customer.id, "email", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={customer.phone}
                      onChange={(e) =>
                        handleInputChange(customer.id, "phone", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={customer.golfClubSize}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfiles;
