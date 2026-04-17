import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="w-full min-h-[calc(100vh-350px)] flex flex-col items-center justify-center bg-[#f8fafc] p-6 text-center flex-grow">
      <div className="max-w-lg w-full flex flex-col items-center">
        {/* Render the custom cute robot image */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mb-6">
          <Image 
            src="/vecteezy_cute-sad-robot-404-error-page-illustration-for-website-or_61557531.jpg"
            alt="404 - Page Not Found"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-500 mb-8 max-w-md leading-relaxed text-sm sm:text-base">
          The page you're looking for seems to have drifted away. Don't worry, even the best algorithms get lost sometimes! Let's get you back to your connections.
        </p>
        
        <Link 
          href="/" 
          className="btn bg-[#1e3a34] hover:bg-[#2a5047] text-white border-none px-10 sm:px-12 py-3 rounded-xl font-semibold shadow-md transition-all hover:-translate-y-0.5"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
