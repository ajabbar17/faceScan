"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";

export default function DocumentUpload() {
    const router = useRouter();
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);  // Create a ref for the file input

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Selected file:", selectedFile.name);
    }
  };

  const handleUploadClick = () => {
    // Trigger the click event on the hidden file input
    fileInputRef.current.click();
  };

  const handleUpload = () => {
    if (file) {
      console.log("File uploaded:", file);
    } else {
      console.log("No file selected");
    }
  };

  const handlenext =()=>{
    router.push("/documents/documentExtraction")
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-orange-500">
        Document Upload
      </h1>
      <p className="text-center text-gray-500">
        Supported Documents: ID Card, Passport, Driver&apos;s License
      </p>

      <div className="mt-8 bg-gray-300 rounded-lg h-64 flex items-center justify-center">
        {file ? (
          <p>{file.name}</p>
        ) : (
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center cursor-pointer"
          >
            <FaCamera className="w-20 h-20 text-white" />
            <span className="text-gray-500">Max File Size: 10MB</span>
          </label>
        )}
      </div>

      <div className="text-center mt-4">
        <p className="text-gray-500">Supported Formats: JPEG, PNG, PDF</p>
        <button
          onClick={handleUploadClick}  // Trigger file input when button is clicked
          className="bg-orange-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-orange-600 transition duration-300"
        >
          Upload
        </button>
        <input
          ref={fileInputRef}
          id="file-upload"
          type="file"
          accept="image/jpeg, image/png, application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <div className="mt-8 bg-gray-300 rounded-lg h-64 flex items-center justify-center">
        <p className="text-gray-500">
          {file ? "Uploaded Document Preview" : "No Document Uploaded Yet"}
        </p>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handlenext}  // You can use this to perform the upload logic
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Next
        </button>
      </div>

      <p className="text-center text-gray-400 text-xs mt-8">
        Copyright © 2024 Salman.UI All rights reserved
      </p>
    </div>
  );
}
