"use client";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { CiCamera } from "react-icons/ci";

export default function AdvancedFaceRecognitionSetup() {
  const router = useRouter(); // Initialize the router

  const handleNextClick = () => {
    router.push("/dashboard/FaceRecognition"); // Navigate to the AdFace component
  };

  return (
    <div className="min-h-screen flex flex-col gap-3 items-center w-full p-4">
      <h1 className="text-5xl font-bold text-orange-500">
        Advanced Face Recognition Setup
      </h1>
      <p className="text-gray-700 mb-3">
        To enhance security, we&apos;ll need to scan your face. Follow the instructions below.
      </p>
      <div className="bg-white p-6 rounded-lg w-1/3">
        <div className="mb-2">
          <h2 className="text-2xl font-semibold text-center text-orange-400">
            Live Camera Feed
          </h2>
          <div className="mt-4 bg-gray-300 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center flex-col flex items-center text-gray-500">
              <CiCamera className="w-20 h-20" />
              <p className="mt-2 text-sm">Position your face within the frame</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between space-x-3 w-1/3">
        <button className="bg-gray-200 w-1/2 text-gray-700 py-2 px-10 rounded-md">
          Back
        </button>
        <button
          className="bg-orange-500 w-1/2 text-white py-2 px-10 rounded-md"
          onClick={handleNextClick} // Attach the click handler
        >
          Next
        </button>
      </div>
    </div>
  );
}
