import Image from 'next/image'
import React from 'react'

const NotMatched = () => {
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
            
           
          </div>
          <div className="text-center flex-col flex items-center text-gray-500">
            <Image src="/NotMatched.png" alt="Matching" width={400} height={400} />
           
          </div>
        </div>
      </div>
    </div>
      <div className="flex flex-col justify-center items-center gap-2 w-auto md:w-1/3">
        <p>Face Not Detected. Please try again.</p>
        <button className="bg-orange-400 w-1/2 text-gray-700 py-2 px-10 rounded-md">
          Retry
        </button>
        
      </div>
  </div>  )
}

export default NotMatched