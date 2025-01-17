"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/chatbot');
  };

  return (
    <div>
      <div className="relative w-full h-screen">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg" // Updated path to the new image
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Law Firm Background"
          />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-6xl text-white font-bold mb-4">Law Firm LLC</h1>
          <p className="text-xl text-gray-300 mb-8">We are a dedicated team of legal professionals providing expert services for all your legal needs.</p>
          <button 
          onClick={handleButtonClick}
            className="bg-yellow-500 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-yellow-600 transition duration-300">
              FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  )
}
