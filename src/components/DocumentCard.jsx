"use client";
import Image from "next/image";
import React from "react";

export default function DocumentCard() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-orange-500">
        Document Card
      </h1>

      <div className="text-center mt-8">
        <Image
          src="/User.png" // Replace with the actual image path
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
          width={100}
          height={100}
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">John Doe</h2>
      </div>

      <div className="mt-8 bg-white p-4 ">
        <h3 className="text-lg font-bold text-orange-500 text-center mb-4">
          User Info
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between py-3 px-4 shadow-md shadow-slate-300 text-gray-600">
            <span>Full Name</span>
            <span className="font-semibold text-orange-500">John Doe</span>
          </div>
          <div className="flex justify-between py-3 px-4 shadow-md shadow-slate-300 text-gray-600">
            <span>Phone Number</span>
            <span className="font-semibold text-orange-500">john@example.com</span>
          </div>
          <div className="flex justify-between py-3 px-4 shadow-md shadow-slate-300 text-gray-600">
            <span>Registration Date</span>
            <span className="font-semibold text-orange-500">02/01/2024</span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-4 rounded-lg ">
        <h3 className="text-lg font-bold text-orange-500 text-center mb-4">
          Document Info
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between py-3 px-4 shadow-md shadow-slate-300 text-gray-600">
            <span>Type</span>
            <span className="font-semibold text-orange-500">Passport</span>
          </div>
          <div className="flex justify-between py-3 px-4 shadow-md shadow-slate-300 text-gray-600">
            <span>Upload Date</span>
            <span className="font-semibold text-orange-500">01/01/2024</span>
          </div>
          <div className="flex justify-between py-3 px-4 shadow-md shadow-slate-300 text-gray-600">
            <span>Status</span>
            <span className="font-semibold text-orange-500">Pending</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex md:flex-row flex-col w-full items-center gap-3 justify-center ">
        <button className="bg-yellow-100 text-yellow-600 px-4 w-1/2 md:w-1/6 py-2 rounded-md hover:bg-yellow-200 transition duration-300">
          View
        </button>
        <button className="bg-green-100 text-green-600 px-4 w-1/2 md:w-1/6  py-2 rounded-md hover:bg-green-200 transition duration-300">
          Approve
        </button>
        <button className="bg-[#FEAC2F] text-white px-4  w-1/2 md:w-1/6 py-2 rounded-md hover:bg-red-200 transition duration-300">
          Reject
        </button>
        <button className="bg-orange-100 text-gray-600 px-4 w-1/2 md:w-1/6  py-2 rounded-md hover:bg-gray-200 transition duration-300">
          Delete
        </button>
      </div>

      <p className="text-center text-gray-400 text-xs mt-8">
        Copyright © 2024 Salman.UI All rights reserved
      </p>
    </div>
  );
}
