"use client"

import React, { useState } from 'react';

const Otpinput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP is: " + otp.join(""));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8  h-[60%] rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">OTP Verification</h2>
        <p className="text-center text-gray-600 mb-8">Please check your email to see the verification code</p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
                className="w-16 h-16 text-center bg-slate-100 shadow-lg shadow-slate-400 focus:outline-none  text-2xl"
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mb-8">
            Resend code to <span className="font-medium">your email</span> in 0:30
          </p>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white  p-3 rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otpinput;
