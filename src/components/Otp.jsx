"use client"
import React, { useState } from 'react';
import { IoMailUnread } from "react-icons/io5";
import OtpInput from './Otpinput';


const OTPVerification = () => {
    const [email, setEmail] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);

  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your OTP request logic here
      console.log(`OTP sent to: ${email}`);
      setIsPopupVisible(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupVisible(false);
      setShowOtpInput(true);

    };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
              {!showOtpInput ? (

      <div className="bg-white h-[60%] p-8  shadow-lg shadow-slate-500 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">OTP Verification</h2>
        <p className='text-slate-600 mb-4'>Enter your Email account for Verification</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            
            className="w-full p-3 mb-4 border shadow-md shadow-slate-400 border-gray-300 rounded-lg focus:outline-none "
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-3 mt-14 md:mt-28 hover:bg-yellow-600 transition duration-200"
          >
            Send
          </button>
        </form>

        {isPopupVisible && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
              <IoMailUnread  className='w-10 h-10 text-yellow-300'/>

              </div>
              <h3 className="text-lg font-semibold mb-2">Check Your Email</h3>
              <p className="text-sm text-gray-700">
                We have sent a password recovery code to your email.
              </p>
              <button
                onClick={handleClosePopup}
                className="mt-4 w-full bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    ) : (
        <OtpInput />
      )}
    </div>
  );
};

export default OTPVerification;
