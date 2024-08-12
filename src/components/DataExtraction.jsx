"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";

export default function DocumentDataExtraction() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter()

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Selected file:", selectedFile.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const back=()=>{
    router.back("/documents")
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-orange-500">
        Document Data Extraction
      </h1>
      <p className="text-center text-gray-500">
        Review and confirm the extracted information
      </p>

      <div
        className="mt-8 bg-gray-300 rounded-lg h-64 flex flex-col items-center justify-center cursor-pointer"
        onClick={handleUploadClick}
      >
        {file ? (
          <p>{file.name}</p>
        ) : (
          <>
            <FaUpload className="w-16 h-16 text-white" />
            <span className="text-gray-500">Max File Size: 10MB</span>
          </>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg, image/png, application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <p className="text-center text-gray-500 mt-4">Supported Formats: JPEG, PNG, PDF</p>

      <div className="mt-6 space-y-4">
        {["Full Name", "Date of Birth", "Document Number", "Expiry Date", "Address", "Nationality", "Gender"].map((label) => (
          <div key={label} className="relative">
            <input
              type="text"
              placeholder={label}
              className="w-full p-4 pl-6 pr-12 bg-gray-200 rounded-md focus:outline-none"
            />
            <FaEdit className="absolute right-4 top-4 text-gray-400" />
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full gap-3 md:flex-row justify-between mt-8">
        <button className="flex items-center justify-center w-full py-3  bg-yellow-100 border border-yellow-300 rounded-md hover:bg-yellow-200">
          <span className="text-green-600 mr-2">✓</span> Valid
        </button>
        <button className="flex items-center justify-center w-full py-3  bg-red-100 border border-red-300 rounded-md hover:bg-red-200">
          <span className="text-red-600 mr-2">✕</span> Error with tooltip
        </button>
      </div>

      <div className="flex flex-col gap-3 md:flex-row justify-between mt-8">
        <button 
        onClick={back}
        className="w-full py-3 mr-4  bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">
          Back
        </button>
        <button className="w-full py-3  bg-orange-500 text-white rounded-md hover:bg-orange-600">
          Confirm
        </button>
      </div>

      <p className="text-center text-gray-400 text-xs mt-8">
        Copyright © 2024 Salman.UI All rights reserved
      </p>
    </div>
  );
}
