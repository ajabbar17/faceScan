"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineCheckCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaCircleNotch } from 'react-icons/fa';

const RecoveryProgressPopup = ({ onClose }) => {
  const [progress, setProgress] = useState(50);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Simulate progress reaching 100% after 2 seconds
    const timer = setTimeout(() => {
      setProgress(100);
      setCompleted(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Close popup after showing the completed state
    if (completed) {
      const closeTimer = setTimeout(onClose, 2000);
      return () => clearTimeout(closeTimer);
    }
  }, [completed, onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h3 className="text-xl font-semibold mb-4">Your Manual Data Recovery Progress</h3>
        <div className="flex justify-center items-center mb-4 text-6xl">
          {completed ? (
            <AiOutlineCheckCircle className="text-green-500" />
          ) : (
            <FaCircleNotch className="animate-spin text-orange-400" />
          )}
        </div>
        <p className="text-lg font-medium">
          {completed ? 'Completed' : `${progress}% Complete`}
        </p>
      </div>
    </div>
  );
};

export default RecoveryProgressPopup;
