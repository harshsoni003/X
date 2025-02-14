interface ForgotPasswordProps {
  onBackToSignIn: () => void
}

export default function ForgotPassword({ onBackToSignIn }: ForgotPasswordProps) {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-xl font-bold text-white">∞</span>
        </div>
        <h2 className="text-3xl font-bold text-white">Reset Password</h2>
        <p className="text-gray-400 mt-2">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl 
                    hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200
                    font-medium shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          Send Reset Link
        </button>
      </form>
      
      <div className="text-center mt-8">
        <button
          onClick={onBackToSignIn}
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors inline-flex items-center"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Sign In
        </button>
      </div>
    </div>
  )
} 