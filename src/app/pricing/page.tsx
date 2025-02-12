'use client'

import { useTheme } from '@/context/ThemeContext'

export default function PricingPage() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col items-center py-12 transition-colors duration-300
      ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
      <p className="text-lg mb-12 text-center max-w-2xl">
        Get top-class templates and components with tutorials on how to use them. Schedule a meeting for live interaction.
      </p>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Basic Plan */}
        <div className={`p-8 rounded-lg shadow-xl w-80 transition-transform duration-300 transform hover:scale-105
          ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-300'}`}>
          <h2 className="text-xl font-semibold mb-2">Basic</h2>
          <p className="text-2xl font-bold mb-4">Try For Free</p>
          <p className="text-4xl font-bold mb-2">$0</p>
          <p className="text-sm mb-6">one-time</p>
          <ul className="mb-6 space-y-2">
            <li>✔️ Limited components, templates, and tutorials</li>
            <li>❌ Access high-ticket programs</li>
            <li>❌ Access to "Bookmark" page</li>
            <li>❌ Search & filter programs</li>
            <li>❌ All future updates</li>
          </ul>
          <button className={`w-full py-2 rounded-full text-white hover:scale-105 transition-transform
            ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'}`}>
            Get Access Now
          </button>
          <p className="text-xs mt-4 text-center">Try free now, go Pro if you want more!</p>
        </div>

        {/* Pro Plan */}
        <div className={`p-8 rounded-lg shadow-xl w-80 relative transition-transform duration-300 transform hover:scale-105
          ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-300'}`}>
          <span className="absolute top-0 right-0 bg-gray-800 text-xs px-2 py-1 rounded-bl-lg">BUSY CREATORS' CHOICE</span>
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <p className="text-2xl font-bold mb-4">1 Month Access</p>
          <p className="text-4xl font-bold mb-2">$99</p>
          <p className="text-sm mb-6">one-time</p>
          <ul className="mb-6 space-y-2">
            <li>✔️ Access updated components, templates, and tutorials</li>
            <li>✔️ Schedule one meeting per week</li>
            <li>✔️ Tutorials on connecting frontend and backend</li>
            <li>✔️ Live tutorials and code provided</li>
            <li>✔️ All future updates</li>
          </ul>
          <button className={`w-full py-2 rounded-full text-white hover:scale-105 transition-transform
            ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'}`}>
            Get Lifetime Access Now
          </button>
          <p className="text-xs mt-4 text-center">65% off for the next 100 users (84 left)</p>
        </div>

        {/* Pro Yearly Plan */}
        <div className={`p-8 rounded-lg shadow-xl w-80 transition-transform duration-300 transform hover:scale-105
          ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-300'}`}>
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <p className="text-2xl font-bold mb-4">1 Year Access</p>
          <p className="text-4xl font-bold mb-2">$189</p>
          <p className="text-sm mb-6">one-time</p>
          <ul className="mb-6 space-y-2">
            <li>✔️ Access updated components, templates, and tutorials</li>
            <li>✔️ Schedule one meeting per week</li>
            <li>✔️ Tutorials on connecting frontend and backend</li>
            <li>✔️ Live tutorials and code provided</li>
            <li>✔️ All future updates</li>
          </ul>
          <button className={`w-full py-2 rounded-full text-white hover:scale-105 transition-transform
            ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'}`}>
            Get Access Now
          </button>
          <p className="text-xs mt-4 text-center">One-time payment for 1-year access</p>
        </div>
      </div>
    </div>
  )
} 