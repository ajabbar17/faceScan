"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DocumentCard from './DocumentCard';

export default function UserCard() {
    const [showLiveCamera, setShowLiveCamera] = useState(false);


    const Click = () => {
        setShowLiveCamera(true);
      };
    
      if (showLiveCamera) {
        return <DocumentCard />
    
        
      }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center  p-4">
            <h1 className="text-4xl font-bold text-orange-500 mb-3">User Card</h1>

            {/* User Profile Section */}
            <div className="flex flex-col items-center mb-3">
                <Image
                    src="/User.png" // Replace with the actual image path
                    alt="User Profile"
                    width={100}
                    height={100}
                    className="rounded-full mb-1"
                />
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500">User ID</p>
            </div>

            {/* Progress Section */}
            <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl p-6 space-y-4">
                {[
                    { label: 'Full Name', status: 'Completed' },
                    { label: 'ID Upload', status: 'Completed' },
                    { label: 'OCR', status: 'In Progress' },
                    { label: 'Face Recognition', status: 'Pending' },
                    { label: 'Final Review', status: 'Pending' },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                    >
                        <span>{item.label}</span>
                        <span
                            className="px-5 py-1  w-32 text-center text-white text-base bg-[#FEAC2F] "
                        >
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-2 mt-8 w-full justify-center items-center">
                <button className="bg-orange-100 w-1/2 md:w-1/5  text-orange-500 px-6 py-2 rounded-md border border-orange-300 hover:bg-orange-200">
                    Delete
                </button>
                <button className="bg-orange-500 w-1/2 md:w-1/5 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                onClick={Click}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
