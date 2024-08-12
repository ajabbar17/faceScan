"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const FaceMatching = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [imageSrc, setImageSrc] = useState('/facematching.png');
  const router = useRouter();

  const Click = () => {
    router.push("/dashboard/userInformation")
  };



  useEffect(() => {
    // Show the buttons and change the image after 3 seconds
    const timer = setTimeout(() => {
      setShowButtons(true);
      setImageSrc('/Live.png');
    }, 4000); // 3000ms = 3 seconds

    // Cleanup the timer if the component unmounts before 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-2 items-center w-full p-4">
      <h1 className="text-4xl font-bold text-orange-500">
        Face Matching
      </h1>
      <p className="text-gray-700 mb-1">
        We are matching your live scan with your ID photo to verify your identity.
      </p>
      <div className="bg-white py-0 p-6 rounded-lg w-auto md:w-1/3">
        <div className="mb-2">
          <h2 className="text-2xl font-semibold text-center text-orange-400">
            Matching...
          </h2>
          <div className="gap-5 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center flex-col flex items-center text-gray-500">
              <Image src="/Live.png" alt="Matching" width={400} height={400} />
              
              {showButtons &&
              <p className='text-black mt-3'>Live Video Feed</p>
              }
            </div>
            <div className="text-center flex-col flex items-center text-gray-500">
              <Image src={imageSrc} alt="Matching" width={400} height={400} />
              {showButtons &&
              <p className='text-black mt-3'>ID Photo</p>
              }
            </div>
          </div>
        </div>
      </div>
      {showButtons && (
        <div className="flex justify-between space-x-3 w-auto md:w-1/3">
          <button className="bg-gray-200 w-1/2 text-gray-700 py-2 px-10 rounded-md">
            Retry
          </button>
          <button className="bg-orange-500 w-1/2 text-white py-2 px-10 rounded-md"
          onClick={Click}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default FaceMatching;
