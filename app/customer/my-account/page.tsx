"use client";

import { getUser } from "@/app/api/users/route";
import { User } from "@/app/models/interfaces";
import { useEffect, useState } from "react";

const MyProfile = () => {
  // Form state
  const [formData, setFormData] = useState<User>({
    name: "",
    address: "",
    email: "",
    phone: "",
    golf_club_size: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData?.golf_club_size) {
      setError("Please fill out all required fields.");
      return;
    }

    try {
      // Replace this with your API call or database integration
      console.log("Updating profile with:", formData);

      // Simulate success response
      setTimeout(() => {
        setSuccessMessage("Profile updated successfully!");
      }, 500);
    } catch (err) {
      setError("An error occurred while updating the profile. Please try again.");
    }
  };

  const initaliseDataPull = () => {
    getUser().then( user =>{
      if(user) {
        setFormData(user);
      }
    });
  }
  
  useEffect(() => {
    initaliseDataPull();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Golf Club Size */}
        <div>
          <label htmlFor="golf_club_size" className="block text-sm font-medium text-gray-700">
            Golf Club Size <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="golf_club_size"
            name="golf_club_size"
            value={formData.golf_club_size}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter golf club size"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your address"
            rows={3}
          ></textarea>
        </div>

        {/* Email */}
        
        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Success Message */}
        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
