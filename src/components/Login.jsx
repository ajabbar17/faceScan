import Link from 'next/link';
import React from 'react';
import { FaGoogle, FaFacebook, FaEnvelope, FaLock } from 'react-icons/fa';

export default function Login() {
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Log In</h2>
        
        <form className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full shadow-md shadow-slate-400 px-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          
          <div className="relative">
            <FaLock className="absolute left-3 top-4 text-gray-400" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-10 py-3 shadow-slate-400 shadow-md border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Log In
          </button>
        </form>

        <div className="text-right mt-4">
          <a href="#" className="text-yellow-500 hover:underline">Forgot password?</a>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex space-x-4">
          <button 
            type="button" 
            className="w-1/2 py-2 bg-white border-gray-300 border-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition duration-300"
          >
            <FaGoogle className="text-red-500" />
            <span>Google</span>
          </button>
          <button 
            type="button" 
            className="w-1/2 py-2 bg-white border-2  border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition duration-300"
          >
            <FaFacebook className="text-blue-600" />
            <span>Facebook</span>
          </button>
        </div>

        <p className="text-center mt-8 text-gray-500">
          Don&apos;t have an account? <Link href="/signUp" className="text-yellow-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
