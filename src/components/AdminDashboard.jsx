"use client";

import React from "react";
import Image from "next/image";
import UserManagement from "./UserManagement";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
       const router = useRouter();
    const handleClick = ()=>{
        router.push("/admin/userManagement")
    }
    const handleDashboard = ()=>{
        router.push("/admin")
    }

  return (
    <div className="min-h-screen bg-white px-5 md:px-28 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* Navigation Tabs */}
      <div className="flex md:flex-row flex-col justify-center mb-8 gap-4">
        <button className="bg-yellow-100 text-black px-4 py-2 rounded-md font-semibold"
        onClick={handleDashboard}
        >
          Dashboard
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md font-semibold"
        onClick={handleClick}
        >
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:px-14 gap-4 mb-8">
        <div className="bg-white flex flex-col w-full p-4 rounded-lg shadow-md">
          <p className="text-gray-700 text-xl font-semibold text-start">Total Users</p>
          <p className="text-2xl font-bold mt-2">1,200</p>
          <Image src="/Chart.png" alt="Chart" className="self-center" width={200} height={100} />
        </div>
        <div className="bg-white flex flex-col w-full p-4 rounded-lg shadow-md">
          <p className="text-gray-700 text-xl font-semibold">Pending Verifications</p>
          <p className="text-2xl font-bold mt-2">300</p>
          <Image src="/Chart2.png" alt="Chart" width={200} className="self-center" height={100} />
        </div>
        <div className="bg-white flex flex-col w-full p-4 rounded-lg shadow-md">
          <p className="text-gray-700 text-xl font-semibold">Completed Verifications</p>
          <p className="text-2xl font-bold mt-2">900</p>
          <Image src="/Chart2.png" alt="Chart" width={200} className="self-center" height={100} />
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-7  shadow-2xl  mb-8">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl font-semibold text-gray-700">Recent Activities</p>
          <button className="text-orange-500 text-sm font-semibold">VIEW ALL</button>
        </div>
        <ul className="list-disc pl-5 text-gray-700">
          <li>User John Doe completed KYC verification</li>
          <li>Document ID123 verified by admin</li>
          <li>User Jane Smith submitted new document</li>
          <li>User John Doe completed KYC verification</li>
          <li>User Jane Smith submitted new document</li>
        </ul>
      </div>

      {/* Alerts/Notifications */}
      <div className="bg-white p-7 shadow-2xl mb-8">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl font-semibold text-gray-700">Alerts/Notifications</p>
          <button className="text-orange-500 text-sm font-semibold">VIEW ALL</button>
        </div>
        <ul className="list-disc pl-5 text-gray-700">
          <li>System maintenance scheduled for 02/15/2024.</li>
          <li>High number of failed login attempts detected.</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center md:flex-row flex-col gap-3">
        <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-md">Add New User</button>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-md">Generate Report</button>
        <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-md">View Logs</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
