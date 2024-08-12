"use client"
import React, { useState } from 'react';
import LiveCamera from './LiveCamera';
import { useRouter } from 'next/navigation';

const AdFace = () => {
  const [showLiveCamera, setShowLiveCamera] = useState(false);
  const router = useRouter();

  const handleSetupClick = () => {
    setShowLiveCamera(true);
  };

  if (showLiveCamera) {
    return <LiveCamera />

    
  }
  const handleback = ()=>{
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col gap-3 items-center w-full p-4">
      <h1 className="text-3xl md:text-5xl text-center font-bold text-orange-500">
        Advanced Face Recognition Setup
      </h1>
      <p className="text-gray-700 mb-3 text-center">
        To enhance security, we&apos;ll need to scan your face. Follow the instructions below.
      </p>
      <div className="bg-white p-6 rounded-lg w-full md:w-1/3">
        <div className="mb-2">
          <div className="mt-4 bg-gray-400 rounded-lg h-80 flex items-center justify-center">
            {/* Live Camera Feed Placeholder */}
          </div>
        </div>
      </div>
      <div className="flex justify-between space-x-3 w-auto md:w-1/3">
        <button className="bg-gray-200 w-1/2 text-gray-700 py-2 px-10 rounded-md"
        onClick={handleback}
        >
          Back
        </button>
        <button 
          className="bg-orange-500 w-1/2 text-white py-2 px-10 rounded-md"
          onClick={handleSetupClick}
        >
          Setup
        </button>
      </div>
      
      {/* Video Section */}
      <div className="mt-8 w-auto md:w-1/3 h-80 pb-14">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          How it Works
        </h2>
        <div className="h-full">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/your-video-id"
            title="How it Works"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AdFace;
