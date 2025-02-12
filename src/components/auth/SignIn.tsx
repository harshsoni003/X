interface SignInProps {
  onSignUp: () => void
  onForgotPassword: () => void
}

export default function SignIn({ onSignUp, onForgotPassword }: SignInProps) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-white">Sign In</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <button
          onClick={onForgotPassword}
          className="text-sm text-blue-400 hover:underline"
        >
          Forgot your password?
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-300">
          Don't have an account?{' '}
          <button
            onClick={onSignUp}
            className="text-blue-400 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
} 