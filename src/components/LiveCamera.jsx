"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LiveCamera = () => {
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Toggle between the two messages every 3 seconds
    const interval = setInterval(() => {
      setShowFirstMessage((prev) => !prev);
    }, 2000);

    const interval2 = setInterval(() => {
        router.push("/dashboard/FaceMatching");
        
      }, 5000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
      clearTimeout(interval2);
    };
    }, []);

  return (
    <div className="min-h-screen flex flex-col gap-3 items-center w-full p-4">
      <h1 className="text-3xl text-center md:text-5xl font-bold text-orange-500">
        Advanced Face Recognition Setup
      </h1>
      <p className="text-gray-700 text-center mb-3">
        To enhance security, we&apos;ll need to scan your face. Follow the
        instructions below.
      </p>
      <div className="bg-white p-3 rounded-lg w-auto md:w-1/4">
        <div className="mb-2">
          <h2 className="text-2xl font-semibold text-center text-orange-400">
            Live Camera Feed
          </h2>
          <div className="mt-4 bg-gray-300 rounded-lg h-auto flex items-center justify-center">
            <div className="text-center flex-col flex items-center text-gray-500">
              <Image src="/Live.png" alt="live" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-3  w-auto md:w-1/3">
        {showFirstMessage ? (
          <p className="text-slate-500 text-base">
                        Position your face within the frame

          </p>
        ) : (
          <p className="text-slate-500 text-base transition-all">
                        Move your head slowly to the left

          </p>
        )}
      </div>
    </div>
  );
};

export default LiveCamera;
