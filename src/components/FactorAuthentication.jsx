"use client";
import React from 'react';

export default function FactorAuthenticationSetup() {
    return (
        <div className="max-w-xl mx-auto p-8 text-center">
            <h1 className="text-3xl font-bold text-center text-orange-500">
                Factor Authentication Setup
            </h1>
            <p className="text-center text-gray-500 shadow-md shadow-slate-300 p-6 mt-4">
                Why Multi-Factor Authentication? 
                Multi-Factor Authentication (MFA) adds an extra layer of security to your account by requiring more than one method of verification. Follow the steps below to set it up.
            </p>
            
            <div className="mt-8">
                {[
                    {
                        title: "Phone Verification",
                        description: "Verify your phone number to receive OTPs.",
                    },
                    {
                        title: "Email Verification",
                        description: "Verify your email address to receive OTPs.",
                    },
                    {
                        title: "Authentication App",
                        description: "Use an app like Google Authenticator for MFA.",
                    },
                    {
                        title: "Backup Codes",
                        description: "Generate backup codes for account recovery.",
                    }
                ].map((item, index) => (
                    <div key={index} className="mb-8 p-4 bg-white rounded-lg shadow-slate-400 shadow-md">
                        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                        <p className="mt-4 text-orange-500 border-2 border-orange-500 py-2">Status: Not Set Up</p>
                        <button className="w-full mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300">
                            Set Up
                        </button>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300">
                    Save and Continue
                </button>
            </div>

            <p className="text-center text-gray-400 text-xs mt-8">
                Copyright © 2024 YourBrandName. All rights reserved
            </p>
        </div>
    );
}
