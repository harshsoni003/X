'use client'

import TutorialLayout from '@/components/layout/TutorialLayout'

export default function TutorialPage() {
  return (
    <TutorialLayout>
      <div className="flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold mb-4"> Updating soon all tutorial!</h1>
        <p className="text-lg mb-12 text-center max-w-2xl">
          Explore our comprehensive setup for sign-in/up with email and OTP. Download templates, view tutorials, and schedule live building sessions.
        </p>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 md:ml-auto md:mr-8">
          {/* Download Template */}
          <div className="p-8 rounded-lg shadow-xl w-80 transition-transform duration-300 transform hover:scale-105 bg-gray-100 border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">Download Template</h2>
            <p className="mb-4">Get the complete template for sign-in/up with email and OTP.</p>
            <button className="w-full py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 transition-transform">
              Download Now
            </button>
          </div>

          {/* View Tutorial */}
          <div className="p-8 rounded-lg shadow-xl w-80 transition-transform duration-300 transform hover:scale-105 bg-gray-100 border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">View Tutorial</h2>
            <p className="mb-4">Step-by-step guide to implementing the template.</p>
            <button className="w-full py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 transition-transform">
              View Now
            </button>
          </div>

          {/* Schedule Meeting */}
          <div className="p-8 rounded-lg shadow-xl w-80 transition-transform duration-300 transform hover:scale-105 bg-gray-100 border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">Schedule Meeting</h2>
            <p className="mb-4">Book a live session for personalized assistance.</p>
            <button className="w-full py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 transition-transform">
              Schedule Now
            </button>
          </div>
        </div>
      </div>
    </TutorialLayout>
  )
} 