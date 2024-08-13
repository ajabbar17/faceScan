"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";


const UserManagement = () => {
    const router = useRouter();
   
    const handleDashboard = ()=>{
        router.push("/admin")
    }

  return (
    <div className="min-h-screen bg-white md:px-16 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* Navigation Tabs */}
      <div className="flex flex-col md:flex-row justify-center mb-6 gap-3">
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md font-semibold"
        onClick={handleDashboard}>
          Dashboard
        </button>
        <button className="bg-yellow-200 text-black px-4 py-2 rounded-md font-semibold">
          User Management
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md font-semibold">
          Document Management
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md font-semibold">
          Compliance Reporting
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md font-semibold">
          ⌄
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pl-10 pr-4 rounded-full border border-gray-300 shadow-sm focus:outline-none"
          />
          <span className="absolute left-3 top-4 text-blue-500">
            <FaSearch/>
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>
      <div className="flex justify-start items-center gap-3 mb-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm font-semibold mb-2">Status</p>
          <div className="flex space-x-2">
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md font-semibold">
              Dashboard
            </button>
            <button className="bg-yellow-200 text-black px-4 py-2 rounded-md font-semibold">
              Status
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row bg-white h-[450px] md:min-h-72 justify-end md:justify-center  md:items-end gap-3">
        <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-md">Add New User</button>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-md">Generate Report</button>
        <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-md">View Logs</button>
      </div>
    </div>
  );
};

export default UserManagement;
