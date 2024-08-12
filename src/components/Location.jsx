"use client";
import { useState } from "react";
import Image from "next/image";
import LocationPopup from "./LocationPopup";

export default function LocationVerification() {
  const [showPopup, setShowPopup] = useState(false); // State to manage the visibility of the popup

  const handleSaveClick = () => {
    setShowPopup(true); // Show the popup when the "Save and Continue" button is clicked
  };

  return (
    <div className="relative max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-orange-500">
        Location Verification
      </h1>

      <div className="text-center mt-4">
        <p className="text-gray-500">Map View with user&apos;s current location pinned</p>
        <Image
          src="/map.png" // Replace with the actual map image path
          alt="Map with location pinned"
          width={400}
          height={400}
          className="w-[85%] h-64 rounded-lg mx-auto mt-4 shadow-lg"
        />
      </div>

      <div className="mt-8 bg-white p-4">
        <h3 className="text-lg font-bold text-orange-500 text-center mb-4">
          Location Details
        </h3>
        <div className="text-gray-600 text-center shadow-md py-8">
          <span>Address</span>
          <p className="mt-2 font-semibold text-orange-500">
            User&apos;s Current Address
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-300"
          onClick={handleSaveClick} // Call the handler on click
        >
          Save and Continue
        </button>
      </div>

      <p className="text-center text-gray-400 text-xs mt-8">
        Copyright &#169; 2024 Salman.UI All rights reserved
      </p>

      {/* Pass both showPopup and setShowPopup to the popup component */}
      {showPopup && <LocationPopup showPopup={showPopup} setShowPopup={setShowPopup} />} 
    </div>
  );
}
