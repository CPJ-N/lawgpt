"use client"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/chatbot');
  };

  return (
    <div>
      <div className="relative w-full h-screen bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-skyblue">
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-6xl text-brand-white font-bold mb-4">Law Firm LLC</h1>
          <p className="text-xl text-brand-white/80 mb-8">
            We are a dedicated team of legal professionals providing expert services for all your legal needs.
          </p>
          <button 
            onClick={handleButtonClick}
            className="bg-brand-white text-brand-darkblue px-6 py-2 rounded-full text-lg font-medium hover:bg-brand-white/90 transition duration-300">
            FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  )
}
