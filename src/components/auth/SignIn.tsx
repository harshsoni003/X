interface SignInProps {
  onSignUp: () => void
  onForgotPassword: () => void
}

export default function SignIn({ onSignUp, onForgotPassword }: SignInProps) {
  return (
    <div className="p-8">
      {/* Logo and Title */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-xl font-bold text-white">∞</span>
        </div>
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="text-gray-400 mt-2">Sign in to your InfinityUI account</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
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
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </div>

        <button
          onClick={onForgotPassword}
          className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
        >
          Forgot password?
        </button>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl 
                    hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200
                    font-medium shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          Sign In
        </button>
      </form>
      
      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        
      </div>

      {/* Social Login Buttons */}
      
      
      <div className="text-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{' '}
          <button
            onClick={onSignUp}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
} 