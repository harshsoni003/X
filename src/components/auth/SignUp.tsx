interface SignUpProps {
  onSignIn: () => void
}

export default function SignUp({ onSignIn }: SignUpProps) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-white">Create Account</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400"
            placeholder="Enter your name"
          />
        </div>
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
            placeholder="Create a password"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-300">
          Already have an account?{' '}
          <button
            onClick={onSignIn}
            className="text-blue-400 hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  )
} 