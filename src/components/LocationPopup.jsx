import React from "react";

const LocationPopup = ({ showPopup, setShowPopup }) => {

  const handleClick = () => {
    setShowPopup(false); // Properly update the state using the setter function
  };

  if (!showPopup) return null; // Do not render anything if showPopup is false

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-auto bg-white h-auto md:w-1/4 md:h-1/3 flex-col flex justify-center items-center gap-5 p-3 shadow-slate-500 shadow-lg rounded-lg">
        <h1 className="text-3xl text-gray-600">Location is not verified</h1>
        <p>Location is not verified</p>
        <button
          className="bg-orange-400 py-4 px-7 w-full text-center text-white hover:text-orange-600 transition-colors"
          onClick={handleClick} // Properly handle click to hide the popup
        >
          Retry Verification
        </button>
      </div>
    </div>
  );
};

export default LocationPopup;
