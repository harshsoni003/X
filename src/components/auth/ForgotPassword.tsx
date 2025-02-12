interface ForgotPasswordProps {
  onBackToSignIn: () => void
}

export default function ForgotPassword({ onBackToSignIn }: ForgotPasswordProps) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-4 dark:text-white">Reset Password</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Reset Link
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <button
          onClick={onBackToSignIn}
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  )
} 