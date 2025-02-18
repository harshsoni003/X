'use client'

import TutorialLayout from '@/components/layout/TutorialLayout'
import { useTheme } from '@/context/ThemeContext'
import { Calendar, Clock, Lock, Video } from 'lucide-react'

export default function ScheduleMeeting() {
  const { theme } = useTheme()

  const timeSlots = [
    { time: '9:00 AM', date: 'Mon, Jan 15', available: true },
    { time: '11:00 AM', date: 'Mon, Jan 15', available: false },
    { time: '2:00 PM', date: 'Tue, Jan 16', available: true },
    { time: '4:00 PM', date: 'Tue, Jan 16', available: true },
  ]

  return (
    <TutorialLayout>
      <div className="space-y-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <h1 className={`text-4xl font-bold transition-colors
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Schedule 1-on-1 Meeting
            </h1>
            <Lock className="w-6 h-6 text-yellow-500" />
          </div>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Book a personalized session with our authentication expert
          </p>

          {/* Meeting Details */}
          <div className={`p-6 rounded-lg border transition-colors mb-8
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Meeting Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>45 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Video className="w-5 h-5 text-blue-500" />
                <span>Video call via Zoom</span>
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className={`p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Available Time Slots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  disabled={!slot.available}
                  className={`p-4 rounded-lg border transition-all duration-200
                    ${slot.available 
                      ? theme === 'dark'
                        ? 'border-gray-700 hover:border-blue-500 hover:scale-[1.02]'
                        : 'border-gray-200 hover:border-blue-500 hover:scale-[1.02]'
                      : theme === 'dark'
                        ? 'border-gray-800 bg-gray-800 opacity-50 cursor-not-allowed'
                        : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                    }`}
                  onClick={() => slot.available && alert('Premium feature - Please subscribe to book meetings')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <div className="text-left">
                        <p className={`font-semibold
                          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {slot.time}
                        </p>
                        <p className={`text-sm
                          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {slot.date}
                        </p>
                      </div>
                    </div>
                    {!slot.available && (
                      <span className="text-sm text-red-500">Booked</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TutorialLayout>
  )
} 