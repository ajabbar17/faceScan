"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Splash = () => {
    const router =useRouter();
    useEffect(() => {
        // Show the buttons and change the image after 3 seconds
        const timer = setTimeout(() => {
                router.push("/login")
        }, 2000); // 3000ms = 3 seconds
    
        // Cleanup the timer if the component unmounts before 3 seconds
        return () => clearTimeout(timer);
      }, []);
    

  return (
    <div className='flex z-50 fixed top-0 bg-white justify-center items-center w-screen h-screen'>
        <div className='w-1/3 h-1/3 flex justify-center items-center'>
        <Image src="/Logo.png" width={200} height={200} alt='logo'/>
        </div>
    </div>
  )
}

export default Splash