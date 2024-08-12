"use client"
import React, { useState } from 'react';
import RecoveryProgressPopup from './RecoveryPopup';

const RecoveryOptions = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleRecoveryClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className="max-w-md w-full">
        {/* Recovery Options */}
        <h2 className="text-2xl font-semibold text-center text-yellow-600 mb-4">Recovery Options</h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-center text-gray-600 mb-4">Last Backup</p>
          <p className="text-center text-gray-400 text-sm mb-6">01/01/2024 12:00 PM</p>
          <button onClick={handleRecoveryClick} className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition duration-200">
            Backup Now
          </button>
        </div>

        {/* Recovery Methods */}
        <h2 className="text-2xl font-semibold text-center text-yellow-600 mb-4">Recovery Methods</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-600 mb-4">Backup from Cloud</p>
            <p className="text-center text-gray-400 text-sm mb-6">Restore your data from the cloud</p>
            <button onClick={handleRecoveryClick} className="w-full border border-yellow-500 text-yellow-500 p-3 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200">
              Backup Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-600 mb-4">Restore from Local Storage</p>
            <p className="text-center text-gray-400 text-sm mb-6">Use a local backup file</p>
            <button onClick={handleRecoveryClick} className="w-full border border-yellow-500 text-yellow-500 p-3 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200">
              Backup Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-600 mb-4">Manual Data Recovery</p>
            <p className="text-center text-gray-400 text-sm mb-6">Follow steps for manual recovery</p>
            <button onClick={handleRecoveryClick} className="w-full border border-yellow-500 text-yellow-500 p-3 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200">
              Backup Now
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-6 text-center text-gray-400 text-sm">
        © 2024 Sample UI. All rights reserved.
      </footer>

      {/* Popup for Recovery Progress */}
      {isPopupVisible && <RecoveryProgressPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default RecoveryOptions;
